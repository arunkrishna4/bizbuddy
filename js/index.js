//Total revenue graph
const xValu = ["2020", "2021", "2022", "2023", "2024"];
const yValu = [5400, 4800, 6000, 6500, 6700];
const barColor = ["red", "green","blue","orange","brown"];

new Chart("totrev", {
type: "bar",
data: {
labels: xValu,
datasets: [{
backgroundColor: barColor,
data: yValu
}]
},
options: {
legend: {display: false},
scales: {
    yAxes: [{ ticks: { min: 4000, max: 7000 } }]
},
title: {
display: false,
text: "World Wine Production 2018"
}
}
});
//sales graph
const xValues = [ "Jan", "Feb","Mar", "Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const yValues = [1600,2400,4005,3909,6712,8902,3090,6032,7700,4509,2304,8059];

new Chart("sales", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 1000, max: 9000 } }]
        }
    }
});

//expense graph
const xVal = ["Income", "Expense"];
const yVal = [9000,4000];
const barColors = [
    "#b91d47",
    "#00aba9"
];

new Chart("expense", {
type: "pie",
data: {
    labels: xVal,
    datasets: [{
    backgroundColor: barColors,
    data: yVal
    }]
},

});