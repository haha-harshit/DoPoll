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
    { label: "cars24", y: 0 },
    { label: "unacademy", y: 0 },
    { label: "zerodha", y: 0 },
    { label: "razorpay", y: 0 },
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
}
