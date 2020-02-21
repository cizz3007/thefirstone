import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';

const Header:React.FC = (props)=>{

  const { Header, Content } = Layout;

  return(
    <Layout className={"layout"}>
      <Header>
        <div className="logo">dsfds</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
    </Layout>
  )
};
export default Header;
