const express = require("express")
const posts = require("../util/posts")


exports.getpost = async (req, res, next) => {
    
    const { user, password, title, content } = req.body;
    

    const goods = await posts.find({ user });
    if (goods.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdGoods = await posts.create({ user, password, title, content });

    res.json({ goods: createdGoods });

}