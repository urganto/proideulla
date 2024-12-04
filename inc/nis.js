/**
 * Perform some operation with the specified color rendering mode.
 * @param {string} colorRenderingMode - The color rendering mode (defaults to "nonLinear" if not provided).
 */
function performOperation(colorRenderingMode = "nonLinear") {
    // Function logic here
    console.log(`Performing operation with color rendering mode: ${colorRenderingMode}`);
}

// Example Usage
performOperation(); // Uses the default "nonLinear" color rendering mode
performOperation("linear"); // Uses the specified "linear" color rendering mode
