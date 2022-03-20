import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const Pagination = (props) => {
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const querySearch = useQuery().get('q');
  const filter = useQuery().get('filter');

  const isHasPrev = (props.curentPage > 1);
  const isHasNext = (props.curentPage < props.totalPages);

  let prevParams = '';
  if (querySearch) {
    prevParams += `&q=${querySearch}`;
    if (filter) prevParams += `&filter=${filter}`;
  }

  const dataPagination = Array.apply(null, new Array(props.totalPages)).map((value, index) => (
    <Link
    to={`/coin-list/?page=${index + 1}${prevParams}`}
    key={index}
    >
      <button className={(props.curentPage === index + 1) ? '!bg-[#1B91E4] text-white !border-0' : null}>
        {index + 1}
      </button>
    </Link>
  ));

  return(
    <div className="pagination">
      {(isHasPrev)
        ? <Link key="prev" 
          to={`/coin-list/?page=${props.curentPage - 1}${prevParams}`}>
            <button>{'‹'}</button>
          </Link>
        : null}

      {dataPagination}

      {(isHasNext)
        ? <Link key="next" 
          to={`/coin-list/?page=${props.curentPage + 1}${prevParams}`}>
            <button>{'›'}</button>
          </Link>
        : null}
    </div>
  )
};

export default Pagination;