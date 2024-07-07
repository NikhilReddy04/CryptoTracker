import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="cryptocurrency-item-container">
      <div className="cryptocurrency-item-currency-container">
        <img className="crypto-image" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="cryptocurrency-item-currency-container">
        <p className="crypto-in-usd">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
