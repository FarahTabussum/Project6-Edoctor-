import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-5">
        <img src="https://i.ibb.co.com/35QFJHBC/error.jpg"/>
      <h1 className="text-4xl font-bold text-red-600 mb-7 mt-5">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
