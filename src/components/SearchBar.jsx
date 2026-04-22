function SearchBar({ search, setSearch }) {
  return (
    <div style={{
      background: 'black',
      color: 'white'
    }}>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;