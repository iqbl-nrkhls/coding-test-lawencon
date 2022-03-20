import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = (props) => {
  let navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState();

  const changeSearchQuery = (e) => {
    setQuery(e.target.value);
  }

  const changetFilter = (e) => {
    setFilter(e.target.value);
  }

  const buttonClickHandler = () => {
    navigate(`/coin-list/?q=${query}${(filter) ? '&filter='+filter : ''}`);
  }

  return (
    <div className="flex mb-6">
      <div className="input w-[215px] mr-4">
        <select name="type" className="text-gray-400 w-full"
        defaultValue=""
        onChange={changetFilter}
        >
          <option className="hidden" value="" disabled>Select</option>
          <option value="">all</option>
          <option>coin</option>
          <option>token</option>
        </select>
      </div>

      <div className="input search mr-4">
        <input name="search" type="text" className="!pl-8" placeholder="Search"
        onChange={changeSearchQuery}
        />
      </div>

      <button className="button" onClick={buttonClickHandler}>Search</button>
    </div>
  );
};

export default SearchBox;
