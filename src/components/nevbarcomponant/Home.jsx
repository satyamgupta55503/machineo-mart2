
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        This is a simple example of a home page built using React and Tailwind CSS.
      </p>
      <ul className="list-disc list-inside text-left text-gray-700">
        <li className="mb-2">Feature 1: Quick navigation</li>
        <li className="mb-2">Feature 2: Modern design</li>
        <li>Feature 3: Responsive layout</li>
      </ul>
    </div>
  );
};

export default Home;
