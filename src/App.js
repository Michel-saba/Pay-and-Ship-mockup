import { useState } from 'react';

import { data } from './data/data';
import LargeProductCard from './components/product_cards/LargeProductCard';
import classes from './App.module.css';
function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const product = queryParameters.get('p');
  const productId = Number(product);
  console.log('product', product);
  const [findProductMatch, setFindProductMatch] = useState(
    data.find((item) => item.id === productId)
  );
  console.log('findProductMatch', findProductMatch);
  return (
    <div id='app' className={classes.App}>
      {/* <h2>thank you for selecting this item</h2> */}
      {findProductMatch && (
        <LargeProductCard
          key={findProductMatch.id}
          id={findProductMatch.id}
          mark={findProductMatch.mark}
          imageUrl={findProductMatch.imageUrl}
          title={findProductMatch.title}
          price={findProductMatch.price}
          description={findProductMatch.description}
        />
      )}
      {!findProductMatch && (
        <div>
          <h1>Product not found</h1>{' '}
        </div>
      )}
    </div>
  );
}

export default App;
