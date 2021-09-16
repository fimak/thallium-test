import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/createStore';

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;