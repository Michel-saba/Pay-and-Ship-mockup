import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Button from '@mui/material/Button';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';
export default function DeliveryForm({ open, onClose, onSave }) {
  const [value, setValue] = useState('express');
  const handleSubmit = (event) => {
    event.preventDefault();

    const dataForm = new FormData(event.currentTarget);
    const new_product = {
      Country: dataForm.get('Country'),
      Street: dataForm.get('Street'),
      City: dataForm.get('City'),
      CodeP: dataForm.get('CodeP'),
      Phone: dataForm.get('Phone'),
      email: dataForm.get('email'),
      delivery_mode: value,
      delivery_price:
        value === 'express' ? 9.99 : value === 'regular' ? 4.99 : 3.99,
    };

    onSave(new_product);
    onClose();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle> Delivery information</DialogTitle>
      <DialogContent>
        <Alert severity='info'>
          your delivery fees are based on your address
        </Alert>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1, p: 1 }}>
          <div>
            <TextField
              margin='normal'
              required
              fullWidth
              id='Country'
              label='Country'
              name='Country'
              defaultValue={'France'}
              autoFocus
            />
            <TextField
              id='outlined-required'
              label='Street'
              name='Street'
              required
              fullWidth
              margin='normal'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='City'
              label='City'
              id='City'
              //   defaultValue={'paris'}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='CodeP'
              label='Code Postal'
              type='number'
              id='CodeP'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label='Phone number'
              name='Phone'
              type='number'
            />
            <TextField
              fullWidth
              required
              margin='normal'
              name='email'
              type='email'
              //   sx={{ margin: '10px', '&& input': { fontSize: '0.8rem' } }}
              id='email'
              label='Email'
              placeholder='e.mail@e.mail.com'
            />
          </div>
          <div>
            <FormControl>
              <FormLabel id='delivery-mode'>
                Please select your favorite delivery mode
              </FormLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='express'
                name='radio-buttons-group'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='express'
                  control={<Radio />}
                  label='express at home (9.99€)'
                  name='express'
                />
                <FormControlLabel
                  value='regular'
                  control={<Radio />}
                  label='regular at home (4.99€)'
                  name='regular'
                />
                <FormControlLabel
                  //  disabled={!deliveryAble}
                  value='pickup'
                  control={<Radio />}
                  label='regular at pickup location (3.99€)'
                  name='pickup'
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ display: 'flex', paddingTop: '20px' }}>
            {/* <Button variant='contained' color='error' onClick={onClose}>
              Cancel
            </Button> */}
            <Button type='submit' color='success' variant='contained'>
              Save
            </Button>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
