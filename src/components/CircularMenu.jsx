import React, { useState, useRef, useEffect } from 'react';

const CircularMenuTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const buttonRef = useRef(null);

  // Calculate the maximum radius needed to cover the screen from the button position
  useEffect(() => {
    const calculateDimensions = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        // Calculate distances to all corners
        const distances = [
          Math.hypot(buttonCenterX, buttonCenterY), // Distance to top-left
          Math.hypot(window.innerWidth - buttonCenterX, buttonCenterY), // top-right
          Math.hypot(buttonCenterX, window.innerHeight - buttonCenterY), // bottom-left
          Math.hypot(window.innerWidth - buttonCenterX, window.innerHeight - buttonCenterY) // bottom-right
        ];

        // Use the maximum distance as the circle radius
        const maxRadius = Math.max(...distances);

        setDimensions({
          width: maxRadius * 2,
          height: maxRadius * 2
        });
      }
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-center w-6 h-6">
          <span
            className={`
              block w-6 h-0.5 bg-current
              transition-all duration-300 ease-in-out
              ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}
              ${isOpen ? 'text-white' : 'text-gray-800'}
            `}
          />
          <span
            className={`
              block w-6 h-0.5 bg-current
              transition-all duration-200
              ${isOpen ? 'opacity-0' : 'opacity-100'}
              ${isOpen ? 'text-white' : 'text-gray-800'}
            `}
          />
          <span
            className={`
              block w-6 h-0.5 bg-current
              transition-all duration-300 ease-in-out
              ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}
              ${isOpen ? 'text-white' : 'text-gray-800'}
            `}
          />
        </div>
      </button>

      {/* Circular Overlay */}
      <div
        className={`
          fixed top-0 right-0 z-40
          pointer-events-none
          transition-transform duration-700 ease-in-out
          bg-blue-600
          rounded-full
          origin-top-right
        `}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          transform: isOpen ? 'scale(1)' : 'scale(0)',
          right: `-${dimensions.width / 2}px`,
          top: `-${dimensions.height / 2}px`
        }}
      />

      {/* Menu Content */}
      <nav
        className={`
          fixed inset-0 z-40
          flex items-center justify-center
          transition-opacity duration-700
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <ul className="text-white text-4xl space-y-8">
          <li className="hover:text-blue-200 transition-colors"><a href="#home">Home</a></li>
          <li className="hover:text-blue-200 transition-colors"><a href="#about">About</a></li>
          <li className="hover:text-blue-200 transition-colors"><a href="#services">Services</a></li>
          <li className="hover:text-blue-200 transition-colors"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default CircularMenuTransition;
