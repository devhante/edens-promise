import './Footer.css';
import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
  const { success, failed } = useSelector((state) => ({
    success: state.root.success,
    failed: state.root.failed
  }));

  return (
    <div className="Footer">
      <div className="success">SUCCESS: {success}</div>
      <div className="failed">FAILED: {failed}</div>
    </div>
  );
}

export default Footer;
