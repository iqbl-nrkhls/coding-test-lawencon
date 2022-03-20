import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CoinDetail = () => {
  const [coin, setCoin] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      .then(response => response.json())
      .then(data => {
        setCoin(data);
      })
      .catch(error => {
        throw error;
      })
    }
    fetchData();
  })

  return (
      <div className="content">
        <p className="text-[#ACBCCF] text-xs my-[14px]">Coin Detail</p>

        <div className="bg-white shadow-sm shadow-[#0094FF40] rounded-md py-6 px-[30px]">
          <h1 className="font-semibold text-[#2569A5] mb-6">Coin Detail</h1>
          
          <section>
            <div className="flex mb-5">
              <h2 className="w-32 mr-12">ID</h2>
              <p className="font-bold underline">{coin.id}</p>
            </div>

            <div className="flex mb-5">
              <h2 className="w-32 mr-12">Name</h2>
              <p className="font-bold">{coin.name}</p>
            </div>

            <div className="flex mb-5">
              <h2 className="w-32 mr-12">Symbol</h2>
              <p className="font-bold">{coin.symbol}</p>
            </div>

            <div className="flex mb-5">
              <h2 className="w-32 mr-12">Type</h2>
              <p className="font-bold">{coin.type}</p>
            </div>

            <div className="flex mb-5">
              <h2 className="w-32 mr-12">Active</h2>
              <p className="font-bold">{coin.is_active ? 'True' : 'False'}</p>
            </div>

            <div className="flex mb-5">
              <h2 className="w-32 mr-12">Is New?</h2>
              <p className="font-bold">{coin.is_new ? 'True' : 'False'}</p>
            </div>
          </section>

        </div>
      </div>
  )
};

export default CoinDetail;