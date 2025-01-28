const addPage = (req,res) =>{
    return res.render('crud/add')
}

const viewPage = (req,res)=>{
    return res.render('crud/view')
}

module.exports ={
    addPage,viewPage
}
