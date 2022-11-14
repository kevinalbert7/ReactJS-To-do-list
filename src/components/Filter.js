import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { setFilter } = this.props;

    return (
      <div className="row">
        <h3>Filter</h3>
        <div className="d-flex">
          <button
            type="button"
            className="me-3 btn btn-outline-secondary"
            onClick={() => setFilter("")}
          >
            All
          </button>
          <button
            type="button"
            className="me-3 btn btn-outline-danger"
            onClick={() => setFilter("To do")}
          >
            To do
          </button>
          <button
            type="button"
            className="me-3 btn btn-outline-warning"
            onClick={() => setFilter("Doing")}
          >
            Doing
          </button>
          <button
            type="button"
            className="me-3 btn btn-outline-success"
            onClick={() => setFilter("Done")}
          >
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
