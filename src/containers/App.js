//--------------------Import Dependents---------------------//
import React from "react";
import LootBox from "../components/lootbox";
import "./App.css";
//-------------------Declare Global variables-------------------//
const apiKey =
  "ead5b7d66db1fa47e3a1c240b58c719c0180f94f201b78f699a6bc00d1c1c78f";
class App extends React.Component {
  state = {
    inputValue: 10,
    usdValue: "",
    hkdValue: "",
    change:true
  };
  //-----------------------Change the InputValue-----------------//
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });

    this.convertFromETHToUSD();
  };
  
  //---------------Currency conversion from ETH to USD-----------//
  convertFromETHToUSD = () => {
    const { inputValue } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${apiKey} `
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(this.state.inputValue);
        console.log(data);
        const usdRate = Math.floor(data.USD * inputValue);
        this.setState({ usdValue: usdRate });
        this.convertFromUSDToHKD();
      });
  };
//---------------Currency conversion from USD to HKD-----------//
  convertFromUSDToHKD = () => {
    const { usdValue } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=HKD&api_key=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(this.state.usdValue);
        console.log(data);
        const hkdRate = Math.floor(data.HKD * usdValue);
        console.log(hkdRate);
        this.setState({ hkdValue: hkdRate });
      });
  };

  componentDidMount = () => {
    //------------------To update the exchange value dynamically--------------------//
    this.interval = setInterval(() => this.convertFromETHToUSD(), 2000);
    
  };
  componentWillUnmount = ()=> {
    //------------------Cleat the interval-------------------------------//
    clearInterval(this.interval);
  }

  render() {
    const { inputValue, usdValue, hkdValue } = this.state;
    return (
      <div className="container">
        <LootBox
          value={inputValue}
          usdValue={usdValue}
          hkdValue={hkdValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default App;
