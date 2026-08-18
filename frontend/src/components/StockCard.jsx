function StockCard({ stock }) {
  const handleBuy = () => {
    alert(`Selected ${stock.symbol} for buying`);
  };

  return (
    <div className="stock-card">
      <h2>{stock.name}</h2>

      <p>Symbol: {stock.symbol}</p>

      <p>Price: ${stock.price}</p>

      <button onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
}

export default StockCard;