const CategoryModel = require('../models/CategoryModel');


const addCategoryPage = (req, res) => {
    return res.render('category/addcategorypage')
}


const viewCategoryPage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({});
        return res.render('category/viewcategory', {
            category: categories
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}


const insertCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const add = await CategoryModel.create({
            category: category
        })
        req.flash('success', 'category add successfully');
        return res.redirect('/category/addcategorypage')
    } catch (err) {
        console.log(err);
        return false
    }
}


const deleteCategory = async (req, res) => {
    try {
        let id = req.query?.id;
        await CategoryModel.findByIdAndDelete(id);
        req.flash('success', 'category delete successfully');
        return res.redirect('/category')
    } catch (err) {
        console.log(err);
        return false
    }
}


const editCategory = async(req,res) => {
    try{
        let id = req.query?.id;
        let single = await CategoryModel.findById(id);
        return res.render('category/editcategory',{
            single : single
        })
    }catch(err) {
        console.log(err);
        return false
    }
}



const updateCategory = async(req,res) => {
    try{
        const {editid,category} = req.body;
        await CategoryModel.findByIdAndUpdate(editid,{
            category : category
        })
        req.flash('success','category successfully updated')
        return res.redirect('/category')
    }catch(err) {
        console.log(err);
        return false;;
    }
}


const changeStatus = async(req,res) => {
    try{
        const {id,status} = req.query;
        if (status == 'decative') {
            await CategoryModel.findByIdAndUpdate(id,{
                status : status
            })
            req.flash('success','category successfully update')
            return res.redirect('/category')
        }else{
            await CategoryModel.findByIdAndUpdate(id,{
                status : status
            })
            req.flash("success","category successfully update")
            return res.redirect('/category')
        }
    }catch(err) {
        console.log(err);
        return false
    }
}

module.exports = {
    addCategoryPage,
    viewCategoryPage,
    insertCategory,
    deleteCategory,
    editCategory,
    updateCategory,
    changeStatus
}