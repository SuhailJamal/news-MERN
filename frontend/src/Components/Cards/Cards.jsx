import "./Cards.css";
const Cards = ({title, description, image}) => {
  return (
    <div className="Card">
      <div className="card-image">
        <img src={image}alt="" />
      </div>
      <div className="card-heading">
        <h3>
            {title}
        </h3>
      </div>
      <div className="card-content">
        <p>
            {description}
        </p>
      </div>
    </div>
  );
};
export default Cards;
