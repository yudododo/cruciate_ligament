import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, IconButton, Box, Typography, Button } from '@mui/material';
import AddProduct from '../../components/AddProduct';
export const AdminProducts = () => {
  //用六角的 API 取得資料
  const [products, setProducts] = useState([]);
  //type: 決定 modal 展開用途
  //當我點擊下去類型是create時modal會是新增，點擊下去是 edit 時modal會是編輯
  const [type, setType] = useState('create');
  //點選編輯時，需要把當前商品傳進去，必須有一個站存的欄位
  const [tempProduct, setTempProduct] = useState({});

  useEffect (()=>{
    getProducts();
  },[])

  const getProducts = async() =>{
    (async()=>{
      const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products`)
      console.log(productRes)
      setProducts(productRes.data.products);
      const formattedRows = productRes.data.products.map(item => ({
        id: item.id,
        category: item.category,
        title: item.title,           
        origin_price: item.origin_price,
        // is_enabled: item.is_enabled === 1 ? 'on' : 'off',
        is_enabled: item.is_enabled,
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
  const openProductModal = (type, product) => {
    setType(type);
    setTempProduct(product);
    setOpenAdd(true);
  }
  const closeProductModal = () => {
      setOpenAdd(false);
  }

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
          onClick={()=>{openProductModal('create', {})}}
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
        closeProductModal={closeProductModal}
        getProducts={getProducts}
        tempProduct={tempProduct}
        type={type}
      />
      <DataGrid
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', editable: true, width: 60 },
          {
            field: 'category',
            headerName: 'Category 種類',
            editable: true,
            width: 150,
          },
          {
            field: 'title',
            headerName: 'Product Name 產品名稱',
            editable: true,
            width: 150,
          },
          {
            field: 'origin_price',
            headerName: 'Selling Price 售價',
            editable: true,
            width: 100,
          },
          {
            field: 'is_enabled',
            headerName: 'Status 啟用狀態',
            width: 100,
            editable: true,
            align: 'center',
            renderCell: (params) => {
              console.log('is_enabled value:', params.value);
              return <span>{params.value === 1 ? 'on' : 'off'}</span>;
            },
          },
          {
            field: 'edit',
            headerName: 'Edit 編輯',
            width: 190,
            align: 'center',
            renderCell: params => (
              <Box>
                <Button variant="contained"
                  sx={{
                    background:'#5B4F47',
                    color: '#fff',
                    borderRadius: '50px', 
                    fontSize:'12px',
                    '&:hover': {
                      fontSize:'12px',
                      background: '#4B413A',
                    },
                  }}
                  onClick = {()=>{openProductModal('edit', params.row)}}
                >
                  Edit 編輯
                </Button>
                <Button variant="contained"
                  sx={{ 
                    background:'rgb(243,122,122,0.8)',
                    color: '#FFF',
                    borderRadius: '50px',
                    fontSize:'12px',
                    '&:hover': {
                      fontSize:'12px',
                      background: 'rgb(243,122,122)',
                    },
                  }}
                >
                  Delete 刪除
                </Button>
              </Box>
            ),
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
