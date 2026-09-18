const password= "secretword123";
const userInput = "secretword123";
const adminPassword = "override";
const response = "";

if (userInput === password) {
    console.log("Logged in")
} else if (userInput === adminPassword) {
    console.log("Admin access granted")
} else {
    console.log("Incorrect password")
};