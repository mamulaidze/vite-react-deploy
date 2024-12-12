import React, { useEffect } from 'react';

const FadeInText = () => {
  useEffect(() => {
    const element = document.getElementById('fade-in-text');
    setTimeout(() => {
      element.classList.add('opacity-100');
    }, 1000);
  }, []);

  return (
    <p
      id="fade-in-text"
      className="text-white text-lg leading-relaxed opacity-0 transition-opacity duration-1000 bg-gray-900 bg-opacity-75 p-4 rounded-lg shadow-md max-w-xl mx-auto font-serif"
    >
      ჩვენი მიზანია დავეხმაროთ მოსწავლეებს <br />
      და გავხადოთ სწავლის პროცესი ბევრად სწრაფი და კომფორტული! <br />
    </p>
  );
};

export default FadeInText;
