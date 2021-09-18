const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter title'],
        trim: true,
        maxLength: [100, 'News title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter news description'],
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter news category'],
        enum: {
            values: [
                'News',
                'Collect',
                'Campaign'
            ],
            message: 'Please select correct category for news'
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);