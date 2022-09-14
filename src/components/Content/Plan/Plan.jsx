import "./Plan.scss";

const Plan = ({ title, desc, bgImg }) => {
  return (
    <div
      className="plan-wrapper"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${bgImg})`,
      }}
    >
      <div className="plan-title">{title}</div>
      <div className="plan-desc">{desc}</div>
    </div>
  );
};

export default Plan;
