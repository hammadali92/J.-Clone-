import React from 'react'
import { useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../reduxtoolkit/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getTotals())
  },[cart,dispatch])
  const handleRemoveFromCart = (cartItem) =>{
dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem))
      }
      const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem))
          }
          const handleClearCart = (cartItem) =>{
            dispatch(clearCart(cartItem))
              }

  // Function to convert price strings to numbers
  // const convertToNumber = (price) => parseFloat(price.replace("PKR ", "")); // Assuming price strings have a "PKR " prefix

  return (
    <>
      <div className="cart-container" style={{paddingTop:"18vh"}}>
        <h3 className='text-center  mt-4'>Shopping Cart</h3>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/MainPage">
              <i className="fa-solid fa-arrow-left"></i>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="card-product">
                    <div> <img src={cartItem.image} alt={cartItem.name} /></div>
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                    </div>
                  </div>

                  <div className="cart-product-price">
                    {cartItem.price} {/* Convert price to number */}
                  </div>
                  <div className="cart-product-quantity">
                    <button onClick={() =>handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button  onClick={() =>handleIncreaseCart(cartItem)}>+</button>
                  </div>

                  <div className="cart-product-total-price">
                    {cartItem.price * cartItem.cartQuantity} {/* Convert price to number */}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <button className="clear-cart" onClick={()=>handleClearCart()}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className='amount'>{cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check Out</button>
                <div className="continue-shopping">
                  <Link to="/MainPage">
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
