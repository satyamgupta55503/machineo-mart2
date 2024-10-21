
const Card = ({ title, content }) => (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{content}</p>
    </div>
  );
  
  export default Card;
  