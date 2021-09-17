import { createAsyncThunk } from '@reduxjs/toolkit';

import { galleryAPI } from '../../api/gallery';
import { IGetImageParams } from './gallery.types';

export const getImages = createAsyncThunk(
  'gallery/getImages',
  async ({ page, limit }: IGetImageParams) => {
    const response = await galleryAPI.get(`/photos?page=${page}&limit=${limit}`);
    return response.data
  }
);

export const deleteImage = createAsyncThunk(
  'gallery/deleteImage',
  async (id: number | string) => {
    const response = await galleryAPI.delete(`/photos/${id}`);
    return response.data
  }
);