const CategoryModel = require('../models/CategoryModel')

const SubcategoryModel = require('../models/SubcategoryModel')

const ExsubcategoryModel = require('../models/ExsubcategoryModel')

const ProductModel = require('../models/ProductModel')

const viewproductsubcategorypage = async (req, res) => {
    try {
        let productcategory = await ProductModel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId');
        return res.render('productcategory/productviewcategory', {
            productcategory: productcategory
        })
    } catch (err) {
        console.log(err);
        return false
    }
}


const addproductcategorypage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({ status: 'active' })
        let subcategories = await SubcategoryModel.find({ status: 'active' });
        let exsubcategories = await ExsubcategoryModel.find({ status: 'active' })
        return res.render('productcategory/productaddcategory', {
            category: categories,
            subcategory: subcategories,
            exsubcategory: exsubcategories
        })
    } catch (err) {
        console.log(err);
        return false
    }
}

const ajaxProductCategorywiseRecord = async (req, res) => {
    let categoryid = req.query.categoryid;
    console.log(categoryid);
    try {
        let category = await SubcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
        console.log(category);
        let subcategory = await ExSubcategoryModel.find({ categoryId: categoryid }).populate('categoryId').populate('subcategoryId');
        console.log(subcategory);
        let productcategory = await ProductModel.find({ categoryId: categoryid }).populate('categoryId').populate('productId');
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            category: category,
            subcategory: subcategory,
            exsubcategory: exsubcategory,
            productcategory: productcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}



const insertProductCategory = async (req, res) => {
    try {
        const { editid, category, subcategory, exsubcategory, productcategory } = req.body;
        if (editid) {
            await ProductModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategory: exsubcategory,
                productcategory, productcategory
            })
            req.flash('success', 'Exsubcategory successfully update');
            return res.redirect('/productcategory')
        } else {
            await ProductModel.create({
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategory: exsubcategory,
                productcategory, productcategory
            })
            req.flash('success', 'Exsubcategory successfully create');
            return res.redirect('/productcategory/productaddcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

// const deleteexsubcategegory = async (req, res) => {
//     try {
//         let id = req.query?.id;
//         await ExSubcategoryModel.findByIdAndDelete(id);
//         req.flash('success', 'subcategory successfully delete')
//         return res.redirect('/exsubcategory');

//     } catch (err) {
//         console.log(err);
//         return false;

//     }
// }


// const editExsubcategory = async (req, res) => {
//     try {
//         let id = req.query?.id
//         let category = await CategoryModel.find({ status: 'active' })
//         let subcategory = await SubcategoryModel.find({ status: 'active' })

//         let single = await ExSubcategoryModel.findById(id).populate('categoryId').populate('subcategoryId');
//         return res.render('exsubcategory/exeditsubcategory', {
//             category: category,
//             subcategory: subcategory,
//             single
//         })
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

module.exports = {
    viewproductsubcategorypage,
    addproductcategorypage,
    ajaxProductCategorywiseRecord,
    insertProductCategory
}