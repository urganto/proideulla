/**
 * Returns a transition that offsets the view by the specified amount.
 * @param {number} offsetX - The horizontal offset amount.
 * @param {number} offsetY - The vertical offset amount.
 * @returns {Transition} - A transition effect that offsets the view.
 */
function offsetTransition(offsetX, offsetY) {
    return {
        type: 'offset',
        offsetX: offsetX,
        offsetY: offsetY,
        duration: 500 // Example: Transition duration in milliseconds
        // Additional properties or methods as needed
    };
}
