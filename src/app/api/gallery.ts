import axios from './axios';
import { ImageItemType } from '../state/gallery/gallery.types';

export const imageAPI = {
  get: async (url: string) => await axios.get(url),
  post: async (url: string, body: ImageItemType) => await axios.post(url, body),
  patch: async (url: string, body: Partial<ImageItemType>) => await axios.patch(url, body),
  delete: async (url: string) => await axios.delete(url),
};
