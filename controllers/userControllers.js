import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({})

    res.json({
        success: true,
        users,
    })
}

export const newUser = async (req, res) => {
    const { name, email, password } = req.body
    await User.create({
        name,
        email,
        password
    })

    res.status(201).cookie("temp", "hello_user").json({
        success: true,
        message: "User created successfully"
    })
}

export const getOneUser = async (req, res) =>{
    const { id } = req.params
    const user = await User.findById(id)
    console.log(req.params)
    res.json({
        success: true,
        user
    })
}
