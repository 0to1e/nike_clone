import { useEffect, useRef, useState } from "react";

const ResizableComponent = () => {
  const divRef = useRef(null); // Reference to the DOM element
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Get the new dimensions of the observed element
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (divRef.current) {
      // Observe the element
      resizeObserver.observe(divRef.current);
    }

    return () => {
      // Stop observing the element when the component unmounts
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "50%",
          height: "200px",
          resize: "both",
          overflow: "auto",
          border: "1px solid black",
        }}
      >
        Resize me!
      </div>
      <p>
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </div>
  );
};

export default ResizableComponent;

