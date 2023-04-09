const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        max: 255
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


module.exports = mongoose.model('comment', CommentSchema)
