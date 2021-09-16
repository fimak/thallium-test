import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/createStore';

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
