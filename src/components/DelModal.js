import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  IconButton
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
export default function DelDialog({
  openDel,
  closeDelModal,
  text,
  handleDel,
  id
}) {
  return (
    <Dialog 
      open={openDel} onClose={closeDelModal}
      maxWidth='xs'
      fullWidth
      PaperProps={{
        sx: {
          border: '3px solid #5B4F47',
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle> Delete Confirm 刪除確認 </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={closeDelModal}
        sx={{
          position: 'absolute',
          right: 15,
          top: 15,
        }}
      >
        {' '}
        <CancelRoundedIcon />{' '}
      </IconButton>
      <DialogContent>
        <DialogContentText>{`Are you sure you want to delete ${text}?`}<br />
        {`您確定要刪除${text}嗎？`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={closeDelModal}
          sx={{
            color: '#5B4F47',
            borderRadius: '20px',
            '&:hover': {
              background: 'rgb(91,79,71, 0.3)',
            },
          }}
        >
          Cancel 取消
        </Button>
        <Button
          variant='contained'
          onClick={() => {handleDel(id)}}
          autoFocus
          sx={{ 
            background:'rgb(243,122,122,0.8)',
            color: '#FFF',
            borderRadius: '20px',
            '&:hover': {
              background: 'rgb(243,122,122)',
            },
          }}
        >
          {' '}
          Delete 刪除{' '}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
