import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LargeProductCard = ({
  id,
  imageUrl,
  mark,
  title,
  price,
  description,
}) => {
  return (
    <div>
      <Card
        style={{
          width: '90%',
          height: '60%',
          padding: '0px',
          left: '0px',
          top: '0px',
        }}
      >
        <CardHeader
          title={mark}
          action={
            <Button aria-label='settings'>
              <CloseIcon />
            </Button>
          }
        />
        <CardMedia
          component='img'
          image={imageUrl}
          alt={title}
          sx={{ maxHeight: '620px', maxWidth: '1200px' }}
        />
        <CardContent>
          <Typography variant='h5' color='text.primary'>
            {title + ' ' + price + ' €'}
          </Typography>
          <Typography variant='body5' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ flexDirection: 'row-reverse', paddingInlineEnd: '10%' }}
        >
          <Link variant='' to={`/purchase/:${id}`}>
            <Button
              variant='outlined'
              color='primary'
              aria-label='shopping'
              endIcon={<ShoppingCartIcon sx={{ color: 'ButtonText' }} />}
            >
              <Typography variant='body2' color='text.primary'>
                Next
              </Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default LargeProductCard;
