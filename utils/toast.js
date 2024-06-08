// utils/toast.js
import { toast } from 'react-toastify';

export const showToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl:false,
        pauseOnFocusLoss:true,
        theme:"colored",
        Bounce:true,
    });
};
