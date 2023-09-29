const User = require('../models/user');
const jwt = require('jsonwebtoken');

//  handle user signup
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }
        // Create a new user document with plain text password
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during signup' });
    }
};

//  handle user login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find the user by username
        const user = await User.findOne({ username });
        // Check if the user exists
        if (!user) {
            console.error("Login failed:", { username, user });
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        if (user.password !== password) {
            console.error("Login failed:", { username, user });
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
};

