function SearchBar({ filterSearch }) {
  return (
    <div className="header">
      <div className="logo">
        <p className="logoname">
          B.O.F <br /> <small>bank of flatiron</small>
        </p>
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
