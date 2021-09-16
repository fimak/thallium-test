import { createAsyncThunk } from '@reduxjs/toolkit';

import { imageAPI } from '../../api/gallery';
import { FetchImageParams } from './gallery.types';


export const fetchImages = createAsyncThunk(
  'gallery/fetchImages',
  async (params: FetchImageParams) => {
    const {page, limit} = params
    const response = await imageAPI.get(`http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    return response.data
  }
);