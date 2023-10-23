import Nav from "./Nav";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, col1: "ghhh", col2: "", col3: "", col4: "Edit", col5: "Delete" },
  { id: 2, col1: "", col2: "", col4: "Edit", col5: "Delete" },
  { id: 3, col1: "", col2: "", col4: "Edit", col5: "Delete" },
];

const columns = [
  { field: "col1", headerName: "Product name", width: 150 },
  { field: "col2", headerName: "Product image", width: 150 },
  { field: "col3", headerName: "Product description", width: 150 },
  {
    field: "col4",
    headerName: "",
    cellClassName:
      "text-white bg-green-500 cursor-pointer MuiDataGrid-cell--textCenter",
  },
  {
    field: "col5",
    headerName: "",
    cellClassName:
      "text-white bg-red-500 cursor-pointer MuiDataGrid-cell--textCenter",
  },
];

function Stock() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center">Stock</h2>

      <div style={{ height: 300, width: "80%" }} className="m-7">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
export default Stock;
