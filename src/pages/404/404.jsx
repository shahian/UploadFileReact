import { Button } from 'antd';
import { Link } from 'react-router-dom';
import motFoundImage from '../../assets/svg/404.svg'
import './styles.css';

const NotFound404 = () => {
    return (
        <div className="main-404__div">
            <img src={motFoundImage} alt="404 pic" />
            <h1 className="message-text">
            ! صفحه ای یافت نشد 
            </h1>
            <Button type='primary'>
            <Link to="/">بازگشت به خانه</Link>
            </Button>
        </div>
    )
}

export default NotFound404
