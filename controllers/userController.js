const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single user by its _id and populated thought and friend data
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.UserId })
                .select('-__v')
                .populate('thoughts');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // post a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // put to update a user by its _id
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                { _id: req.params.userId }, 
                { new: true } 
                );

            if(!user) {
                return res.status(404).json({message: "No user found with that id"});
            }
            
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete to remove user by its _id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that id!' });
            }

            // remove a user's associated thoughts when deleted
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};