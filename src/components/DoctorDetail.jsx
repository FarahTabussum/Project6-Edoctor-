import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AvailabilityButtons from './AvailabilityButtons';
import doctorData from '../data/doctors.json';
import { Link } from 'react-router-dom';
function DoctorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData.find((doc) => doc.id === parseInt(id));
  const [isBooked, setIsBooked] = useState(false);

  if (!doctor) {
    return (
      <div className="text-center space-y-4 my-10">
        <p className="text-black font-bold text-2xl m-10">No Doctor Found!!</p>
        <p className='text-normal text-grey-600'>No doctor found with this registration</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-2xl mt-10 mb-35 hover:bg-blue-700 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const handleBookAppointment = () => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    const alreadyBooked = storedAppointments.some(
      (appointment) => appointment.id === doctor.id
    );

    if (alreadyBooked) {
      navigate('/my-bookings', {
        state: {
          errorMessage: `Appointment Already Scheduled for ${doctor.name} Today.`,
        },
      });
      
      return;
    }

    const newAppointment = {
      id: doctor.id,
      name: doctor.name,
      education: doctor.education,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      'appointments',
      JSON.stringify([...storedAppointments, newAppointment])
    );

    setIsBooked(true);

    navigate('/my-bookings', {
      state: {
        successMessage: `Appointment Scheduled for ${doctor.name} successfully.`,
      },
    });
  };

  return (
    <>
      {/* Section 1: Header */}
      <section className="bg-base-100 py-5 my-7">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">Doctor’s Profile Details</h1>
          <p className="text-gray-600 text-normal">
            Here you can find detailed information about the doctor, including their qualifications,
            specialties, and consultation availability.
          </p>
        </div>
      </section>

      {/* Section 2: Doctor Profile Info */}
      <section className="max-w-3xl mx-auto flex flex-col m-5 md:flex-row py-10 my-10 shadow-md">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-80 object-cover ml-0 mx-2 md:ml-5"
          />
        </div>

        <div className="md:w-1/2 text-start m-5 md:ml-10">
          <h2 className="text-3xl font-bold mb-4">{doctor.name}</h2>
          <p className="text-normal text-gray-700">{doctor.education}</p>
          <p className="text-normal text-gray-700 mb-2">Specialty: {doctor.specialty}</p>
          <p className="text-normal text-gray-700">Working At</p>
          <p className="text-normal text-black font-semibold my-2">{doctor.institute}</p>
          <p className="text-normal text-gray-700">Reg No: {doctor.registration}</p>

          <div className="flex items-center flex-wrap gap-2 mt-2">
            <span className="font-semibold text-xl items-center">Available:</span>
            <AvailabilityButtons available={doctor.available} />
          </div>

          {/* Fee display */}
          {(() => {
            const consultationText = doctor.consultation;
            const feeMatch = consultationText.match(/Taka\s*:\s*\d+/);
            const fee = feeMatch ? feeMatch[0] : '';
            const perConsultationMatch = consultationText.match(/Per consultation/);
            const perConsultation = perConsultationMatch ? perConsultationMatch[0] : '';
            const remainingText = consultationText
              .replace(fee, '')
              .replace(perConsultation, '')
              .trim();

            return (
              <p className="text-normal text-black mt-3">
                <strong>Consultation Fee:</strong>{' '}
                <span className="text-blue-500">{fee}</span> {remainingText}{' '}
                <span className="text-blue-500">{perConsultation}</span>
              </p>
            );
          })()}
        </div>
      </section>

      {/* Section 3: Booking Section */}
      <section className="max-w-3xl mx-auto px-4 bg-base-100 shadow-xl mt-20 py-5">
        <div className="text-center border-b-2 border-dotted border-gray-400">
          <h2 className="text-3xl font-bold text-gray-800 pb-2">
            Book an Appointment
          </h2>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">Available</p>

          <p className="bg-orange-200 text-orange-800 text-normal p-4 rounded-3xl mt-4">
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </p>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleBookAppointment}
              className="w-4/5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-3xl"
            >
              {isBooked ? 'Appointment Booked' : 'Book Appointment Now'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoctorDetail;

