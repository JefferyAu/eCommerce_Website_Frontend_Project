import {
  FormControl,
  InputLabel,
  Paper, Select, SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import TransactionTableRow from "./TransactionTableRow.tsx";
import {TransactionListDto} from "../../../../data/transaction/Transaction.type.ts";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  transactionListDto: TransactionListDto[]
  paidStatusFilter:string,
  handlePaidStatusFilterChange:(paidStatusFilter:string)=> void
}

export default function TransactionTable({transactionListDto,
                                           paidStatusFilter,
                                           handlePaidStatusFilterChange}:Props){

  const handlePaidStatusSelectChange = (event: SelectChangeEvent) =>{
    handlePaidStatusFilterChange(event.target.value);
  }

  return(
    <>
      <FormControl sx={{
        minWidth: 200,
        mb:2
      }}>
        <InputLabel id="demo-simple-select-label" >Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handlePaidStatusSelectChange}
          value={paidStatusFilter}
        >
          <MenuItem value="SUCCESS">Paid</MenuItem>
          <MenuItem value="PREPARE">Unpaid</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{
          minWidth: 650
        }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Payment Date/Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              transactionListDto
                .filter((value)=>(
                  value.status.includes(paidStatusFilter)
                ))
                .sort((a, b) => (a.tid > b.tid ? -1 : 1))
                .map((value)=>(
                <TransactionTableRow key={value.tid} transactionListDto={value}/>
              ))
            }

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}