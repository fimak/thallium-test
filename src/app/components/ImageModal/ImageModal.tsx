import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import useStyles from './ImageModal.styles';

type ImageModalProps = {
  modalOpen: boolean,
  toggleModal: () => void,
  modalImage: string
}

const ImageModal = ({ modalOpen, toggleModal, modalImage }: ImageModalProps) => {
  const classes = useStyles()

  return (
    <Modal
      className={classes.root}
      open={modalOpen}
      disableEnforceFocus
      BackdropComponent={Backdrop}
      onClose={toggleModal}>
      <Fade in={modalOpen} timeout={200}>
        <Box className={classes.content}>
          <ImageListItem sx={{ width: '100%' }}>
            <img
              src={modalImage} alt=""/>
          </ImageListItem>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ImageModal;
