import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './gallery.actions';
import { GalleryState } from './gallery.types';


const initialState: GalleryState = {
  imageList: [],
  page: 1,
  perPage: 10,
  status: undefined,
  sortBy: undefined,
  filterBy: undefined
};

export const imageGallerySlice = createSlice({
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
      .addCase(fetchImages.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'success';
        state.imageList = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'error';
      })
  },
});

export default imageGallerySlice.reducer
