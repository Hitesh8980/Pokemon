import React from 'react';

const Skeleton = () => (
  <div className="border p-4 rounded shadow-md animate-pulse">
    <div className="bg-gray-300 w-full h-48 mb-4"></div>
    <div className="bg-gray-300 w-3/4 h-6 mb-2"></div>
    <div className="bg-gray-300 w-1/2 h-4"></div>
  </div>
);

export default Skeleton;
