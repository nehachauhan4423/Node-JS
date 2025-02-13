const Users = require('../models/UserModel');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if (req.cookies?.auth) {
        return res.redirect('/dashboard')
    }
    return res.render('login');
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log('PLEASE ENTER VALID PASS & EMAIL');
            return res.redirect('/');
        }
        res.cookie('auth', user);
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false
    }

}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await Users.users.create({
            name: name,
            email: email,
            password: password
        })
        console.log('USER REGISTER');
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

const addBlogPage = (req, res) => {
    return res.render('addBlog')
}

const viewBlogPage = async(req,res) => {
    try{
        return res.render('viewBlog',{
            allBlogs : await Users.blogUser.find()
        });
    }catch(err) {
        console.log(err);
        return false
    }
}

const addBlogUser = async(req,res) => {
    try{
        const {title,description} = req.body;
        // console.log(title,description);
        await Users.blogUser.create({
            title : title,
            description: description,
            image : req.file?.path
        })
        console.log(`DATA ADD..!`);
        return res.redirect('/viewblogpage')
    }catch(err){
        console.log(err);
        return false;
    }
}
const deleteBlogUser = async(req,res) => {
    try{
        let single = await Users.blogUser.findById(req.query.delId);
        fs.unlinkSync(single?.image)
        await Users.blogUser.findByIdAndDelete(req.query.delId)
        console.log(`DATA DELETE..!`);
        return res.redirect('/viewblogpage')
    }catch(err){
        console.log(err);
        return false
    }
}

const editBlogUser = async (req,res) => {
    try{
        return res.redirect('editBlog',{
             oneRow : await Users.blogUser.findById(req.query.editId)
        })
    }catch(err){
        console.log(err);
        return false
    }
}

const updateBlogUser = async(req,res) => {
    try{
        const { editId,title,description} = req.body;
        if (req.file) {
            let oneRow = await Users.blogUser.findById(editId);
            fs.unlinkSync(oneRow?.image);
            await Users.blogUser.findByIdAndUpdate(editId,{
                title : title,
            description: description,
            image : req.file?.path
            })
            console.log(`DATA UPDATE`);
            return res.redirect('/viewblogpage')
        }
    }catch(err){
        console.log(err);
        return false
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/')
}


module.exports = {
    registerPage,
    loginPage,
    dashboardPage,
    registerUser,
    logoutUser,
    loginUser,
    addBlogPage,
    addBlogUser,
    deleteBlogUser,
    editBlogUser,
    updateBlogUser,
    viewBlogPage
}


