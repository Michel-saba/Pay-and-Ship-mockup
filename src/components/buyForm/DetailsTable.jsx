import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data/data';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
export default function ProductTable({
  delivery_mode,
  delivery_price,
  onEditDelivery,
}) {
  const { id } = useParams();
  const paramId = id.substring(1);

  const result = data.find((item) => item.id === Number(paramId));

  const [product, setProduct] = useState(result);

  // useEffect(() => {
  //   setDeliveryPrice(delivery_price);
  //   setDeliveryMode(delivery_mode);
  // }, [deliveryMode, deliveryMode]);
  function createData(id, description, price) {
    return { id, description, price };
  }

  const rows = [createData(product.id, product.description, product.price)];
  return (
    <>
      {product && (
        <div>
          <TableContainer sx={{ width: '95%' }}>
            <Table aria-label='commend'>
              <TableHead sx={{ backgroundColor: '#e9e6e6', padding: 3 }}>
                <TableRow>
                  <TableCell
                    // sx={{ paddingBottom: '1px ', fontSize: 'small' }}
                    align='left'
                  >
                    Command N
                  </TableCell>
                  <TableCell
                    //  sx={{ paddingBottom: '1px ', fontSize: 'small' }}
                    align='left'
                  >
                    description&nbsp;
                  </TableCell>
                  <TableCell
                    //  sx={{ paddingBottom: '1px ', fontSize: 'small' }}
                    align='left'
                  >
                    Price&nbsp;
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} sx={{ border: 1 }}>
                    <TableCell
                      // sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      // sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.description}
                    </TableCell>
                    <TableCell
                      // sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.price}&nbsp;€
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow key={'delivery'} sx={{ border: 1 }}>
                  <TableCell
                    //  sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  >
                    <LocalShippingIcon fontSize='large' />
                  </TableCell>
                  <TableCell
                    //  sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  >
                    <IconButton
                      aria-label='edit delivery mode'
                      component='label'
                      onClick={onEditDelivery}
                    >
                      <EditNoteOutlinedIcon />
                    </IconButton>

                    {delivery_mode}
                  </TableCell>
                  <TableCell
                    //sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  >
                    {delivery_price}
                  </TableCell>
                </TableRow>
                <TableRow key={'total'} sx={{ border: 1 }}>
                  <TableCell
                    //  sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  ></TableCell>
                  <TableCell
                    //  sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  >
                    {'total'}
                  </TableCell>
                  <TableCell
                    //sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                    align='left'
                  >
                    {result.price + delivery_price}&nbsp;€
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
