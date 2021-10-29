const json = require("body-parser/lib/types/json");
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1288971",
    key: "86b31112d6e31ea5f9ff",
    secret: "1aef121b5b01e31ffcdd",
    cluster: "ap2",
    useTLS: true,
});

module.exports.poll = (req, res) => {
    return res.send("<h1>This is poll page</h1>");
};

// const about = "startup";

module.exports.doPoll = (req, res) => {
    pusher.trigger("startup-poll", "startup-vote", {
        points: 1,
        startup: req.body.startup,
    });

    return res.json({
        success: true,
        message: `Voted successfully for ${req.body.startup}`,
    });
};
