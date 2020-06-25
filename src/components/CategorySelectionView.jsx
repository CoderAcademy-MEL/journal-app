// CategorySelectionView.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelectionView extends Component {
  render() {
    const { categories } = this.props
    return (
      <div>
        <h1>What type of entry do you want to write?</h1>
        <ul>
          {categories.map((item, index) => {
            return (
              <li key={item}>
                <Link to={`/entry/new/${index + 1}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategorySelectionView;
