import { createSlice } from '@reduxjs/toolkit';
import { getImages } from './gallery.actions';
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
  reducers: {
    deleteImage(state, action) {
      state.imageList.filter(image => image.id !== action.payload)
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setPerPage(state, action) {
      state.perPage = action.payload
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setFilterBy(state, action) {
      state.filterBy = action.payload
    }
  },
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
  },
});

export default gallerySlice.reducer
