function send(data, options = { trap: true }) {
    try {
        // Simulating a function that might throw an error
        if (!data) {
            throw new Error("Data is required");
        }
        
        // Simulate sending data logic here
        console.log("Data sent:", data);
        
    } catch (error) {
        if (options.trap) {
            console.error("Error trapped:", error.message);
            // Handle the error internally
        } else {
            throw error; // Propagate the error up the call stack
        }
    }
}

// Usage with error trapping enabled (default behavior)
try {
    send(null); // This will trap the error and log it internally
} catch (error) {
    console.error("This will not be reached because the error is trapped.");
}

// Usage with error trapping disabled
try {
    send(null, { trap: false }); // This will throw the error and it will be caught here
} catch (error) {
    console.error("Caught an error:", error.message); // This will be reached
}

// Normal usage with valid data
try {
    send({ message: "Hello, World!" }); // This will work fine and print "Data sent: [object Object]"
} catch (error) {
    console.error("No error should occur here.");
}
