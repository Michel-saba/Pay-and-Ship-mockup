import { useState } from 'react';
import ProductTable from './DetailsTable';
import PaymentMethod from './PaymentMethod';
import dpd_logo from '../../images/dpd_logo.png';
import Alert from '@mui/material/Alert';
import DeliveryForm from './DeliveryForm';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Checkbox from '@mui/material/Checkbox';

export default function BuyProductPage() {
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [isDelivery, setIsDelivery] = useState(true);
  const [delivery_info, setDelivery_info] = useState({});
  const [delivery_mode, setDelivery_mode] = useState('express');
  const [delivery_price, setDelivery_price] = useState(9.99);

  const thanksMessageTitle = 'Thank you for your order.';
  const thanksMessageDescription = 'Your order number is #OrderNumber.';
  const thanksMessageDescription2 =
    ' We have emailed your tracking number, please check your e-mails';

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowThanksMessage(true);
      setShowPaymentMethod(false);
    }, 2000);
  };
  // const handleIsDeliveryChange = (event) => {
  //   setIsDelivery(event.target.checked);
  // };
  const handleOnDeliverySaveAddress = (address_information) => {
    console.log('address_information', address_information);
    setDelivery_info(address_information);
    setDelivery_mode(address_information.delivery_mode);
    setDelivery_price(address_information.delivery_price);
  };
  const handleCloseDeliveryForm = () => {
    setIsDelivery(false);
  };
  const handleOpenDeliveryForm = () => {
    setIsDelivery(true);
  };
  return (
    <div>
      {/* description table */}
      <header
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h3> Purchase Page</h3>
      </header>
      <div
        style={{
          paddingLeft: '10px',
        }}
      >
        <ProductTable
          onEditDelivery={handleOpenDeliveryForm}
          delivery_mode={delivery_mode}
          delivery_price={delivery_price}
        />
        <Alert severity='info'>
          don't worry you will only be charged when your product is shipped
        </Alert>
      </div>
      {/* livraison */}
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Checkbox defaultChecked />

          <LocalShippingIcon fontSize='large' />
          <img src={dpd_logo} alt={'logo'} width={100} height={60} />
        </div>
        {isDelivery && (
          <DeliveryForm
            open={isDelivery}
            onSave={handleOnDeliverySaveAddress}
            onClose={handleCloseDeliveryForm}
          />
        )}
        {/* <DeliveryAddress /> */}
      </div>

      {/* payment methods */}
      {
        <Dialog
          open={showPaymentMethod}
          onClose={() => setShowPaymentMethod(false)}
        >
          <DialogTitle>
            Payment method
            <IconButton
              aria-label='close'
              onClick={() => setShowPaymentMethod(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <PaymentMethod />
          </DialogContent>

          <DialogActions>
            <Button variant='outlined' onClick={handlePurchase}>
              Purchase
            </Button>
            {loading && (
              <CircularProgress
                size={60}
                sx={{
                  color: 'black',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </DialogActions>
        </Dialog>
      }
      {
        <Dialog
          open={showThanksMessage}
          onClose={() => setShowThanksMessage(false)}
        >
          <DialogTitle>
            <IconButton
              aria-label='close'
              onClick={() => setShowThanksMessage(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <h2>{thanksMessageTitle}</h2>
            <p>{thanksMessageDescription}</p>
            <p>{thanksMessageDescription2}</p>
          </DialogContent>
        </Dialog>
      }

      <div
        style={{
          padding: '10px 30px',
          display: 'flex',
          placeContent: 'space-between',
        }}
      >
        <Button variant='outlined' onClick={() => window.history.back()}>
          back
        </Button>

        <Button variant='outlined' onClick={() => setShowPaymentMethod(true)}>
          order
        </Button>
      </div>
    </div>
  );
}
