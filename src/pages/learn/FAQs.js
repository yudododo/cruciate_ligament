import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQs = () => {
  return (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container maxWidth="xl" >
      <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>FAQs 常見問題</Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          購物流程 ꕀ
        </AccordionSummary>
        <AccordionDetails>
        選購商品 ➡︎ 放入購物車 ➡︎ 結帳 ➡︎ 登入 ➡︎ 填寫寄送資料 ➡︎ 付款 ➡︎ 完成購物
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          出貨時間 ꕀ
        </AccordionSummary>
        <AccordionDetails>
        - 商品皆為本人純手工編織，下訂後開始客製，出貨時間約10-20個工作天。
        <br/>
        - 超商取貨：投遞後約3-4天到指定超商。商品皆手工製作，會看到些許線頭介意者請謹慎下單 。
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          付款方式 ꕀ
        </AccordionSummary>
        <AccordionDetails>
          以銀行匯款轉帳，匯款資訊皆於下單時提供。於三日內核對款項，並寄出「收款確認」通知。
        </AccordionDetails>
      </Accordion>
    </Container>
    </Box>
  );
}

