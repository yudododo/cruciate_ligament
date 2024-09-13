import { createContext } from 'react';
//建立共用環境
export const MessageContext = createContext({});

export const initMessage = {
  type: '', 
  text: '',
};

export const messageReducer = (state, action) => {
  switch (action.type) {
    case 'POST_MESSAGE':
      return {
        type: 'succ', //success, danger
        text: '這是一個成功的訊息',
      };
    case 'CLEAR_MESSAGE':
      return initMessage;
    default:
      break;
  }
};
