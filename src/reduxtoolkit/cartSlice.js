
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};


// const convertToNumber = (price) => parseFloat(price.replace("PKR ", ""));

const initializeStateFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    return {
      cartItems: JSON.parse(storedCartItems),
      cartTotalQuantity: 0, // You can calculate this value based on cart items
      cartTotalAmount: 0, // You can calculate this value based on cart items
    };
  }
  return initialState; // Use the default state if 'cartItems' is not in local storage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initializeStateFromLocalStorage(), // Initialize state from local storage
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info('Increase Product Quantity', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success('Adding a new Product', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
state.cartItems = nextCartItems;
localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
toast.error('remove from cart', {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,

});
    },
    decreaseCart: (state,action) =>{
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      )
      if(state.cartItems[itemIndex].cartQuantity>1){
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info('Decreased product from cart quantity', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        
        });
      }
      else if(state.cartItems[itemIndex].cartQuantity ===1){
        const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
state.cartItems = nextCartItems;

toast.error('remove from cart', {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,

});
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    clearCart : (state,action) =>{
      state.cartItems=[];
      toast.error('Cart cleared', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotals:(state,action)=>{
     let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem) => {
        const {price, cartQuantity} = cartItem;
        const itemTotal = ( price) * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal
      }, {
        total:0,
        quantity:0,

      })
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount =total;
      
    }
  },
});

export const { addToCart , removeFromCart, decreaseCart , clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;
