import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
