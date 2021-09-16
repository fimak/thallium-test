import { createAsyncThunk } from '@reduxjs/toolkit';

import { galleryAPI } from '../../api/gallery';
import { IGetImageParams, IDeleteImageParams } from './gallery.types';

export const getImages = createAsyncThunk(
  'gallery/getImages',
  async ({ page, limit }: IGetImageParams) => {
    const response = await galleryAPI.get(`http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    return response.data
  }
);

export const deleteImage = createAsyncThunk(
  'gallery/deleteImage',
  async (data: IDeleteImageParams) => {
    const response = await galleryAPI.delete(`http://jsonplaceholder.typicode.com/photos`, data);
    return response.data
  }
);