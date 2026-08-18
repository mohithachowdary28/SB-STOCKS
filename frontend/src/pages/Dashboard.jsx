import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <main className="dashboard">
        <h1>Welcome to SB Stocks</h1>

        <div className="summary">

          <div className="summary-card">
            <h3>Virtual Balance</h3>
            <p>₹1,00,000</p>
          </div>

          <div className="summary-card">
            <h3>Portfolio Value</h3>
            <p>₹0</p>
          </div>

          <div className="summary-card">
            <h3>Profit / Loss</h3>
            <p>₹0</p>
          </div>

          <Portfolio />

        </div>

        <Link to="/stocks">
          <button>
            View Stocks
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Dashboard;