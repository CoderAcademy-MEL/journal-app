import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
  state = {
    categories: ["food", "thoughts", "other"],
    entries: [],
  };

  onEntryFormSubmit = (value) => {
    this.setState((state) => {
      // kind of similar to .push
      // but not
      // is like clone or copy
      // dont use .push for setting state
      return { entries: [...state.entries, value] };
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              component={HomeView}
              categories={categories}
            />
            <Route
              exact
              path="/category"
              render={(props) => (
                <CategorySelectionView {...props} categories={categories} />
              )}
            />
            <Route
              exact
              path="/entry/new/:id"
              render={(props) => (
                <NewEntryView {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit} />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
