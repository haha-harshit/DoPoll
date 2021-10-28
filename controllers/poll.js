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

module.exports.doPoll = (req, res) => {
    pusher.trigger("os-poll", "os-vote", {
        poitns: 1,
        os: req.body.os,
    });

    return res.json({ success: true, message: "Voted successfully!" });
};
