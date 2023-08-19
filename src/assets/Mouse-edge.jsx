import React, { useEffect, useState } from 'react';

const MouseEdgeDetectionComponent = () => {
  const [isAtEdge, setIsAtEdge] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Get the viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Define the threshold for considering the mouse at the edge (e.g., 10 pixels from the edge)
      const edgeThreshold = 10;

      // Check if the mouse is at the edge of the screen
      const isAtHorizontalEdge = clientX <= edgeThreshold || clientX >= viewportWidth - edgeThreshold;
      const isAtVerticalEdge = clientY <= edgeThreshold || clientY >= viewportHeight - edgeThreshold;

      const isAtEdge = isAtHorizontalEdge || isAtVerticalEdge;

      setIsAtEdge(isAtEdge);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default MouseEdgeDetectionComponent;
