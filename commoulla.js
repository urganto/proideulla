// Assume _clone is a custom function for deep cloning with depth control
function _clone(obj, depth) {
  // Custom logic to clone obj with specified depth
}

// Usage of _clone to create a child copy with reduced depth
var value = { /* some object */ };
var depth = 3; // Initial depth
var valueChild = _clone(value, depth - 1); // Create a child copy with reduced depth

// Now you can use valueChild as a shallow copy of value with reduced depth
