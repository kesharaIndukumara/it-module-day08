console.log("Hi, Kesh");

let customerList = [
    "x",
    "Zamal",
    "Xunil",
    "amal",
    "nimal",
    "Charlie Davis",
    "Emily Wilson",
    "x"
];

console.log(customerList);


// let customer = {
//     name: "John Doe",
//     age: 30,
//     email: "Joe@gmail.com"
// }

// customerList.push([10,20,30,40,50]);

// console.log(customerList);

// customerList.pop();
// customerList.pop();

// customerList.shift();// Removes the first element from the array
// customerList.unshift("New Customer"); // Adds a new element at the beginning of the array

// let index = customerList.indexOf("nimal");
// console.log(index);

// console.log(customerList[index] = "bimal");
// console.log(customerList);

// console.log(customerList.includes("kamal")); // Checks if "kamal" is in the array

let letters = [
    "F",
    "E",
    "C",
    "D",
    "B",
    "A"
];

// console.log(letters);

// console.log(letters.sort()); 

// console.log(customerList.sort());

let numbers = [
    4,
    2, 
    5,
    1
]
// console.log(numbers);

// console.log(numbers.sort());


let customerList2 = [
    "nimal",
    "amal",
    "kamal",
    "bimal",
    "sunil",
    {
        numbers: [10, 20, 30, 40, 50],
        letters: ["A", "B", "C",{
            simple: ["a", "b", "c"],
        }, "D", "E"],
    },
    ["A", "B", "C", "D", "E"],

];

// console.log(customerList2);

// console.log(customerList2[5].numbers[2]); // Accessing the third element in the number array within the object

// console.log(customerList2[5].letters[1])// Accessing the second element in the letters array within the object

// console.log(customerList2[6][2]); // Accessing the third element in the array within the customerList2 array

// console.log(customerList2[5].letters[3].simple[2]); // Accessing the first element in the simple array within the letters array in the object


function showAlert(){
    Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
});
}


