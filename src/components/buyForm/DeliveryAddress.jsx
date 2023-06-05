import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dpd_logo from '../../images/dpd_logo.png';

export default function DeliveryAddress() {
  const [deliveryAble, setDeliveryAble] = useState(true);
  const handleChange = (event) => {
    setDeliveryAble(event.target.checked);
  };
  return (
    <Box>
      <div
        style={{ paddingInline: '10px', display: 'flex', flexDirection: 'row' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Checkbox value={deliveryAble} defaultChecked />
          <LocalShippingIcon fontSize='large' />
          <img src={dpd_logo} alt={'logo'} width={100} height={60} />
        </div>
      </div>
      <div
        style={{
          paddingInline: '10px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ paddingLeft: '10px', flex: 1 }}>
          <FormControl>
            <FormLabel id='delivery-mode'>Delivery mode</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='express'
              name='radio-buttons-group'
            >
              <FormControlLabel
                sx={{ '& span': { fontSize: '10px' } }}
                disabled={!deliveryAble}
                value='express'
                control={<Radio />}
                label='express at home (9.99€)'
              />
              <FormControlLabel
                sx={{ '& span': { fontSize: '10px' } }}
                disabled={!deliveryAble}
                value='regular'
                control={<Radio />}
                label='regular at home (4.99€)'
              />
              <FormControlLabel
                sx={{ '& span': { fontSize: '10px' } }}
                disabled={!deliveryAble}
                value='pickup'
                control={<Radio />}
                label='regular at pickup location (3.99€)'
                size='small'
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div style={{ paddingInline: '10px', flex: 1 }}>
          <FormLabel id='delivery-address'>Delivery Address</FormLabel>
          <div>
            <TextField
              size='small'
              disabled={!deliveryAble}
              sx={{ margin: '10px', '&& input': { fontSize: '0.8rem' } }}
              id='outlined-required'
              label='Street'
              defaultValue='94 Av. Gambetta'
            />
          </div>
          <div>
            <TextField
              disabled={!deliveryAble}
              sx={{ margin: '10px', '&& input': { fontSize: '0.8rem' } }}
              size='small'
              id='outlined-required'
              label='City'
              defaultValue='Paris'
            />
            <TextField
              disabled={!deliveryAble}
              sx={{ margin: '10px', '&& input': { fontSize: '0.8rem' } }}
              size='small'
              id='outlined-required'
              label='Code postal'
              defaultValue='75020'
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
