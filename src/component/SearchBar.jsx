function SearchBar({ filterSearch }) {
  return (
    <div className="header">
      <div>
        <p className="logoname">
          Bank of Flatiron 
        </p>
        <span>"Prepare for tomorrow, today.Powering possibilities."  </span>
        </div>
      <input
        type="search"
        name=""
        className="input"
        placeholder="Search category"
        onChange={(e) => filterSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
