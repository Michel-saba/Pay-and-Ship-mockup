import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';
export default function DeliveryForm({ open, onClose, onSave }) {
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
    };

    onSave(new_product);
    onClose();
  };

  return (
    <Dialog open={open} fullScreen>
      <DialogTitle> Delivery information</DialogTitle>
      <DialogContent>
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

          <div style={{ display: 'flex', paddingTop: '40px' }}>
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
