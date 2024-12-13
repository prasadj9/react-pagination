import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const OnlineStatusNotifier = () => {
  const [isOnline, setIsOnline] = useState(null);
  const [open, setOpen] = useState(true);

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const handleStatusChange = () => {
    setIsOnline(navigator.onLine);
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);
  if(isOnline === null) return null;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message={isOnline ? "Online" : "Offline"}
        sx={{
            width : "400px"
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={isOnline ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {isOnline ? 'Connection restored!' : 'No internet connection.'}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default OnlineStatusNotifier;
