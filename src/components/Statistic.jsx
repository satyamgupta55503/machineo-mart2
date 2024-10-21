import statistics1 from "../assets/statistics1.png";
import Container from "./Container";

function Statistic() {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen bg-white p-8">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center font-serif space-x-3 mb-4 py-8">
                <img
                  src={statistics1}
                  alt="statistics1 logo"
                  className="h-10 w-auto"
                />
              </div>
              <h1 className="text-5xl font-bold  text-blue-800">Statistics</h1>
              <p className="text-gray-800 font-serif mt-2">
                We specialize in the Services.
              </p>
            </div>

            <div className="flex gap-6">
              <button className="bg-yellow-400 hover:bg-yellow-200 font-serif text-white font-semibold  px-6 py-3 rounded-md shadow-md">
                Ask For Price
              </button>
              <button className="border-2 border-blue-500 text-blue-500 font-serif hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-md shadow-md">
                Start Selling
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="border-2 border-white p-8 rounded-sm text-center hover:border-yellow-300 transition-all duration-300">
              <h2 className="text-3xl font-bold text-blue-800">4.5M</h2>
              <p className="text-gray-700 mt-2">
                Used machines sold globally every year, connecting industries
                worldwide.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-white p-8 rounded-sm text-center hover:border-yellow-300 transition-all duration-300">
              <h2 className="text-3xl font-bold text-blue-800">75%</h2>
              <p className="text-gray-700 mt-2">
                Percentage of industrial machinery sales driven by pre-owned
                equipment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-white p-8 rounded-sm text-center hover:border-yellow-300 transition-all duration-300">
              <h2 className="text-3xl font-bold text-blue-800">60%</h2>
              <p className="text-gray-700 mt-2">
                Of manufacturing companies prefer buying used machines for cost
                efficiency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-white p-8 rounded-sm text-center hover:border-yellow-300 transition-all duration-300">
              <h2 className="text-3xl font-bold text-blue-800">$2.3B</h2>
              <p className="text-gray-700 mt-2">
                The global value of used machinery sold annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Statistic;
