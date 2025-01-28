const productAdd = (req,res) =>{
    return res.render('product/add')
}

const productView = (req,res) =>{
    return res.render('product/view')
}

module.exports = {
    productAdd,productView
}