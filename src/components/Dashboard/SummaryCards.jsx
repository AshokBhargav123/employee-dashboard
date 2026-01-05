import "./SummaryCards.css";

const SummaryCards = ({ employees }) => {
  const total = employees.length;
  const active = employees.filter(e => e.active).length;

  return (
    <div className="summary-cards">
      <div className="summary-card">
        <span>Total Employees</span>
        <h3>{total}</h3>
      </div>

      <div className="summary-card">
        <span>Active</span>
        <h3>{active}</h3>
      </div>

      <div className="summary-card">
        <span>Inactive</span>
        <h3>{total - active}</h3>
      </div>
    </div>
  );
};

export default SummaryCards;
