const Admin = require('../../models/Admin')
const { body } = require('express-validator')

module.exports = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Can\'t Be Field Empty')
        .isLength({min:5,max:30})
        .withMessage('Name Must Be Min 5 Chars and Max 30 Chars')
        .trim()
        ,
    body('username')
        .not()
        .isEmpty()
        .withMessage('Can\'t Be Field Empty')
        .isLength({min:5,max:30})
        .withMessage('Username Must Be Min 5 Chars and Max 30 Chars')
        .trim()
        ,
    body('email')
        .not()
        .isEmpty()
        .withMessage('Can\'t Be Field Empty')
        .isEmail()
        .withMessage('Please Provied Valid Email')
        ,
    body('phone')
        .not()
        .isEmpty()
        .withMessage('Can\'t Be Field Empty')
        .isLength({min:10,max:30})
        .withMessage('Phone Must Be Min 10 And Max 30 Chars')
        .trim()
        ,
    body('dateOfBirthday')
        .not()
        .isEmpty()
        .withMessage('Please Select Date')
        ,
    body('gender')
        .not()
        .isEmpty()
        .withMessage('Please Select Gender')
]