import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "../../css/lesson/LessonDelete.css";
import { ThemeContext } from "../../context/ThemeContext";

const LessonDelete = ({ deleteLesson }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleDelete = (event) => {
    deleteLesson();
    setOpen(false);
  };

  const { color } = React.useContext(ThemeContext);

  return (
    <div className="lesson-delete">
      <Tooltip title="Delete Lesson">
        <IconButton
          edge="start"
          color="error"
          size="large"
          aria-label="close"
          className="dialog-close-button"
          onClick={handleClickOpen}
        >
          <DeleteIcon className="lesson-delete-icon" />
        </IconButton>
      </Tooltip>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: color 
          },
        }}
      >
        <DialogTitle id="delete-dialog-title">
          {"Are you sure you want to delete this lesson?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            This action cannot be undone and the lesson will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button className="delete-confirm-btn" onClick={handleClose} color="primary">Cancel</Button>
          <Button className="delete-confirm-btn" variant="contained" onClick={handleDelete} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LessonDelete;
