import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => <div className="bg-gray-100 p-4">{children}</div>;
const CardContent = ({ children }) => <div className="p-4">{children}</div>;

export { Card, CardHeader, CardContent };
