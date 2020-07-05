import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

interface BannerMessageProps {
    message: {
        messageType: "success" | "info" | "warning" | "error" | undefined;
        messageText: string;
    },
    closeBanner: () => void;
};

const Alert = (props: any) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const BannerMessage = (props: BannerMessageProps) => {
    const { messageType, messageText } = props.message;
    
    return (
            <Alert 
            style={{ marginTop: 25 }}
            severity={messageType}
            action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={props.closeBanner}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>{messageText}
        </Alert>
    );
}
