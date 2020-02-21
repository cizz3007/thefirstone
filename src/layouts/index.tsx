import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Icon, Button,Typography} from 'antd';
import {useLocation} from "react-router-dom";
import {Link} from "umi";

const logoSrc = 'https://qeuxmtqauiit1072966.cdn.ntruss.com/pc-web/main/logo_icon/001_title_logow_tripbtoz.png';
const {Header, Content, Sider} = Layout;
const {SubMenu} = Menu;

const BasicLayout: React.FC = (props) => {
  const location = useLocation().pathname;
  const path = [
    {
      pathname:'/basic',
      title:'기본 정보'
    },
    {
      pathname:'/check',
      title:'전체 판매가 확인'
    },
    {
      pathname:'/room/2bed',
      title:'객실설정 - 디럭스 트윈룸'
    },
    {
      pathname:'/room/3bed',
      title:'객실 설정 - 빌라, 침실 3개'
    },
    {
      pathname:'/promotion/1',
      title:'프로모션 설정 - event 1'
    },
    {
      pathname:'/promotion/2',
      title:'프로모션 설정 - event 2'
    },
    {
      pathname:'/promotion/3',
      title:'프로모션 설정 - event 3'
    },
    {
      pathname:'/promotion/4',
      title:'프로모션 설정 - event 4'
    },

  ];
  const rootSubmenuKeys = ['객실 설정', '프로모션 설정','기본 정보','전체 판매가 확인'];
  //서브 메뉴 활성
  const [openKeys, setOpenKeys] = useState(['']);

  const [currentMenu, setMenu] = useState('기본 정보');

  const onOpenChange = (currentKeys: string[]) => {
    const latestOpenKey = currentKeys.find(key => openKeys.indexOf(key) === -1) || '';

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(currentKeys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  };

  const pathHandler = ()=>{
    return path.map((data, key)=>{
      const {
        pathname,
        title
      } = data;
      console.log(pathname, title);
      if(pathname === location){
        return title
      } else{
        return undefined
      }
    });
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
        <Sider style={{backgroundColor:'#fff'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['기본 정보']}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onSelect={(keyd)=>{
              setMenu(keyd.key)
            }}
            style={{width: 256}}
          >
            <Menu.Item key="기본 정보">
              <Icon type="pie-chart"/>
              <span>기본z 정보</span>
              <Link to={'/basic'}/>
            </Menu.Item>
            <Menu.Item key="전체 판매가 확인">
              <Icon type="desktop"/>
              <span>전체 판매가 확인</span>
              <Link to={'/menu/check'}/>
            </Menu.Item>
            <SubMenu key="객실 설정"
                     title={
              <span>
              <Icon type="setting"/>
              <span>객실 설정</span>
            </span>
            }>
              <Menu.Item key="디럭스 트윈룸">
                <span>디럭스 트윈룸</span>
                <Link to={'/room/2bed'}/>
              </Menu.Item>
              <Menu.Item key="빌라, 침실 3개">
               <span> 빌라, 침실 3개</span>
                <Link to={'/room/3bed'}/>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="프로모션 설정"
              title={
                <span>
              <Icon type="setting"/>
              <span>프로모션 설정</span>
            </span>
              }
            >
              <Menu.Item key="event1">
                <span>event1</span>
                <Link to={'/promotion/1'}/>
              </Menu.Item>
              <Menu.Item key="event2">
                <span>event2</span>
                <Link to={'/promotion/2'}/>
              </Menu.Item>
              <Menu.Item key="event3">
                <span>event3</span>
                <Link to={'/promotion/3'}/>
              </Menu.Item>
              <Menu.Item key="event4">
                <span>event4</span>
                <Link to={'/promotion/4'}/>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <div style={{background: '#fff', padding: 70, minHeight: 280}}>
            {
              currentMenu
            }
            <Typography>
              {
                pathHandler()
              }
            </Typography>

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
