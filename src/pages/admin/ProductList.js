import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, IconButton, Box, Typography, Button } from '@mui/material';
import AddProduct from '../../components/AddProduct';
export const ProductList = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      classification: ' Key Chain 鑰匙圈',
      product: '愛心鑰匙圈',
      price: '120',
      status: 'on',
    },
    {
      id: 2,
      classification: 'Phone Strap 手機掛繩',
      product: '花花長掛繩',
      price: '490',
      status: 'off',
    },
    {
      id: 3,
      classification: 'Cup Bag 飲料袋',
      product: '花花飲料提袋',
      price: '250',
      status: 'on',
    },
    {
      id: 4,
      classification: 'Phone Strap 手機掛繩',
      product: '素面長掛繩',
      price: '280',
      status: 'off',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAddProduct = () => {
    const newRow = {
      id: rows.length + 1,
      classification: newProduct.classification,
      product: newProduct.product,
      price: newProduct.price,
      status: newProduct.address,
    };
    setRows([...rows, newRow]);
    setNewProduct({ contract: '', network: '', tag: '', address: '', abi: '' });
    handleCloseAdd();
  };

  const [newProduct, setNewProduct] = useState({
    classification: '',
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
        handleChange={handleChange}
        onSave={handleAddProduct}
        newProduct={newProduct}
      />
      <DataGrid
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', editable: true, width: 60 },
          {
            field: 'classification',
            headerName: 'Classification 分類',
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
            // renderCell: (params) => (
            //   <IconButton onClick={() => handleFavoriteClick(params.row.id)}>
            //       {params.row.favorite ? <FavoriteRoundedIcon color="error" /> : <FavoriteBorderIcon />}
            //   </IconButton>
            // ),
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
