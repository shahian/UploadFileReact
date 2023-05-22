import { toast } from "react-toastify";

const toaster = (type, message) => {
  toast[type](message);
};

export default toaster;
