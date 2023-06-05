import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data/data';
export default function ProductTable() {
  const { id } = useParams();
  const paramId = id.substring(1);

  const result = data.find((item) => item.id === Number(paramId));

  const [product, setProduct] = useState(result);
  function createData(id, description, price) {
    return { id, description, price };
  }

  const rows = [createData(product.id, product.description, product.price)];
  return (
    <>
      {product && (
        <div>
          <TableContainer sx={{ width: '95%' }}>
            <Table size='small' aria-label='commend'>
              <TableHead sx={{ backgroundColor: '#e9e6e6', padding: 3 }}>
                <TableRow sx={{ border: 1, fontSize: 'small' }}>
                  <TableCell
                    sx={{ paddingBottom: '1px ', fontSize: 'small' }}
                    align='left'
                  >
                    Command N
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: '1px ', fontSize: 'small' }}
                    align='left'
                  >
                    description&nbsp;
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: '1px ', fontSize: 'small' }}
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
                      sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.description}
                    </TableCell>
                    <TableCell
                      sx={{ paddingBottom: '3px ', fontSize: 'small' }}
                      align='left'
                    >
                      {row.price}&nbsp;€
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
