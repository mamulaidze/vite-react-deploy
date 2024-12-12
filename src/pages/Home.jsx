import React from 'react'
import FadeInText from '../ui/OurGoal'
import Question from '../ui/Question'
import Info from '../ui/Info'
export default function Home() {
  return (
    <main className="container mx-auto">
      {/*//! Mobile version */}
      <div className="relative bg-hero-bg bg-no-repeat bg-center h-screen bg-cover bg-gray-900">
        <div className="flex flex-col items-center pt-[4rem] h-screen px-4 bg-gray-800 bg-opacity-80 text-center gap-8">
          <h1 className="text-4xl font-extrabold mb-6 animate-fade-in-up font-serif text-blue-300 pb-[4rem]">
            Welcome to "Learn With US"
          </h1>
          <FadeInText />
          <div className="mt-10">
            <Question />
          </div>
          <div className="mt-8 w-full">
            <Info />
          </div>
        </div>
      </div>
    </main>
  )
}
