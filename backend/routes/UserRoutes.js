const express = require('express');
const userRoute = express.Router();
const { getAllUsers, addUser, getUserById, updateUser, deleteUser, signIn, signUp } = require('../controllers/UserControllers');

const { AuthValidation } = require('../middleware/AuthValidation');
const { SignInValidation, SignUpValidation, Validation } = require('../middleware/SignUpValidation');

userRoute.use(express.json());

//http://localhost:5000/user/allUsers
userRoute.get('/allUsers', getAllUsers);
//http://localhost:5000/user/addUser
userRoute.post('/addUser', SignUpValidation, Validation, addUser);
//http://localhost:5000/user/getUserById/:id
userRoute.get('/getUserById/:id', getUserById);
//http://localhost:5000/user/updateUser/:id
userRoute.put('/updateUser/:id', updateUser);
//http://localhost:5000/user/deleteUser/:id
userRoute.delete('/deleteUser/:id', deleteUser);
//http://localhost:5000/user/signin
userRoute.post('/signin', SignInValidation, Validation, signIn);
//http://localhost:5000/user/signup
userRoute.post('/signup', SignUpValidation, Validation, signUp);
//http://localhost:5000/user/myaccount
userRoute.get('/myaccount', AuthValidation, async (req, res) => {
    res.send(res.user);
    console.log("this is the req :", res.user);
})


module.exports = userRoute;