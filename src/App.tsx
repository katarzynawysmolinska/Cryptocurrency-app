import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Show from "./components/Show";
import Crypto from "./models/crypto";
import Grid from "@mui/material/Grid/Grid";

function App() {
  const [cryptocurrency, setCryptocurrency] = useState<Crypto[]>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptocurrency(res.data);
      })
      .catch((error) => console.log("Error"));
  }, []);

  const closure = () => {
    if (cryptocurrency) {
      const filteredCrypto: Crypto[] = cryptocurrency.filter((cryptocurrency) =>
        cryptocurrency.name.toLowerCase().includes(search.toLowerCase())
      );
      return filteredCrypto;
    }
  };

  const filteredCrypto2 = closure();

  console.log(cryptocurrency);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" direction="column" >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} > 
          <Search setSearch={setSearch} />
          </Grid>
          <Grid item xs={12}>
          {filteredCrypto2 &&
            filteredCrypto2.map((crypto) => {
              return (
                
                <Show
                  image={crypto.image}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  price={crypto.current_price}
                  priceChange={crypto.price_change_percentage_24h}
                />
                  
              );
            })}
            </Grid>
            </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
