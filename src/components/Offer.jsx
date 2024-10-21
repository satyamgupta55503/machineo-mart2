import offerimage from "../assets/offerimage.png";
import Container from "./Container";
import PropTypes from "prop-types";

const OfferCard = ({ title, description }) => (
  <div className=" bg-white p-14 rounded-lg shadow-md w-62 ">
    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-800 font-serif">{description}</p>
  </div>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Offer = () => {
  return (
    <Container>
      <div className="bg-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img src={offerimage} alt="category logo" className="h-10" />
        </div>
        <div className="text-left mb-8">
          <h3 className="text-5xl font-bold text-blue-600 font-serif">
            What We <span className="text-black">Offer</span>
          </h3>
          <p className="text-gray-800 font-serif mt-3">
            We specialize in the Services.
          </p>
        </div>
        <div className=" flex flex-col  font-serif md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <OfferCard
            title="Start making Money!"
            description="Do you have something to sell? Post your first ad and start making money."
          />
          <OfferCard
            title="Machine online Mart"
            description="We have something for you to get started."
          />
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 font-serif bg-blue-600 text-white rounded-lg hover:bg-blue-300 transition-colors text-lg font-semibold">
            Post Free AD
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Offer;
