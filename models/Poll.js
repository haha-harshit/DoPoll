const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PollSchema = new Schema({
    startup: {
        type: String,
        required: true,
    },
    points: {
        type: String,
        required: true,
    },
});

const Poll = mongoose.model("Poll", PollSchema);
module.exports = Poll;
