export type FetchImageParams = {
  page: number,
  limit: number

}

export interface ImageItemType {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface GalleryState {
  imageList: [ImageItemType] | [],
  page: number,
  perPage: number,
  status: 'pending' | 'success' | 'error' | undefined,
  sortBy: string | undefined,
  filterBy: string | undefined

}