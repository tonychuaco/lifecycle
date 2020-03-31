import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
    // console.log('constructor');
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          items: data,
          isLoaded: true,
        });
      });
    // console.log('componentDidMount()');
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      // console.log('render()');
      return (
        <div className="App">
          <div className="Names">
            <ul>
              {items.map((el) => {
                return (
                  <li key={el.id}>
                    Name: {el.name} | UserName: {el.username} |{" "}
                    <a href={`https://${el.website}`}>Website</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default LifeCycle;
