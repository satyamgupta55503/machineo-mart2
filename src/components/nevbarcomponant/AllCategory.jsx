
import Card from './Card';


const categories = [
  { id: 1, title: 'Technology', content: 'Latest trends in tech.' },
  { id: 2, title: 'Health', content: 'Wellness tips and news.' },
  { id: 3, title: 'Finance', content: 'Personal finance advice.' },
  { id: 4, title: 'Travel', content: 'Explore the world with us.' },
  { id: 5, title: 'Lifestyle', content: 'Tips for everyday living.' },
  { id: 6, title: 'Education', content: 'Learning resources and tips.' },
];

const AllCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 my-40 gap">
      {categories.map((category) => (
        <Card key={category.id} title={category.title} content={category.content} />
      ))}
    </div>
  );
};

export default AllCategory;
