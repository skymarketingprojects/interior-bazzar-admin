// import React, { useState, useEffect } from "react";
// import { Alert as MuiAlert } from "@mui/material";
// import { Snackbar } from "@mui/material";
// import { type ShowAlertProps } from "../../../types/global";

// const Alert: React.FC<ShowAlertProps> = ({
//     setHandler,
//     state = "success",
//     message = "Successfully done",
// }) => {
//     const [open, setOpen] = useState(false);
//     const vertical = "top";
//     const horizontal = "center";
//     const handleClose = (_event: React.SyntheticEvent | Event, reason: any) => {
//         if (reason === "clickaway") {
//             return;
//         }
//         if (typeof setHandler === "function") setHandler(null);
//         setOpen(false);
//     };


//     useEffect(() => {
//         setOpen(true);
//     }, []);
//     return (
//         <Snackbar
//             anchorOrigin={{ vertical, horizontal }}
//             open={open}
//             autoHideDuration={2500}
//             onClose={handleClose}
//         >
//             <MuiAlert
//                 onClose={handleClose as any}
//                 variant="filled"
//                 severity={state}
//                 sx={{ width: "100%" }}
//             >
//                 {message}
//             </MuiAlert>
//         </Snackbar>
//     )
// }

// export default Alert;
