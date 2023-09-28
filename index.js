//A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. 

//They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

//The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

//A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

//New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.


const freelancer = [Alice, Bob, Carol];
const price = ["30", "50", "70"];
const maxAvailable = 10;
const available = [
  {
    freelancer: "Alice",
    price: "30",
  },
  {
    freelancer: "Bob",
    price: "50",
  },
  {
        freelancer: "Carol",
        price: "70",
      },
];
const addAvailableIntervalId = setInterval(addAvailable, 100);

function addAvailable() {
    const price = price[Math.floor(Math.random() * price.length)];
    available.push({ freelancer, price })
  };
  render(); 
  const  render = function() {

    const freelancers = document.querySelector("#freelancers");
