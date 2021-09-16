export interface IGetImageParams {
  page: number,
  limit: number
}

export interface IDeleteImageParams {
  albumId: number,
  id: number,
}

export interface IImageGalleryItem {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface IGalleryState {
  imageList: [IImageGalleryItem] | [],
  page: number,
  perPage: number,
  status: 'pending' | 'success' | 'error' | undefined,
  sortBy: string | undefined,
  filterBy: string | undefined
}