import buldojar from "../assets/featureimg/buldojar.png";
import robby from "../assets/featureimg/robby.png";
import buldojar3 from "../assets/featureimg/buldojar3.png";
import featured from "../assets/featureimg/featured.png";
import Container from "./Container";

const products = [
  {
    id: 1,
    image: buldojar,
    date: "26-08-2024",
    status: "USED",
    title: "9000 KVA OIL TYPE DISTRIBUTION TRANSFORMER",
  },
  {
    id: 2,
    image: robby,
    date: "26-08-2024",
    status: "USED",
    title: "9000 KVA OIL TYPE DISTRIBUTION TRANSFORMER",
    price: "$1279.00",
  },
  {
    id: 3,
    image: buldojar3,
    date: "26-08-2024",
    status: "USED",
    title: "9000 KVA OIL TYPE DISTRIBUTION TRANSFORMER",
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <Container>
        <div className="bg-white min-h-screen p-12">
          <div className="flex items-center space-x-3 mb-4">
            <img src={featured} alt="featured logo" className="h-10 w-auto" />
          </div>
          <div className="text-left mb-8">
            <h3 className="mt-3 text-5xl font-serif font-bold">
              <span className="text-blue-600">Featured </span>Products
            </h3>
            <p className="text-gray-800 mt-2">We specialize in the Services.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6  ">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden border"
              >
                {/* image section */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-85 object-cover border-b-2 border-gray-200 "
                />

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{product.date}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {product.status}
                    </span>
                  </div>

                  <h4 className="mt-4 font-semibold text-lg text-gray-800">
                    {product.title}
                  </h4>

                  <div className="mt-6 flex items-center justify-between">
                    {/* Compare Checkbox */}

                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox " />
                      <span className="text-lg text-blue-600 font-semibold font-serif">
                        Compare
                      </span>
                    </label>

                    <div className="space-x-4 flex items-center">
                      {product?.price ? (
                        <span className="text-lg font-bold text-gray-800">
                          {product.price}
                        </span>
                      ) : (
                        <button className="border border-blue-900 bg-yellow-500 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50">
                          Ask For Price
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FeaturedProducts;
