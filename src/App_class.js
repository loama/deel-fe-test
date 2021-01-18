import React from "react";
import axios from "axios";
import "./App.css";

// options.map((option) => <li>{option.value}</li>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [], value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const value = event.target.value;
    this.setState({ value: value });
    const self = this;

    const response = await axios.get("/api/countries.json");

    const data = response.data;

    const options = [];

    if (this.state.value.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let option = data[i];
        option = option.toLowerCase();
        /*
          TODO we should use regex to match the string instead of toLowerCase(), that is just a hack
        */
        if (option.includes(value.toLowerCase())) {
          const changedOption = {
            __html: option.replace(
              value.toLowerCase(),
              "<div class='match'>" + value.toLowerCase() + "<div>"
            ),
          };
          options.push(changedOption);
        }
      }
    }
    self.setState({
      options: options,
    });
  }

  render() {
    const options = this.state.options;
    let listItems = [];

    listItems = options.map((option) => (
      <li dangerouslySetInnerHTML={option} />
    ));

    let emptyMessage = "";
    if (options.length === 0) {
      if (this.state.value.length > 0) {
        emptyMessage = "No results matching your input";
      } else {
        emptyMessage = "Type something to search";
      }
    }

    return (
      <div>
        <div className="navbar">
          <img src="/logo.svg" />
        </div>

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Australia"
        />
        <div className="list">{listItems}</div>
        <div className="emptyMessage">{emptyMessage}</div>
      </div>
    );
  }
}

export default App;
