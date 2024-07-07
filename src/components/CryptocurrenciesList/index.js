import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount = () => {
    this.fetchCurrencyData()
  }

  fetchCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await response.json()
    const bitcoinData = currencyData.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      currencyName: eachItem.currency_name,
    }))

    this.setState({currencyList: bitcoinData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div>
        {!isLoading ? (
          <div className="main-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="main-image"
              alt="cryptocurrency"
            />
            <div className="currency-container">
              <div className="headings-container">
                <div className="headings-container-1">
                  <p>Coin Type</p>
                </div>
                <div className="headings-container-2">
                  <p className="usd-para">USD</p>
                  <p>Euro</p>
                </div>
              </div>
              <ul className="currency-list-container">
                {currencyList.map(eachItem => (
                  <CryptocurrencyItem
                    key={eachItem.id}
                    currencyDetails={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
