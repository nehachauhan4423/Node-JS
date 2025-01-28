const addPage = (req,res) =>{
    return res.render('blog/add')
}
const viewPage = (req,res) =>{
    return res.render('blog/view')
}

module.exports ={
    addPage,viewPage
}