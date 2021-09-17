import { createSlice } from '@reduxjs/toolkit';
import { getImages, deleteImage } from './gallery.actions';
import { IGalleryState } from './gallery.types';

const initialState: IGalleryState = {
  imageList: [],
  page: 1,
  perPage: 10,
  status: undefined,
  sortBy: undefined,
  filterBy: undefined
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = 'success';
        state.imageList = action.payload;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = 'error';
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        const id = state.imageList.findIndex((image) => image.id === +action.payload.id)
        state.imageList.splice(id, 1);
      })
  },
});

export default gallerySlice.reducer
