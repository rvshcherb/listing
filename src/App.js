import './App.css';
import { Listing } from './components/Listing';
import * as data from './data/etsy';

const items = Array.from(JSON.parse(JSON.stringify(data)))

function App() {

  const renderPrice = (currency, price) => {
    switch(currency) {
      case 'USD':
        return <p className="item-price">&#36; {`${price}`}</p>;
      case 'EUR':
        return <p className="item-price">&euro; {`${price}`}</p>;
      default:
        return <p className="item-price">{`${price} ${currency}`}</p>;
    }
  }

  return (
    <div className="App">
      <Listing items={items} renderPrice={renderPrice} />
    </div>
  );
}

export default App;
