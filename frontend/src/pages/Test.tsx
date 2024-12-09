// import { useEffect, useRef, useState } from "react";

// const ResizableComponent = () => {
//   const divRef = useRef(null); // Reference to the DOM element
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (const entry of entries) {
//         // Get the new dimensions of the observed element
//         const { width, height } = entry.contentRect;
//         setDimensions({ width, height });
//       }
//     });

//     if (divRef.current) {
//       // Observe the element
//       resizeObserver.observe(divRef.current);
//     }

//     return () => {
//       // Stop observing the element when the component unmounts
//       if (divRef.current) {
//         resizeObserver.unobserve(divRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         ref={divRef}
//         style={{
//           width: "50%",
//           height: "200px",
//           resize: "both",
//           overflow: "auto",
//           border: "1px solid black",
//         }}
//       >
//         Resize me!
//       </div>
//       <p>
//         Width: {dimensions.width}px, Height: {dimensions.height}px
//       </p>
//     </div>
//   );
// };

// export default ResizableComponent;

import React, { useState } from 'react';
import '../App.css'; // Ensure this file has the updated styles

const App = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [circles, setCircles] = useState([]);

  const toggleCreating = () => {
    setIsCreating(!isCreating);
  };

  const createCircle = (e) => {
    if (!isCreating) return;

    const newCircle = {
      id: Date.now(),
      color: getRandomColor(),
      x: e.clientX,
      y: e.clientY,
    };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  const deleteCircle = (id) => {
    setCircles((prevCircles) =>
      prevCircles.map(circle =>
        circle.id === id ? { ...circle, removing: true } : circle
      )
    );
    setTimeout(() => {
      setCircles((prevCircles) => prevCircles.filter(circle => circle.id !== id));
    }, 300); // Match this duration with the CSS transition
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="app" onClick={isCreating ? createCircle : undefined}>
      <button onClick={toggleCreating} className="toggle-button">
        {isCreating ? 'Stop Creating Circles' : 'Create Circles'}
      </button>
      {circles.map((circle) => (
        <div
          key={circle.id}
          onClick={(e) => {
            e.stopPropagation();
            deleteCircle(circle.id);
          }}
          className={`circle ${circle.removing ? 'removing' : ''}`}
          style={{
            backgroundColor: circle.color,
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
    </div>
  );
};

export default App;
