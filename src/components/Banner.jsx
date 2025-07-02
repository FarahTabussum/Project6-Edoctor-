// src/components/Banner.jsx
function Banner() {
    return (
      <div className="hero min-h-screen py-8 bg-base-400">
        <div className="hero-content text-center bg-white shadow-md border-1 border-gray-100 rounded-sm">
          <div>
            <h1 className="text-5xl font-bold">Dependable Care, Backed by Trusted Professionals</h1>
            <p className="py-6">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className="flex flex-row gap-2 justify-center">
            <input type="text" placeholder="Search any doctor..." className="input input-bordered w-full max-w-xs rounded-2xl" />
            <button className="btn text-white bg-blue-600 rounded-xl">Search Now</button>
            </div>
            <div className="flex flex-wrap gap-4 mt-5 justify-center">
  <img
    src="https://i.ibb.co.com/4g04Rz77/banner-img-1.png"
    alt="Banner 1"
    className="w-4/5 lg:w-1/3"
  />
  <img
    src="https://i.ibb.co.com/4g04Rz77/banner-img-1.png"
    alt="Banner 2"
    className="w-4/5 lg:w-1/3 hidden lg:block"
  />
</div>



          </div>
          
        </div>
      </div>
    );
  }
  
  export default Banner;
  