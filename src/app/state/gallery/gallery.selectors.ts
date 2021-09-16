import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/createStore';

const imageSelector = (state: RootState) => state.gallery.imageList;

export const galleryImageSelector = createSelector(imageSelector, (imageList) => imageList);
export const statusSelector = (state: RootState) => state.gallery.status;
export const pageSelector = (state: RootState) => state.gallery.page;
export const pageLimitSelector = (state: RootState) => state.gallery.perPage;
