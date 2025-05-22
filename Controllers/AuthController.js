const UserModel = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try{
        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        const userModel = new UserModel({
            name,
            email,
            password
        });
        userModel.password = await bcrypt.hash(userModel.password, 10);
        await userModel.save();
        res.status(201).json({message: "User created successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal server error"})
    }
}

//login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "your_jwt_secret",
            { expiresIn: "10m" }
        );
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    signup,
    login
}