import  { createContext } from 'react';

function calculateTotalPrice(cartList) {
  return cartList.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
}

export const cartInit = {
  cartList:[],
}
export const cartReducer = (state, action) => {
  console.log(action);
  const cartList = [...state.cartList]
  //先取得當前購物車的目標品項的索引
  const index = cartList.findIndex((item) => item.id === action.payload.id)
  console.log(index)
  switch (action.type) {
    case 'ADD_TO_CART':
      if(index === -1){
        //還未加入到購物車
      cartList.push(action.payload);
      }else{
        //當前購物車的項目與加入的項目一致
        cartList[index].quantity += action.payload.quantity
      }
      // const array = cartList.map((item) => {
      //   return item.quantity * item.price
      // })
      // console.log(array)
      // const total = array.reduce((a, b) => {
      //   return a + b}, 0)

      // const total = cartList.map((item)=> item.quantity * item.price).reduce((a, b) => a + b, 0);
      // const total = calculateTotalPrice(cartList);
      return {
        ...state,
        cartList,
        total:calculateTotalPrice(cartList)
      }

    case 'CHANGE_CART_QUANTITY':
      cartList[index].quantity = action.payload.quantity
      return{
        ...state,
        cartList,
        total:calculateTotalPrice(cartList)
      }

    case 'REMOVE_CART_ITEM':
      cartList.splice(index, 1)
      return{
        ...state,
        cartList,
        total:calculateTotalPrice(cartList)
      }
      
    default:
      return state
}
}

export const CartContext = createContext({})