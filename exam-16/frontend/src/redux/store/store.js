import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/productSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  basketSlice  from '../features/basketSlice'
import  wishlistSlice  from '../features/wishlistSlice'

const persistBasketConfig = {
  key: 'basket',
  storage,
}
 
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)
const persistedWishlistReducer = persistReducer(persistBasketConfig, wishlistSlice)
export const store = configureStore({
  reducer: {products:productSlice ,basket:persistedBasketReducer ,wishlist:persistedWishlistReducer},
})

const persistor=persistStore(store)

export default persistor