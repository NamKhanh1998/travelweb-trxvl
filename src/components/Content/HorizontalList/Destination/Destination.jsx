import "./Destination.scss";

const HorizontalItem = ({ bgImg, title }) => {
  return (
    <div
      className="HorizontalList-item"
      style={{ backgroundImage: `url(${bgImg})` }}
      key={title}
    >
      <span className="HorizontalList-name">{title}</span>
    </div>
  );
};

export default HorizontalItem;
