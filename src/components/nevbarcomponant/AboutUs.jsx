import { Container } from "postcss";

const AboutUs = () => {
  return (

    <div className="max-w-4xl  mx-28 p-20 bg-blue-50 min-h-screen shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We are a dedicated team passionate about delivering the best products and services to our customers.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to innovate and inspire, providing solutions that enhance your life and business.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="text-lg text-gray-700 mb-4">
        We envision a world where [insert your vision here].
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li className="mb-2">Integrity: We believe in doing the right thing.</li>
        <li className="mb-2">Customer Focus: Your satisfaction is our priority.</li>
        <li>Innovation: We strive to improve and evolve continuously.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Meet Our Team</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our team consists of dedicated professionals with diverse backgrounds committed to excellence and customer satisfaction.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        We invite you to explore our offerings and become part of our community. Together, let’s create something amazing!
      </p>
    </div>
   
  );
};

export default AboutUs;
