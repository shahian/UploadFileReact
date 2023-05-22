        import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../../helpers/ManageLocalStorage';
import { useEffect, useState } from 'react';
import { uploadExcelFile } from '../../redux/features/LifeInsurance/uploadExcelFile';
import { Button, Upload, Menu ,Col, Divider, Row} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./styles.css";
const LifeInsurance = () => {
  const select = useSelector;
  const dispatch = useDispatch();
  let history = useHistory();
  const token = getFromLocalStorage('token');

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('numberOfSheet', 1);
      dispatch(uploadExcelFile(formData));
    }
  };

  return (
    <div>
     

    <Menu mode="horizontal" theme="dark" className="menu">
     
      <Menu.Item key="LifeInsurance">
        <Link to="/LifeInsurance">بارگذاری بیمه عمر</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/Login">خانه</Link>
      </Menu.Item>
    </Menu>

    
         <Divider orientation="right"> بارگذاری فایل  بیمه عمر  آجا</Divider>
    <Row justify="end" className="upload-btn menu">
    <Col span={4}> <Button type="primary" onClick={handleFileUpload}>
          بارگذاری
        </Button></Col>
      <Col span={4}><Upload>
          <Button icon={<UploadOutlined />} onChange={handleFileSelect}>
            انتخاب فایل
          </Button>
        </Upload></Col>
     
        <Col span={4} > <label>بارگذاری فایل اکسل</label></Col>
      <Col span={4}></Col>
    </Row>
  </div>
  );
};

export default LifeInsurance;