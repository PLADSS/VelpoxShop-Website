const User = require('../models/user')

const test = (req, res) => {
    res.json('test is working');
}


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //check if name was entered
        if (!username) {
            return res.status(400).json({ error: 'Lütfen Bir Kullanıcı Adı Giriniz' });
        }
        //check if email was entered
        const exist = await User.findOne({ email: email });
        if (exist) {
            return res.status(400).json({ error: 'Bu Email Adresi Kullanılmaktadır' });
        }
        //check if password was entered
        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Şifre 6 Haneden Büyük Olmalı' });
        }
        
        const user = await User.create({
            username,
            email,
            password
        });
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Sunucu Hatası' }); // You should handle errors properly in production
    }
}

module.exports = {
    test,
    registerUser
}