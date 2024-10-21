import image from "../assets/browseitems/image.png";
import agricultural from "../assets/browseitems/agricultural.png";
import cncmachine from "../assets/browseitems/cncmachine.png";
import construction from "../assets/browseitems/construction.png";
import lathemachine from "../assets/browseitems/lathemachine.png";
import metalprocess from "../assets/browseitems/metalprocess.png";
import transformer from "../assets/browseitems/transformer.png";
import Container from "./Container";
import tower from "../assets/browseitems/tower.png";

const BrowseItems = () => {
  const categoryItems = [
    { id: 1, title: "Transformer", imageUrl: transformer },
    { id: 2, title: "Construction", imageUrl: construction },
    { id: 3, title: "Metal Process", imageUrl: metalprocess },
    { id: 4, title: "Lathe Machine", imageUrl: lathemachine },
    { id: 5, title: "Agricultural", imageUrl: agricultural },
    { id: 6, title: "CNC Machine", imageUrl: cncmachine },
  ];

  return (
    <Container>
      <div className="bg-gray-50 min-h-screen py-6 px-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={image} alt="Category logo" className="h-10 w-auto" />
          </div>

          <div className="text-left font-serif mb-6">
            <h3 className="text-5xl font-bold">
              Browse items By <span className="text-blue-600">Popular</span>
            </h3>
            <h3 className="text-5xl font-bold text-blue-600">Category</h3>

            <p className="text-gray-800 mt-2">We specialize in the Services.</p>
            <div className="text-right ">
              <button className="border border-blue-600  text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                View All
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categoryItems.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white border border-blue-400  flex items-center justify-center shadow-md">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mt-2">
                {category.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-8 w-fit">
          <img src={tower} alt="Tower Illustration" className="w-fit" />
        </div>
      </div>
    </Container>
  );
};

export default BrowseItems;
