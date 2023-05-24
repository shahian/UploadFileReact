import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFromLocalStorage } from "../../helpers/ManageLocalStorage";
import "./styles.css";

import { useEffect } from "react";
import { uploadExcelFile } from "../../redux/features/LifeInsurance/uploadExcelFile";

const LifeInsurance = () => {
  const select = useSelector;
  const dispatch = useDispatch();
  let history = useHistory();
  const token = getFromLocalStorage("token");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("numberOfSheet", 1);

      // Call your Java endpoint here using fetch or axios
      // Example using fetch:
      dispatch(uploadExcelFile(formData));
      
    }
  };

 

  return (
    <div>
      <p>Upload Excel File</p>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default LifeInsurance;