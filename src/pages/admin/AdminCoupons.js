import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, IconButton, Box, Typography, Button } from '@mui/material';
import CouponModal from '../../components/CouponModal';
import DelModal from '../../components/DelModal';
export const AdminCoupons = () => {
  //用六角的 API 取得資料
  const [coupons, setCoupons] = useState([]);
  //type: 決定 modal 展開用途
  //當我點擊下去類型是create時modal會是新增，點擊下去是 edit 時modal會是編輯
  const [type, setType] = useState('create');
  //點選編輯時，需要把當前商品傳進去，必須有一個站存的欄位
  const [tempCoupon, setTempCoupon] = useState({});

  useEffect (()=>{
    getCoupons();
  },[])

  const getCoupons = async() =>{
    (async()=>{
      const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons`)
      console.log(res)
      setCoupons(res.data.coupons);
      const formattedRows = res.data.coupons.map(item => ({
        id: item.id,
        title: item.title,           
        percent: item.percent,
        due_date: new Date(item.due_date).toDateString(),
        code: item.code,
        is_enabled: item.is_enabled,
      }));
      setRows(formattedRows);
    })()
  }

  const [rows, setRows] = useState([]);

  const [openAdd, setOpenAdd] = useState(false);
  const openCouponModal = (type, item) => {
    setType(type);
    setTempCoupon(item);
    setOpenAdd(true);
  }
  const closeModal = () => {
      setOpenAdd(false);
  }
  const [openDel, setOpenDel] = useState(false);
  const openDelModal = (product) => {
    setTempCoupon(product);
    setOpenDel(true);
  }
  const closeDelModal = () => {
    setOpenDel(false);
  }

  const delCoupon = async (id) =>{
    try {
      const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`)
      console.log(res)
      if(res.data.success){
        getCoupons();
        closeDelModal();
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box sx={{ width: '100%', height: '400px' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography
          align='left'
          variant='h6'
          sx={{ color: '#5B4F47', fontWeight: '700', mb: 1 }}
        >
          Coupon List 優惠卷列表
        </Typography>
        <Button
          onClick={()=>{openCouponModal('create', {})}}
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
          Add Coupon 建立新優惠券
        </Button>
      </Box>
      <CouponModal
        openAdd={openAdd}
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      />
      <DelModal
        openDel={openDel}
        closeDelModal={closeDelModal}
        text={tempCoupon.title}
        handleDel={delCoupon}
        id={tempCoupon.id}
      />
      <DataGrid
        autoHeight
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', width: 60 },
          {
            field: 'title',
            headerName: 'Coupon title 優惠券標題',
            // editable: true,
            width: 150,
          },
          {
            field: 'percent',
            headerName: 'Discount 折扣',
            // editable: true,
            width: 75,
          },
          {
            field: 'due_date',
            headerName: 'Expired Date 到期日期',
            // editable: true,
            width: 100,
          },
          {
            field: 'code',
            headerName: 'Coupon 優惠碼',
            // editable: true,
            width: 100,
          },
          {
            field: 'is_enabled',
            headerName: 'Status 啟用狀態',
            width: 75,
            // editable: true,
            align: 'center',
            renderCell: (params) => {
              // console.log('is_enabled value:', params.value);
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
                  onClick = {()=>{openCouponModal('edit', params.row)}}
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
                  onClick={() =>{openDelModal(params.row)}}
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
