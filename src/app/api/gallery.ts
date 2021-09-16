import axios from './axios';
import { IDeleteImageParams, IImageGalleryItem } from '../state/gallery/gallery.types';

export const galleryAPI = {
  get: async (url: string) => await axios.get(url),
  post: async (url: string, data: IImageGalleryItem) => await axios.post(url, data),
  patch: async (url: string, data: Partial<IImageGalleryItem>) => await axios.patch(url, data),
  delete: async (url: string, data: IDeleteImageParams) => await axios.delete(url, { data }),
};
