const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
    const choice = document.querySelector("input[name=startup]:checked").value;
    const data = { startup: choice };

    fetch("http://localhost:8000/poll", {
        method: "post",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    e.preventDefault();
});

// for chart
let dataPoints = [
    { label: "Cars24", y: 0 },
    { label: "Unacademy", y: 0 },
    { label: "Zerodha", y: 0 },
    { label: "Razorpay", y: 0 },
];

const chartContainer = document.querySelector("#chartContainer");

if (chartContainer) {
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "theme1",
        title: {
            text: "Vote Results",
        },
        data: [
            {
                type: "column",
                dataPoints: dataPoints,
            },
        ],
    });

    chart.render();

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher("86b31112d6e31ea5f9ff", {
        cluster: "ap2",
    });

    var channel = pusher.subscribe("startup-poll");
    channel.bind("startup-vote", function (data) {
        dataPoints = dataPoints.map((x) => {
            if (x.label == data.startup) {
                x.y += data.points;
                return x;
            } else {
                return x;
            }
        });
        chart.render();
    });
}
