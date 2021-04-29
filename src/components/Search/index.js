import React from "react";

function Search() {
  return (
    <form className="search w-25 m-auto">
      <div className="form-group">
        <input    
          className="form-control"
          type="text"
          placeholder="Filter..."
          id="breed"
        />
      </div>
    </form>
  );
}

export default Search;
