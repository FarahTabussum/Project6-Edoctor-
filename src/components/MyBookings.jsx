import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function MyBookings() {
  const location = useLocation();
  const [appointments, setAppointments] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // success | error

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    const successMessage = location.state?.successMessage;
    const errorMessage = location.state?.errorMessage;

    if (successMessage) {
      setToastMessage(successMessage);
      setToastType('success');
    } else if (errorMessage) {
      setToastMessage(errorMessage);
      setToastType('error');
    }

    const timeout = setTimeout(() => {
      setToastMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location.state]);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter((a) => a.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    setToastMessage('Appointment is Cancelled');
    setToastType('error');
  };

  if (appointments.length === 0) {
    return (
      <div className="p-10 text-center my-10">
        {/* Toast */}
        {toastMessage && (
          <div
            className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg z-50 ${
              toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {toastMessage}
          </div>
        )}

        <h1 className="text-3xl font-bold mt-10">You Have Not Booked Any Appointment Yet</h1>
        <p className="mt-4 text-lg text-gray-600">
          It seems like you haven't made any appointments yet. You can book an appointment from our home page.
        </p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-xl">
          Book an Appointment
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10">
      {/* Toast */}
      {toastMessage && (
        <div
          className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg z-50 ${
            toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {toastMessage}
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-2 mt-3">My Today Appointments</h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      {appointments.map((appointment) => (
        <section key={appointment.id} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{appointment.name}</h2>
          <p className="text-gray-700 mb-4">{appointment.education}</p>
          <button
            onClick={() => handleCancel(appointment.id)}
            className="w-full border border-red-500 text-red-600 font-semibold py-3 rounded-3xl hover:bg-red-100 transition-colors"
          >
            Cancel Appointment
          </button>
        </section>
      ))}
    </div>
  );
}

export default MyBookings;


