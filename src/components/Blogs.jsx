import React from 'react';
import questions from '../data/questions.json'; // Assuming you put it in src/data/

function Blogs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-10">Blogs</h1>
      <p className='font-semibold text-normal text-blue-800 text-center'>Frequently Asked Questions</p>

      {questions.map((qa, index) => (
        <section key={index} className="space-y-3 shadow-xl p-10">
          <h2 className="text-xl font-semibold border-b-2 border-dotted border-gray-400 pb-2">
            {qa.question}
          </h2>
          <p className='text-blue-500 text-normal'>Answer:</p>
          <p className="text-gray-700 border-b-2 border-dotted border-gray-300 pb-2">
            {qa.answer}
          </p>
        </section>
      ))}
    </div>
  );
}

export default Blogs;

  