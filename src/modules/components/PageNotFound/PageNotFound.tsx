import React from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return <Link to="/profile" className="pageNotFound"></Link>;
}
