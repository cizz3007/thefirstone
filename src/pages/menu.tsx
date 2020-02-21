import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Icon, Button, Typography} from 'antd';
import {useLocation} from "react-router-dom";
import {Link} from "umi";

const logoSrc = 'https://qeuxmtqauiit1072966.cdn.ntruss.com/pc-web/main/logo_icon/001_title_logow_tripbtoz.png';


const ROOM = '객실 설정';
const PROMO = '프로모션 설정';
const BASIC = '기본 정보';
const CHECKPRICE = '전체 판매가 확인';

function CurrentMenuComponent(keyValue:string) {
  return (
      <h3> - {keyValue}</h3>
  );
}

const MenuPage: React.FC = (props) => {
  const {Header, Content, Sider} = Layout;
  const {SubMenu} = Menu;

  let {pathname} = useLocation();

  const rootSubmenuKeys = ['room', 'promotion', 'basic', 'check'];
  //서브 메뉴 활성(클릭으로)
  const [openKeys, setOpenKeys] = useState(['']);
  // 현재 메뉴
  const [currentMenu, setMenu] = useState(pathname);

  console.log(currentMenu);

  const onOpenChange = (currentKeys: string[]) => {
    const latestOpenKey = currentKeys.find(key => openKeys.indexOf(key) === -1) || '';
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(currentKeys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  };

  return (
    <Layout>
      <Header>
        <span className="logo">
          <img src={logoSrc} width={'auto'} height={'100%'} alt={'logo'}/>
        </span>
        <Button type="link">로그아웃</Button>
      </Header>
      <Layout>
        <Sider style={{backgroundColor: '#fff'}}>
          <Menu
            mode={'inline'}
            theme={'dark'}
            openKeys={openKeys}
            defaultOpenKeys={openKeys}
            defaultSelectedKeys={[pathname]}
            onOpenChange={onOpenChange}
            onSelect={(param) => {
              console.log(param);
              setMenu(param.key)
            }}
            style={{width: 256}}
          >
            <Menu.Item key="/menu/basic">
              <Icon type="pie-chart"/>
              <span>{BASIC}</span>
              <Link to={'/menu/basic'}/>
            </Menu.Item>
            <Menu.Item key="/menu/check">
              <Icon type="desktop"/>
              <span>{CHECKPRICE}</span>
              <Link to={'/menu/check'}/>
            </Menu.Item>
            <SubMenu key="room"
                     title={
                       <span>
              <Icon type="setting"/>
              <span>{ROOM}</span>
            </span>
                     }>
              <Menu.Item key="/menu/room/2bed">
                <span>디럭스 트윈룸</span>
                <Link to={'/menu/room/2bed'}/>
              </Menu.Item>
              <Menu.Item key="/menu/room/3bed">
                <span> 빌라, 침실 3개</span>
                <Link to={'/menu/room/3bed'}/>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="promotion"
              title={
                <span>
              <Icon type="setting"/>
              <span>{PROMO}</span>
            </span>
              }
            >
              <Menu.Item key="/menu/promotion/1">
                <span>event1</span>
                <Link to={'/menu/promotion/1'}/>
              </Menu.Item>
              <Menu.Item key="/menu/promotion/2">
                <span>event2</span>
                <Link to={'/menu/promotion/2'}/>
              </Menu.Item>
              <Menu.Item key="/menu/promotion/3">
                <span>event3</span>
                <Link to={'/menu/promotion/3'}/>
              </Menu.Item>
              <Menu.Item key="/menu/promotion/4">
                <span>event4</span>
                <Link to={'/menu/promotion/4'}/>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <div style={{background: '#fff', padding: 70, minHeight: 280}}>
            <Typography>
              {
                CurrentMenuComponent(currentMenu)
              }
            </Typography>

          </div>
        </Content>
      </Layout>

    </Layout>
  );
};

export default MenuPage;
