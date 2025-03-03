const CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require('../models/SubcategoryModel')


const addsubCategorypage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({ status: 'active' });
        return res.render('subcategory/addsubcategory', {
            category: categories
        })
    } catch (err) {
        console.log(err);
        return false;

    }
}

const viewsubCategorypage = async (req, res) => {
     try {
        const subcategory = await SubCategoryModel.find({}).populate('categoryId');
        return res.render('subcategory/viewsubcategory', {
            subcategory: subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}



const insertSubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory } = req.body;
        if (editid) {
            await SubCategoryModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategory: subcategory
            })
            req.flash('success', "subcategory update");
            return res.redirect('/subcategory')
        } else {
            await SubCategoryModel.create({
                categoryId: category,
                subcategory: subcategory
            })
            req.flash('success', "Subcategory add");
            return res.redirect('/subcategory/addsubcategorypage')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}


const deleteSubctaegory = async(req,res) => {
    try{
        let id = req.query?.id;
        await SubCategoryModel.findByIdAndDelete(id);
        req.flash('success','Subcategory delete')
        return res.redirect('/subcategory')
    }catch(err){
        console.log(err);
        return false
    }
}

const editSubcategory = async(req,res) => {
    try{
        const id = req.query?.id;
        let category = await CategoryModel.find({status:'active'});
        let single = await SubCategoryModel.findById(id).populate('categoryId');
        return res.render('subcategory/editsubcategory',{
            single : single,
            category : category
        })
    }catch(err){
        console.log(err);
        return false
    }
}


const changeStatus = async(req,res) => {
    try{
        const {id,status} = req.query;
        if(status == "deactive"){
            await SubCategoryModel.findByIdAndUpdate(id,{
                status : status
            })
            req.flash('success',"Subcategory update")
            return res.redirect('/subcategory')
        }else{
            await SubCategoryModel.findByIdAndUpdate(id,{
                status : status
            })
            req.flash("success","Subcategory Update")
            return res.redirect('/subcategory')
        }
    }catch(err){
        console.log(err);
        return false
    }
}

module.exports = {
    addsubCategorypage,
    viewsubCategorypage,
    insertSubcategory,
    deleteSubctaegory,
    editSubcategory,
    changeStatus
}