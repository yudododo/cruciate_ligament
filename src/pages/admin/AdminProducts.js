import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, IconButton, Box, Typography, Button } from '@mui/material';
import AddProduct from '../../components/AddProduct';
export const AdminProducts = () => {
  //用六角的 API 取德資料
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  useEffect (()=>{
    getProducts();
  },[])

  const getProducts = async() =>{
    (async()=>{
      const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products`)
      console.log(productRes)
      setProducts(productRes.data.products);
      setPagination(productRes.data.pagination)
      const formattedRows = productRes.data.products.map(item => ({
        id: item.id,
        category: item.category,
        product: item.content,           
        price: item.origin_price,
        status: item.is_enable
      }));
      setRows(formattedRows);
    })()
  }

  const [rows, setRows] = useState([]);

  const [newProduct, setNewProduct] = useState({
    category: '',
    product: '',
    price: '',
    status: '',
  });
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  return (
    <Box sx={{ width: '100%', height: '400px' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography
          align='left'
          variant='h6'
          sx={{ color: '#5B4F47', fontWeight: '700', mb: 1 }}
        >
          Product List 產品列表
        </Typography>
        <Button
          onClick={handleOpenAdd}
          sx={{
            mb: 2.5,
            background: '#5B4F47',
            color: '#fff',
            borderRadius: '50px',
            textTransform: 'none',
            '&:hover': {
              background: '#4B413A',
            },
          }}
        >
          Add Product 新增產品
        </Button>
      </Box>
      <AddProduct
        openAdd={openAdd}
        handleCloseAdd={handleCloseAdd}
        getProducts={getProducts}
      />
      <DataGrid
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', editable: true, width: 60 },
          {
            field: 'category',
            headerName: 'Category 種類',
            editable: true,
            width: 170,
          },
          {
            field: 'product',
            headerName: 'Product Name 產品名稱',
            editable: true,
            width: 170,
          },
          {
            field: 'price',
            headerName: 'Selling Price 售價',
            editable: true,
            width: 100,
          },
          {
            field: 'status',
            headerName: 'Status 啟用狀態',
            width: 100,
            align: 'center',
          },
          {
            field: 'edit',
            headerName: 'Edit 編輯',
            width: 100,
            align: 'center',
            // renderCell: params => (
            //   <IconButton>
            //     <CancelRoundedIcon onClick={handleDeleteClick(params.row.id)} />
            //   </IconButton>
            // ),
          },
        ]}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
