function handleClick(evt) {
    // Your code to handle the click event goes here
    // For example, you can access event properties or perform actions based on the click
    console.log("Click event occurred");
    console.log("Event details:", evt);
    
    // Example: Changing text content of an element with id="output"
    document.getElementById("output").textContent = "Button clicked!";
}

// Example of attaching click event handler to an element with id="myButton"
document.getElementById("myButton").addEventListener("click", handleClick);
