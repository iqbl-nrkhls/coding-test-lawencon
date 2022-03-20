import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import SearchBox from './SearchBox'
import DataTable from './DataTable'

const CoinList = () => {
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const querySearch = useQuery().get('q');
  const filter = useQuery().get('filter');

  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.coinpaprika.com/v1/coins')
      .then(response => response.json())
      .then(data => {
        setCoins(data.slice(0,450));
      })
      .catch(error => {
        throw error;
      })
    }
    fetchData();
  })

  const deleteCoin = (id) => {
    const newCoinList = coins.filter(coin => coin.id !== id);
    setCoins(newCoinList);
  }

  const filteredCoins = coins.filter(coin => {

    if (
      (coin.id.includes(querySearch) || coin.name.includes(querySearch) || querySearch === null)
      &&
      (coin.type.includes(filter) || filter === null)
    ) return true;

    return false;
  });

  return (
      <div className="content">
        <p className="text-[#ACBCCF] text-xs my-[14px]">Coin List</p>

        <div className="bg-white shadow-sm shadow-[#0094FF40] rounded-md py-6 px-[30px]">
          <h1 className="font-semibold text-[#2569A5] mb-6">Coin List</h1>

          <SearchBox />

          <DataTable coins={filteredCoins} deleteCoin={deleteCoin} />
          
        </div>
      </div>
  )
};

export default CoinList;