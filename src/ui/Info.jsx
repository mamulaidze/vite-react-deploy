import React, { useEffect } from 'react';

const Info = () => {
  useEffect(() => {
    const element = document.getElementById('info');
    setTimeout(() => {
      element.classList.add('opacity-100');
    }, 3000);
  }, []);

  return (
    <p
      id="info"
      className="text-white text-lg leading-relaxed opacity-0 transition-opacity duration-1000 bg-gray-900 bg-opacity-75 p-4 rounded-lg shadow-md max-w-xl mx-auto"
    >
      აქ შეხვდებით, როგორც ყველა ქართველ მწერალსა და პოეტს, ასევე მათ შემოქმედებებს. 
      საიტზე ასევე იხილავთ ყველა ნაწარმოების ანალიზს, პერსონაჟებს და მათ დახასიათებებს!
      <span className="font-semibold">!</span>
    </p>
  );
};

export default Info;
