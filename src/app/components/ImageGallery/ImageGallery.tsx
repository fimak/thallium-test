import React, { useCallback, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

import { IImageGalleryItem } from '../../state/gallery/gallery.types';
import ImageModal from '../ImageModal';
import ImageItem from '../ImageGalleryItem';

type ImageGalleryProps = {
  imageList: IImageGalleryItem[],
  isFetching: boolean,
}

const ImageGallery = ({ imageList, isFetching }: ImageGalleryProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));

  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const showModalImage = (value: string) => {
    setModalImage(value)
    toggleModal()
  }

  const columnsCount = isMobile ? 1 : isTablet ? 2 : 3

  const makeImageColumns = useCallback((index: number) => {
    return isMobile ? 1 : isTablet ? 2 : index % 6 ? 1 : 2
  }, [isMobile, isTablet])

  return (
    <>
      <ImageList
        variant="quilted"
        cols={columnsCount}
        gap={10}
        rowHeight={220}
      >
        {imageList.length && imageList.map((imageItem: IImageGalleryItem, index: number) => (
          <ImageItem
            key={imageItem.id}
            imageData={imageItem}
            isFetching={isFetching}
            showImageModal={showModalImage}
            cols={makeImageColumns(index)}
            rows={makeImageColumns(index)}/>

        ))}
      </ImageList>

      <ImageModal
        modalOpen={modalOpen}
        modalImage={modalImage}
        toggleModal={toggleModal}/>
    </>
  )
}

export default ImageGallery