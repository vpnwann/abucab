// components/FilterButtons.js
"use client"
import { useState } from 'react';

const FilterButtons = () => {
  const [activeContent, setActiveContent] = useState('content1');

  const handleButtonClick = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <button
          className="filter-btn bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => handleButtonClick('content1')}
        >
          Content 1
        </button>
        <button
          className="filter-btn bg-green-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => handleButtonClick('content2')}
        >
          Content 2
        </button>
        <button
          className="filter-btn bg-red-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => handleButtonClick('content3')}
        >
          Content 3
        </button>
      </div>

      <div className={`content ${activeContent === 'content1' ? 'block' : 'hidden'} bg-white p-6 rounded shadow-md`}>
        <h2 className="text-xl font-bold mb-4">Content 1</h2>
        <p>This is the content for button 1.</p>
      </div>

      <div className={`content ${activeContent === 'content2' ? 'block' : 'hidden'} bg-white p-6 rounded shadow-md`}>
        <h2 className="text-xl font-bold mb-4">Content 2</h2>
        <p>This is the content for button 2.</p>
      </div>

      <div className={`content ${activeContent === 'content3' ? 'block' : 'hidden'} bg-white p-6 rounded shadow-md`}>
        <h2 className="text-xl font-bold mb-4">Content 3</h2>
        <p>This is the content for button 3.</p>
      </div>
    </div>
  );
};

export default FilterButtons;
