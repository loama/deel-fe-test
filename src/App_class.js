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
    for (let i = 0; i < data.length; i++) {
      let option = data[i];
      option = option.toLowerCase();
      if (option.includes(value.toLowerCase())) {
        const changedOption = {
          __html: option.replaceAll(
            value.toLowerCase(),
            "<div class='match'>" + value.toLowerCase() + "<div>"
          ),
        };
        console.log(changedOption);
        options.push(changedOption);
      }
    }
    console.log(options);
    self.setState({
      options: options,
    });
  }

  render() {
    const options = this.state.options;
    const listItems = options.map((option) => (
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
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>{}</div>
        {this.state.value}
        {listItems}
        <div className="emptyMessage">{emptyMessage}</div>
      </div>
    );
  }
}

export default App;
