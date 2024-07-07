In this project, let's build a **Cryptocurrency Tracker** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="cryptocurrency-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-sm-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-success-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the page is opened,
  - Make HTTP GET request to the **cryptocurrenciesApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the updated list of cryptocurrencies should be displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**cryptocurrenciesApiUrl**

#### API: `https://apis.ccbp.in/crypto-currency-converter`

#### Method: `GET`

#### Description:

Returns a response containing the list of cryptocurrencies

#### Response

```json
[
  {
    "currency_name": "Bitcoin",
    "usd_value": "46750.63",
    "euro_value": "39596.07",
    "id": "6e937df9-1345-4c2f-8ace-babff0e5108f",
    "currency_logo": "https://www.cryptocompare.com/media/19633/btc.png"
  },
  ...
]
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-component-breakdown-structure.png" alt="cryptocurrency component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/CryptocurrencyTracker/index.js`
- `src/components/CryptocurrencyTracker/index.css`
- `src/components/CryptocurrenciesList/index.js`
- `src/components/CryptocurrenciesList/index.css`
- `src/components/CryptocurrencyItem/index.js`
- `src/components/CryptocurrencyItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- To display the animated loader, we need to import the `Loader` component using the below statement

  ```jsx
  import Loader from 'react-loader-spinner'
  ```

- In order to display the given animated loader, pass the `type` and `color` props to the `Loader` component with values as **Rings** and **#ffffff**, respectively

  ```jsx
  <Loader type="Rings" color="#ffffff" height={80} width={80} />
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The cryptocurrencies should have the alt as the value of the key `currency_name` from each cryptocurrency object received in response
- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it as shown below

  ```jsx
  <div data-testid="loader">
    <Loader type="Rings" color="#ffffff" height={80} width={80} />
  </div>
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png](https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png) alt should be **cryptocurrency**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #00e7ff; width: 150px; padding: 10px; color: black">Hex: #00e7ff</div>
<div style="background-color: #092e33; width: 150px; padding: 10px; color: white">Hex: #092e33</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
