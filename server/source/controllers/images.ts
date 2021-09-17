import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Photo {
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
}

const url = `http://jsonplaceholder.typicode.com/photos`;

const getPhotos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;

    const response: AxiosResponse = await axios.get(`${url}?_page=${page}&_limit=${limit}`);
    const body: [Photo] = response.data;

    return res.status(200).json(body);
  } catch (error) {
    console.log(error);
  }
};

const getPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;

    const response: AxiosResponse = await axios.get(`${url}/${id}`);
    const body: Photo = response.data;

    return res.status(200).json(body);
  } catch (error) {
    console.log(error);
  }
};

const deletePhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;

    const response: AxiosResponse = await axios.delete(`${url}/${id}`);

    return res.status(200).json({ id });
  } catch (error) {
    console.log(error);
  }
};

const imagesAPI = { getPhotos, getPhoto, deletePhoto };

export default imagesAPI;
