import React, { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getImages } from '../state/gallery/gallery.actions';
import { galleryImageSelector, statusSelector } from '../state/gallery/gallery.selectors';
import { IImageGalleryItem } from '../state/gallery/gallery.types';
import Pagination from '../components/Pagination';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SortingButton from '../components/SortingButton';

function ImageGalleryPage() {
  const dispatch = useAppDispatch()
  const imageList: IImageGalleryItem[] = useAppSelector(galleryImageSelector)
  const status = useAppSelector(statusSelector)
  const [page, setPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(10)

  const isFetching = status === 'pending'

  const changePage = (value: number) => {
    setPage(value)
  }
  const changePageLimit = (value: number) => {
    setPageLimit(value)
  }

  useEffect(() => {
    dispatch(getImages({limit: pageLimit, page}))
  }, [dispatch, page, pageLimit])

  return (
    <Container>
      <Box
        sx={{position: 'sticky', top: 0, padding: '10px 0', zIndex: 10, height: 50, backgroundColor: '#fff'}}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <SortingButton/>
        <Pagination
          page={page}
          pageLimit={pageLimit}
          changePageLimit={changePageLimit}
          changePage={changePage}/>

      </Box>

      <ImageGallery
        imageList={imageList}
        isFetching={isFetching}/>

    </Container>
  );
}

export default ImageGalleryPage;
