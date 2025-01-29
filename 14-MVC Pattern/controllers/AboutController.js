const addPage = (req,res) => {
    return res.render('about/add')
}

const viewPage = (req,res) => {
    return res.render('about/view')
}

module.exports = {
    addPage,viewPage
}