console.log("Hi, Kesh");

let customerList = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "Emily Wilson",
];

let customer = {
    name: "John Doe",
    age: 30,
    email: "Joe@gmail.com"
}

customerList.push([10,20,30,40,50]);

console.log(customerList);

// customerList.pop();
// customerList.pop();

customerList.shift();// Removes the first element from the array
customerList.unshift("New Customer"); // Adds a new element at the beginning of the array


