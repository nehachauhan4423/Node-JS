const CategoryModel = require('../models/CategoryModel')

const SubcategoryModel = require('../models/SubcategoryModel')

const ExSubcategoryModel = require('../models/ExsubcategoryModel')

const viewexsubcategorypage = async(req,res) => {
    try{
        let exsubcategory = await ExSubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/exviewsubcategory',{
            exsubcategory : exsubcategory
        })
    }catch(err) {
        console.log(err);
        return false
    }
}


const addexsubcategorypage = async(req,res) => {
  try{
    let categories = await CategoryModel.find({status : 'active'})
    let subcategories = await SubcategoryModel.find({status: 'active'});
    return res.render('exsubcategory/exaddsubcategory',{
        category : categories,
        subcategory : subcategories
    })
  }catch(err){
    console.log(err);
    return false
  }
}

const ajaxCategorywiseRecord = async (req, res) => {
  let categoryid = req.query.categoryid;
  console.log(categoryid);
  try {
      let category = await SubcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
      console.log(category);
      let subcategory = await ExSubcategoryModel.find({ categoryId: categoryid }).populate('categoryId').populate('subcategoryId');
      return res.status(200).send({
          success: true,
          message: "record successfully fetch",
          category: category,
          subcategory: subcategory
      })
    } catch (err) {
      console.log(err);
      return false;
  }
}


const insertExsubCategory = async (req, res) => {
  try {
      const { editid, category, subcategory, exsubcategory } = req.body;
      if (editid) {
          await ExSubcategoryModel.findByIdAndUpdate(editid, {
              categoryId: category,
              subcategoryId: subcategory,
              exsubcategory: exsubcategory
          })
          req.flash('success', 'Exsubcategory successfully update');
          return res.redirect('/exsubcategory')
      } else {
          await ExSubcategoryModel.create({
              categoryId: category,
              subcategoryId: subcategory,
              exsubcategory: exsubcategory
          })
          req.flash('success', 'Exsubcategory successfully create');
          return res.redirect('/exsubcategory/exaddsubcategory')
      }
  } catch (err) {
      console.log(err);
      return false;
  }
}

const deleteexsubcategegory = async (req, res) => {
    try {
        let id = req.query?.id;
        await ExSubcategoryModel.findByIdAndDelete(id);
        req.flash('success', 'subcategory successfully delete')
        return res.redirect('/exsubcategory');

    } catch (err) {
        console.log(err);
        return false;

    }
}


const editExsubcategory = async (req, res) => {
    try {
        let id = req.query?.id
        let category = await CategoryModel.find({ status: 'active' })
        let subcategory = await SubcategoryModel.find({ status: 'active' })

        let single = await ExSubcategoryModel.findById(id).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/exeditsubcategory', {
            category: category,
            subcategory: subcategory,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    viewexsubcategorypage,
    addexsubcategorypage,
    ajaxCategorywiseRecord,
    insertExsubCategory,
    deleteexsubcategegory,
    editExsubcategory
}