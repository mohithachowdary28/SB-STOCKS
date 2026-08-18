import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StockCard from "../components/StockCard";

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stocks")
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => {
        console.log("Error loading stocks:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <main className="stocks-container">
        <h1>Available Stocks</h1>

        <div className="stock-list">
          {stocks.map((stock) => (
            <StockCard
              key={stock.id}
              stock={stock}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Stocks;