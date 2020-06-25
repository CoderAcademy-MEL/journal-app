// EntryForm.js
import React, { Component } from "react";

class EntryForm extends Component {
  state = { entry: "" };

  onTextAreaChange = (event) => {
    this.setState({ entry: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault()
    const { entry } = this.state
    const { onEntryFormSubmit, category } = this.props;
    if (entry) {
      onEntryFormSubmit({entry, category})
    } else {
      this.setState({ errorMessage: "Entry cannot be blank" });
    }
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>
    }
    return (
      <form onSubmit={this.onFormSubmit} >
        <div>
          <textarea className="diary-entry" onChange={this.onTextAreaChange}></textarea>
        </div>
        <input type="submit" value="create new entry" />
      </form>
    );
  }
}

export default EntryForm;
