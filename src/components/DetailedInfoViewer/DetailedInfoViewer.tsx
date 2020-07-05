import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { blue } from '@material-ui/core/colors';
import translater from '../../global/translation.json';

export const DetailedInfoViewer = (props: any) => {
  const { cardInfo, closeModal } = props;
  return (
    <Dialog open={true} maxWidth={false}>
      <DialogTitle style={{ paddingBottom: 0 }}>
        {cardInfo.title}
      </DialogTitle>
      <DialogContent style={{ minWidth: 500, padding: 20, paddingTop: 0, wordWrap: 'break-word' }}>
      <DialogContentText style={{ padding: 20}}>
          {cardInfo.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} style={{ color: blue[700] }}>
          {translater.detailedInfoViewer.hideBtn}
          </Button>
      </DialogActions>
    </Dialog>
  );
}
