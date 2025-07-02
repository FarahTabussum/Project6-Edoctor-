// import React, { useState } from 'react';
// import doctorData from '../data/doctors.json'; // Adjust path if needed
// import { useNavigate } from 'react-router-dom'; // Optional if you're using routing

// function Doctors() {
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const handleShowAll = () => {
//     setVisibleCount(doctorData.length);
//     setShowAll(true);
//   };

//   const handleViewLess = () => {
//     setVisibleCount(6);
//     setShowAll(false);
//   };

//   return (
//     <section className="py-10 px-4 md:px-10 bg-gray-100 text-center">
//       <h2 className="text-4xl font-bold text-black mb-4">Our Best Doctors</h2>
//       <p className="text-gray-600 mb-10 max-w-6xl mx-auto">
//       Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {doctorData.slice(0, visibleCount).map((doc) => (
//           <div key={doc.id} className="card bg-white rounded-xl shadow-md border p-6 text-start">
//             <img
//               src={doc.image}
//               alt={doc.name}
//               className="mx-auto w-full h-80 object-cover rounded-md mb-4"
//             />

//             <div className="flex justify-start gap-2 mb-2 flex-wrap">
//               <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
//                 Available
//               </span>
//               <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
//                 {doc.experience}
//               </span>
//             </div>

//             <h3 className="text-lg font-bold mb-1">{doc.name}</h3>
//             <p className="text-sm text-gray-600 mb-1">{doc.education}</p>

//             <div className="text-sm text-gray-700 flex items-center justify-start gap-1 mb-4">
//               <span>Ⓡ</span>
//               <span className='mt-3'>Reg No: {doc.registration}</span>
//             </div>

//             <button
//               className="mt-auto inline-block border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition"
//               onClick={() => navigate(`/doctors/${doc.id}`)}
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {!showAll && visibleCount < doctorData.length && (
//         <button className="btn text-white bg-blue-600 rounded-xl mt-10" onClick={handleShowAll}>
//           View All Doctors
//         </button>
//       )}

//       {showAll && (
//         <button className="btn text-white bg-blue-600 rounded-xl mt-10" onClick={handleViewLess}>
//           View Less
//         </button>
//       )}
//     </section>
//   );
// }


// console.log("Doctors component loaded");
// export default Doctors;






import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Added for React Router navigation
import doctorData from '../data/doctors.json';

function Doctors() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setVisibleCount(doctorData.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setVisibleCount(6);
    setShowAll(false);
  };

  return (
    <section className="py-15 px-4 md:px-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-black mb-4">Our Best Doctors</h2>
      <p className="text-gray-600 mb-10 max-w-6xl mx-auto mt-5">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {doctorData.slice(0, visibleCount).map((doc) => (
          <div key={doc.id} className="card bg-white rounded-xl shadow-md border p-6 text-start">
            <img
              src={doc.image}
              alt={doc.name}
              className="mx-auto w-full h-80 object-cover rounded-md mb-4"
            />

            <div className="flex justify-start gap-2 mb-2 flex-wrap">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Available
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                {doc.experience}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1">{doc.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{doc.education}</p>

            <div className="text-sm text-gray-700 flex items-center justify-start gap-1 mb-4">
              <span>Ⓡ</span>
              <span className="mt-3">Reg No: {doc.registration}</span>
            </div>

            {/* ✅ Use Link instead of <a> for SPA navigation */}
            <Link
              to={`/doctors/${doc.id}`}
              className="mt-auto inline-block border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {!showAll && visibleCount < doctorData.length && (
        <button className="btn text-white bg-blue-600 rounded-xl mt-10" onClick={handleShowAll}>
          View All Doctors
        </button>
      )}

      {showAll && (
        <button className="btn text-white bg-blue-600 rounded-xl mt-10" onClick={handleViewLess}>
          View Less
        </button>
      )}
    </section>
  );
}

export default Doctors;

