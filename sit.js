import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Place your side effect code here
    console.log('Component mounted or updated');
    
    // Clean-up function (optional)
    return () => {
      console.log('Component will unmount');
      // Cleanup code here
    };
  }, []); // Dependency array

  // JSX for your component
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default MyComponent;
