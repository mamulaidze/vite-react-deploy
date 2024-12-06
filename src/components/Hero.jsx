import React from 'react';
import OurGoal from './OurGoal';
import Question from './Question';
import Info from './Info';

export default function Hero() {
  return (
    <main className="container mx-auto">
      {/*//! Mobile version */}
      <div className="relative bg-hero-bg bg-no-repeat bg-center h-screen bg-cover bg-gray-900">
        <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-800 bg-opacity-80 text-center">
          <h1 className="text-4xl font-extrabold mb-6 animate-fade-in-up font-serif text-blue-300">
            Welcome to "Learn With US"
          </h1>
          <OurGoal />
          <div className="mt-10">
            <Question />
          </div>
          <div className="mt-8 w-full">
            <Info />
          </div>
        </div>
      </div>
    </main>
  );
}
