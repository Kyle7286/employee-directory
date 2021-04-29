import React from "react";

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center bg-dark">
        <div className="container">
          <h1 className="display-4 font-weight-bold text-success">Employee Directory</h1>
          <p className="lead text-white">Click on a column headers to sort or use the search box to filter your results.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;






