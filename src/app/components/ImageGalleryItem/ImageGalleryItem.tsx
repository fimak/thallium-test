import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Tooltip from '@mui/material/Tooltip';

import { useAppDispatch } from '../../hooks';
import { deleteImage } from '../../state/gallery/gallery.actions';
import { IImageGalleryItem } from '../../state/gallery/gallery.types';

type ImageGalleryItemProps = {
  isFetching: boolean,
  cols: number,
  rows: number,
  imageData: IImageGalleryItem,
  showImageModal: (value: string) => void
}

const ImageGalleryItem = ({ isFetching, cols, rows, imageData, showImageModal }: ImageGalleryItemProps) => {
  const dispatch = useAppDispatch()

  const showModal = () => {
    showImageModal(imageData.url)
  }

  const handleDelete = () => {
    console.log('remove: ', imageData);
    dispatch(deleteImage(imageData.id))
  }

  return (
    <ImageListItem
      cols={cols}
      rows={rows}>
      {isFetching ? (
        <Skeleton variant={'rectangular'} width={'100%'} height={'100%'}/>
      ) : (
        <img
          onClick={showModal}
          src={imageData.thumbnailUrl}
          alt={imageData.title}
          loading="lazy"
        />
      )
      }
      {!isFetching && <ImageListItemBar
        title={imageData.title}
        actionIcon={
          <Tooltip title={'Delete'} placement="left">
            <IconButton
              onClick={handleDelete}
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            >
              <BackspaceIcon/>
            </IconButton>
          </Tooltip>
        }
      />}
    </ImageListItem>
  )
}

export default ImageGalleryItem;
