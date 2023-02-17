import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setConins(json)); //데이터를 받아옴. 코인정보 -> 변경된 coins에 들어감.
    setLoading(false);
  }, []);
  return (
    <>
      <h1>The Coins!({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, id) => (
          <li key={id}>
            {coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
