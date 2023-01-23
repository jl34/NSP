import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip, 
  FormControlLabel,
  Checkbox,
  Pagination
} from '@mui/material';


 const orders = [
  {
    id: uuid(),
    ref: 'Cedars-Sinai'
  },
  {
    id: uuid(),
    ref: 'UCLA Health'
  },
  {
    id: uuid(),
    ref: 'Scripps Medical'
  },
  {
    id: uuid(),
    ref: 'Sharp'
  },
  {
    id: uuid(),
    ref: 'Providence'
  }
  
];


 export const ProviderTable = (props) => (
  <Card {...props}>
    <CardHeader 
    title="Open Negotiations" 
    />
    <PerfectScrollbar>

      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Provider
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort">
                  <TableSortLabel
                    active
                    direction="desc">
                    Region
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Effective Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                <FormControlLabel control={<Checkbox />} />
                </TableCell>
                <TableCell>  
                {order.ref}
                </TableCell>
                <TableCell>
                SoCal
                </TableCell>
                <TableCell>
                1/1/2020
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Pagination count={3} size="small" />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
    </Box>
  </Card>
); 