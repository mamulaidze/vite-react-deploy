import React, { useEffect } from 'react';

const Question = () => {
  useEffect(() => {
    const element = document.getElementById('question');
    setTimeout(() => {
      element.classList.add('opacity-100');
    }, 2000);
  }, []);

  return (
    <h2
      id="question"
      className="text-blue-200 text-2xl opacity-0 transition-opacity duration-1000 bg-gray-800 bg-opacity-80 p-3 rounded-md shadow-sm"
    >
      რაში დაგეხმარებათ ჩვენი გვერდი?
    </h2>
  );
};

export default Question;
