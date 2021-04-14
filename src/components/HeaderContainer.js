import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/Header';
import { setTitle } from 'modules/root';

function HeaderContainer() {
  const { title } = useSelector((state) => ({
    title: state.root.title
  }));

  const dispatch = useDispatch();
  const onSetTitle = () => dispatch(setTitle());

  return <Header title={title} />;
}

export default HeaderContainer;
