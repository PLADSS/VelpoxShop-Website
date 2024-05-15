const User = require('../models/user')
const {hashPassword , comparePassword}= require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
}


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //isim girildi mi
        if (!username) {
            return res.json({ error: 'Lütfen Bir Kullanıcı Adı Giriniz' });
        }
        //email girildi mi
        const exist = await User.findOne({ email: email });
        if (exist) {
            return res.json({ error: 'Bu Email Adresi Kullanılmaktadır' });
        }
        //şifre girildi mi
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
        //Kullanıcı adı kayıtlı mı 
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.json({ error: 'Bu Kullanıcı Adı Kayıtlı Değil' });
        }
        //Şifre eşleşiyor mu 
        const match = await comparePassword(password, user.password);
        if (match) {
            const token = jwt.sign({ username: user.username, id: user._id, name: user.name }, process.env.JWT_SECRET,{},(err, token) => {
                if (err) throw err;
                 res.cookie('token', token).json(user);
        })

            
        }
        if (!match) {
            return res.json({ error: 'Şifre Yanlış' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Sunucu Hatası' }); // You should handle errors properly in production
    }
}

const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;{
                 res.json(user);
            }})
        }else{
                res.json(null)
            }
        }

        module.exports = {
            test,
            registerUser,
            loginUser,
            getProfile
        }
