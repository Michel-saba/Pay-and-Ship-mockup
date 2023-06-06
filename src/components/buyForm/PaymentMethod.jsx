import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

import logo_CB from '../../images/logo_CB.png';

export default function PaymentMethod() {
  const [value, setValue] = React.useState(dayjs);

  return (
    <Box
      minWidth={300}
      component='form'
      sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}
    >
      <header style={{ textAlign: 'center' }}>
        <img src={logo_CB} alt='visa card' />
      </header>

      <TextField
        size='small'
        required
        id='card-number-input'
        label='Card number'
        defaultValue='1234 4567 6543 7643'
      />

      <TextField
        size='small'
        required
        id='name-input'
        label='Name'
        defaultValue='John duo'
      />

      <TextField
        size='small'
        required
        id='outlined-required'
        label='crypt'
        defaultValue='444'
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          value={value}
          label={'Ex:'}
          views={['month', 'year']}
          format='MM-YYYY'
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Box>
  );
}
