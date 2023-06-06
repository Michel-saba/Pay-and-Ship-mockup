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
import Avatar from '@mui/material/Avatar';
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
          //  width: '90%',
          height: '640px',
          padding: '10px',
          // left: '10px',
          // top: '0px',
          maxWidth: '760px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: ' red' }} aria-label='Logo'>
              {mark[0].toUpperCase()}
            </Avatar>
          }
          title={mark}
        />
        <CardMedia
          component='img'
          image={imageUrl}
          alt={title}
          sx={{ maxHeight: '420px', maxWidth: '720px' }}
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
          <Link variant='' to={`/Pay-and-Ship-mockup/purchase/:${id}`}>
            <Button
              variant='outlined'
              color='primary'
              aria-label='shopping'
              endIcon={<ShoppingCartIcon sx={{ color: 'ButtonText' }} />}
            >
              <Typography variant='body2' color='text.primary'>
                Add to Cart
              </Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default LargeProductCard;
