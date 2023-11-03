const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        trim: true,
        maxlength: [50, "Email cannot be more than 50 characters"]
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"],
        trim: true,
        maxlength: [20, "Phone number cannot be more than 20 characters"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);