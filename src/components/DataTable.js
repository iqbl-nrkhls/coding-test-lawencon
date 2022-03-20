import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import Pagination from './Pagination'

const DataTable = (props) => {

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const handleClickDelete = (e) => {
    const confirm = window.confirm('Are you sure you want to delete this coin?');
    if (confirm) {
      props.deleteCoin(e.target.getAttribute('coin-id'));
    }
  }

  const curentPage = Number(useQuery().get('page') || 1);

  const coinsDisplay = props.coins.slice((curentPage - 1) * 50, curentPage * 50);

  return (props.coins.length === 0) ? (
    <p>Loading ...</p>
    ) : (
    <>
    <div className="table-wrap">
      <table className="table mb-[27px]">
        <thead className="bg-blue-500 text-white text-left">
          <tr className="">
            <th className="p-5 pt-3">ID</th>
            <th className="p-5 pt-3">Name</th>
            <th className="p-5 pt-3">Symbol</th>
            <th className="p-5 pt-3">Rank</th>
            <th className="p-5 pt-3">Type</th>
            <th className="p-5 pt-3">Active</th>
            <th className="p-5 pt-3">Action</th>
          </tr>
        </thead>

        <tbody className="text-[#65768B]">
          {coinsDisplay.map(coin => (
            <tr key={coin.id}>
              <td className="text-[#0062A6] underline pl-5"><Link to={`/coin-detail/${coin.id}`}>{coin.id}</Link></td>
              <td className="pl-5">{coin.name}</td>
              <td className="pl-5">{coin.symbol}</td>
              <td className="pl-5">{coin.rank}</td>
              <td className="pl-5">{coin.type}</td>
              <td className="pl-5">{coin.is_active ? 'true' : 'false'}</td>
              <td className="pl-5">
                <button className="button bg-[#E11730] my-1"
                onClick={handleClickDelete}
                coin-id={coin.id}
                > Delete </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>

      <Pagination
        curentPage={curentPage}
        totalPages={Math.ceil(props.coins.length / 50)}
      />

    </>
  )
};

export default DataTable;