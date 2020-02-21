import React from 'react';
import {Link} from 'umi';

export default function (props: any) {
  console.log(props);
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to={'/menu/basic'}>메뉴</Link>
        </li>
        <li>
          <Link to={'/date'}>날짜</Link>
        </li>
        <li>
          <Link to={'/server'}>검색</Link>
        </li>
      </ul>
      {
        props.children
      }
    </div>
  );
}
