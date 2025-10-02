import React from "react";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;
