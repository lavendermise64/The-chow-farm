import Oda from "./Oda";
import { DataGrid } from "@mui/x-data-grid";
const rows = [
  { id: 1, col1: "ghhh", col2: "", col3: "",},
  { id: 2, col1: "", col2: "",  },
  { id: 3, col1: "", col2: "", },
];

const columns = [
  { field: "col1", headerName: "Product name", width: 150 },
  { field: "col2", headerName: "Product price", width: 150 },
  { field: "col3", headerName: "Product description", width: 150 },

];
function Orders() {
  return (
    <div>
      <h2 className="flex justify-center p-3">Orders</h2>
      <div className="flex justify-center gap-10">
        <Oda orders="0" ordersText="orders today" ordersColor="text-red-500" />
        <Oda orders="3" ordersText="pending orders" ordersColor=" text-purple-500" />
        <Oda orders="31" ordersText="total  orders" ordersColor="text-orange-500"/>
      </div>
      <div style={{ height: 300, width: "80%" }} className="m-7" >
      <DataGrid rows={rows} columns={columns} />

      </div>
    </div>
  );
}
export default Orders;
