import { useState } from 'react';
import { data } from './data/data';
import LargeProductCard from './components/product_cards/LargeProductCard';
import classes from './App.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const product = queryParameters.get('p');
  const productId = Number(product);

  const [findProductMatch] = useState(
    data.find((item) => item.id === productId)
  );

  return (
    <div id='app' className={classes.App}>
      <AppBar
        position='absolute'
        color='default'
        elevation={0}
        sx={{
          position: 'relative',
          backgroundColor: '#dc0032',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>

      <main>
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
            <h1>Sorry something went wrong. Product not found</h1>{' '}
          </div>
        )}
      </main>
      <footer>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright ©  '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </div>
  );
}

export default App;
