const {v4: uuidv4} = require("uuid");

const User = require("../models/user");
const{setUser, getUser} = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if(!user) return res.render("login", {
        error: "Invalid Username or Password",
    });

   
    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};