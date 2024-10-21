import Container from "./Container";
import latestimg from "../assets/latestlisting/latestimg.png";

import img1 from "../assets/latestlisting/img1.png";
import img2 from "../assets/latestlisting/img2.png";
import img3 from "../assets/latestlisting/img3.png";
import img4 from "../assets/latestlisting/img4.png";
import img5 from "../assets/latestlisting/img5.png";
import img6 from "../assets/latestlisting/img6.png";
import img7 from "../assets/latestlisting/img7.png";
import img8 from "../assets/latestlisting/img8.png";
import img9 from "../assets/latestlisting/img9.png";
import img10 from "../assets/latestlisting/img10.png";
import img11 from "../assets/latestlisting/img11.png";
import img12 from "../assets/latestlisting/img12.png";

const LatestItems = [
  {
    id: 1,
    image: img1,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 2,
    image: img2,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 3,
    image: img3,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 4,
    image: img4,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
  },
  {
    id: 5,
    image: img5,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "",
  },
  {
    id: 6,
    image: img6,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 7,
    image: img7,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 8,
    image: img8,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 9,
    image: img9,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 10,
    image: img10,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 11,
    image: img11,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
  {
    id: 12,
    image: img12,
    name: "9000 KVA OIL TYPE DISTRIBUTION",
    date: "26-08-2024",
    status: "USED",
    price: "$1279.00",
  },
];

const LatestListing = () => {
  return (
    <Container>
      <div className="bg-white min-h-screen py-6 px-8">
        <div className="flex items-center space-x-3 mb-4">
          <img src={latestimg} alt="latest logo" className="h-10 w-auto" />
        </div>

        <div className="font-bold font-serif text-5xl">
          <h3 className="text-5xl font-bold text-blue-600">
            Latest <span className="text-black">Listing</span>
          </h3>
        </div>
        <p className="text-gray-800 font-serif mt-2">
          We specialize in the Services.
        </p>

        <div className="text-right mt-4">
          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {LatestItems.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-md bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-lg w-full h-68 object-cover"
              />
              <div className="p-4 ">
                <div className="text-gray-600 text-sm ">
                  {item.date}{" "}
                  <span className="text-gray-600 text-xs px-2 py-1 bg-gray-200 rounded">
                    {item.status}
                  </span>
                </div>

                <div className="text-gray-800 font-semibold mt-1">
                  {item.name}
                </div>
                {/*<div className="text-gray-500 text-xs">{item.status}</div>*/}
                <div className="mt-2">
                  {item.price ? (
                    <span className="font-bold text-blue-600">
                      {item.price}
                    </span>
                  ) : (
                    <button className="border border-blue-900 bg-yellow-500 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-400">
                      Ask For Price
                    </button>
                  )}
                </div>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-blue-600">Compare</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LatestListing;
