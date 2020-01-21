import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: String,
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Task = mongoose.model('Task', TaskSchema);