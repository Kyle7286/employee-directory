function Search(props) {
  return (
    <form className="search w-25 m-auto">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Filter..."
          id="search"
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default Search;
