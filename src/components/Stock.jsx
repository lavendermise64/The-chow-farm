import Nav from "./Nav";
import { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { StateContext } from "../context/stateContext";


function Stock() {
  const { userProducts, setUserProducts } = useContext(StateContext);
const{showModal,setShowModal}=useContext(StateContext);
const {selectedProduct, setSelectedProduct} = useContext(StateContext);
const handleEdit = params=>{
  if(params.value === "Edit"){
    setShowModal(true);
  }
  
}

const handleRowClick = params=>{
  console.log(params.row)
  const {col1, col2, col3, col4, col5, id} = params.row;
  const product ={
    id,
    productName:col1,
    productDescription:col3,
    productPrice:col4,
    stock:col5,
    productImg:col2
  }
  setSelectedProduct(product);
}
  const renderRows = ()=>{
    const rowArr = [];
    userProducts.map(product=>{
      const row = {
        id: product._id,
      col1: product.productName,
      col2: product.productImg,
      col3: product.productDescription,
      col4: product.productPrice,
      col5: product.stock,
      col6: "Edit",
      col7: "Delete",
      }
      rowArr.push(row);
    })
    return rowArr;
  }

  const rows = renderRows()
  
  const columns = [
    { field: "col1", headerName: "Product name", width: 150 },
    { field: "col2", headerName: "Product image", width: 150 },
    { field: "col3", headerName: "Product description", width: 150 },
    { field: "col4", headerName: "Product price", width: 150 },
    { field: "col5", headerName: "Stock number", width: 150 },
    {
      field: "col6",
      headerName: "",
      cellClassName:
        "text-white bg-green-500 cursor-pointer MuiDataGrid-cell--textCenter",
    },
    {
      field: "col7",
      headerName: "",
      cellClassName:
        "text-white bg-red-500 cursor-pointer MuiDataGrid-cell--textCenter",
    },
  ];
  return (
    <div className="container mx-auto">
      {console.log(selectedProduct)}
      <h2 className="text-center">Stock</h2>
      {console.log(userProducts)}
      <div style={{ height: 300, width: "80%" }} className="m-7">
        <DataGrid rows={rows} columns={columns} onCellClick={handleEdit} onRowClick={handleRowClick}/>
      </div>
    </div>
  );
}
export default Stock;
