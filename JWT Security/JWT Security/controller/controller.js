const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
require('dotenv').config();

exports.register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    await user.save();
    res.status(201).send('User registered');
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    res.json({ token });
};

exports.getProfile = async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
}