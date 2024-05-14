const User = require('../models/user')
const {hashPassword , comparePassword}= require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working');
}


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //check if name was entered
        if (!username) {
            return res.json({ error: 'Lütfen Bir Kullanıcı Adı Giriniz' });
        }
        //check if email was entered
        const exist = await User.findOne({ email: email });
        if (exist) {
            return res.json({ error: 'Bu Email Adresi Kullanılmaktadır' });
        }
        //check if password was entered
        if (!password || password.length < 6) {
            return res.json({ error: 'Şifre 6 Haneden Büyük Olmalı' });
        }
        
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            username,
            email,
            password : hashedPassword,
        });
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Sunucu Hatası' }); // You should handle errors properly in production
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        //Email girildi mi
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.json({ error: 'Bu Kullanıcı Adı Kayıtlı Değil' });
        }
        //Şifre girildi mi
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({ error: 'Şifre Yanlış' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Sunucu Hatası' }); // You should handle errors properly in production
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}