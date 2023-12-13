import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category) => {
  const response = await fetch(`http://localhost:4000/api/Products/${category}`);
  const data = await response.json();
  return data;
});

export const fetchUnstitchedProducts = createAsyncThunk('products/fetchUnstitchedProducts', async (category) => {
  const response = await fetch(`http://localhost:4000/api/unstitched/category/${category}`);
  const data = await response.json();
  return data;
});

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Existing state property for products
    unstitchedItems: [], // New state property for unstitched products
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUnstitchedProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUnstitchedProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.unstitchedItems = action.payload;
      })
      .addCase(fetchUnstitchedProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
      
  },
});

export default ProductsSlice.reducer;

