import './Header.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from 'modules/root';

function Header() {
  const { title } = useSelector((state) => ({
    title: state.root.title
  }));

  const dispatch = useDispatch();
  const onSetTitle = () => dispatch(setTitle());

  return (
    <div className="Header">
      <div className="title">{title}</div>
    </div>
  );
}

export default Header;
