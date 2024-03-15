let freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Dr. Slice", startingPrice: 25, occupation: "gardener" },
    { name: "Dr. Pressure", startingPrice: 51, occupation: "programmer" },
    { name: "Prof. Possibility", startingPrice: 43, occupation: "teacher" },
    { name: "Prof. Prism", startingPrice: 81, occupation: "teacher" },
    { name: "Dr. Impulse", startingPrice: 43, occupation: "teacher" },
    { name: "Prof. Spark", startingPrice: 76, occupation: "programmer" },
    { name: "Dr. Wire", startingPrice: 47, occupation: "teacher" },
    { name: "Prof. Goose", startingPrice: 72, occupation: "driver" },
];

function displayFreelancers() {
    const freelancersList = document.getElementById("freelancersList");
    freelancersList.innerHTML = ""; 

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}</p>
                                   <p>Occupation: ${freelancer.occupation}</p>
                                   <p>Starting Price: $${freelancer.startingPrice}</p>`;
        freelancersList.appendChild(freelancerDiv);
    });

    updateAveragePrice();
}

function updateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length;
    document.getElementById("averagePrice").textContent = averagePrice.toFixed(2);
}

function addNewFreelancer() {
    const newFreelancers = [
        { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    ];

    newFreelancers.forEach(newFreelancer => {
        freelancers.push(newFreelancer);
    });

    displayFreelancers();
}

displayFreelancers(); 

setInterval(addNewFreelancer, 3000); 