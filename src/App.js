import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Ivel Z3",
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
        },
        {
          name: "Bally Astrocade",
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
        },
        {
          name: "Sord M200 Smart Home Computer",
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
        },
        {
          name: "Commodore 64",
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
        }
      ],
      currentPc: null
    };
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection = event => {
    this.setState({ currentPc: event.target.value });
  };

  buttonClicked = () => {
    let currentPcObject = this.state.data.find(
      pc => pc.name === this.state.currentPc
    );
    console.log("currentPcObject:", currentPcObject);
    const action = {
      type: "ADD_MODEL",
      payload: currentPcObject
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.buttonClicked}>Add</button>
        <select onChange={this.updateSelection}>
          <option selected value="">
            -- pick a model --
          </option>
          {this.state.data.map(pc => (
            <option value={pc.name}>
              {pc.name} ({pc.year})
            </option>
          ))}
          ;
        </select>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   if (state.selectedPizza !== null) {
//     return {
//       pizza: state.pizzas.find(pizza => pizza.id === state.selectedPizza)
//     }
//   }
//   return {}
// }

export default connect()(App);