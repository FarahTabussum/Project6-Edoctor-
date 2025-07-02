import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Doctors from './components/Doctors';
import DoctorDetail from './components/DoctorDetail';
import MyBookings from './components/MyBookings';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';
import ServicesStats from './components/ServicesStats';
import Loader from './components/Loader'; // Import loader component
import { Toaster } from 'react-hot-toast';

// Home Page component composed of sections
function HomePage() {
  return (
    <>
      <Banner />
      <Doctors />
      <ServicesStats />
    </>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200); // Loader duration (1 second)

    return () => clearTimeout(timeout);
  }, [location]);

  // Define routes where Footer should be hidden
  const hideFooterOn = ['/contact', '/404'];
  const isFooterHidden = hideFooterOn.includes(location.pathname);

  return (
    <>
      {loading && <Loader />}
      <Navbar />

      {/* Show routes only after loading finishes */}
      {!loading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}

      {/* Show footer only when not loading and not in excluded paths */}
      {!isFooterHidden && !loading && <Footer />}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
