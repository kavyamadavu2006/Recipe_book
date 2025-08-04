// createAdmin.js

const mongoose = require('mongoose');
const AdminModel = require('./model/Admin_model');
const bcrypt = require('bcrypt');

// Replace 'your_mongodb_connection_string' with your actual MongoDB connection string
const dbConnectionString = 'mongodb://0.0.0.0:27017/recipebook';

mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
    try {
        const email = 'admin@gmail.com';
        const password = 'admin';
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newAdmin = new AdminModel({
            email,
            password: hashedPassword
        });

        await newAdmin.save();
        console.log('Admin created successfully');
        mongoose.disconnect();
    } catch (err) {
        console.error(err);
        mongoose.disconnect();
    }
};

createAdmin();
