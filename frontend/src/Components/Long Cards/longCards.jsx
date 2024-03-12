import './longCards.css'
const LongCards = ({imageURL,heading,description}) => {
  return (
    <div className="long-cards">
      <div className="long-cards-image">
        <img src={imageURL}alt="" />
      </div>
      <div className="long-cards-content">
        <div className="long-cards-heading">
          <h4>{heading}</h4>
        </div>
        <div className="long-cards-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default LongCards;
