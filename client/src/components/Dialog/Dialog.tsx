import { DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

function Dialog(props: any) {
  const [open, setOpen] = useState(false);

  const { title, text, content } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        {content}
      </Dialog>
    </div>
  );
}

export default Dialog;
