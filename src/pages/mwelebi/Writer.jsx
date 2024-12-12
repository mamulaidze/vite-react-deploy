import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Writer() {
  const writers = [
    { name: "ილია ჭავჭავაძე", path: "chavchavadzisnawarmoebebi" }, // Relative path for nested route
    { name: "აკაკი წერეთელი", path: "" }, // Points to parent route directly
    { name: "შოთა რუსთაველი", path: "/poetebi" }, // Absolute path for another section
  ];

  return (
    <section className="relative bg-hero-bg bg-no-repeat bg-center h-screen bg-cover bg-gray-900">
      <ul className="flex flex-col items-center gap-4 pt-20 pl-6 text-[white]">
        {writers.map((link, index) => (
          <li
            key={index}
            className="block px-3 py-2 text-[1.4rem] font-medium rounded hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-200 bg-[#454444cb] w-[60%]"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      {/* Outlet renders nested child routes */}
      <Outlet />
    </section>
  );
}
