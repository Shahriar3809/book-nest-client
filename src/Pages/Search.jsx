

// eslint-disable-next-line react/prop-types
const Search = ({handleSearch}) => {
    
    return (
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search by Book Name"
          className="border rounded-md bg-base-200 p-3 mx-5"
        />
        <input type="submit" value="Search" className="btn btn-secondary" />
      </form>
    );
};

export default Search;