import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = ({ authenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToLogin = () => {
    navigate('/login');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };
  const goToLogout = () => {
    dispatch(authenticateAction.logout());
  };
  return (
    <div>
      <div className='side-menu' style={{ width: width }}>
        <button className='closebtn' onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className='side-menu-list'>
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className='nav-header'>
        <div className='burger-menu hide'>
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={goToLogout}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: 'pointer' }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: 'pointer' }}>로그인</span>
          </div>
        )}
      </div>
      <div className='nav-logo'>
        <Link to='/'>
          <img
            width={100}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
          />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href='#'>{menu}</a>
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
