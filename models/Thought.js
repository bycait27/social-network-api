const { Schema, model } = require('mongoose');

// schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// create a virtual property 'reactionCount' that gets the length of the thought's reactions array field
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })
    .get(function () {
        return moment().format();
    });

    // initialize Thought model
    const Thought = model('thought', thoughtSchema);

    module.exports = Thought;