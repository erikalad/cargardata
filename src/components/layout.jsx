import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined ,DesktopOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Descargar from  './descargar'
import logo from './logo.png'
import './layout.css'

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
/*   getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]), */
  getItem('Datos', '9', <FileOutlined />),
];
const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
 {/*    <div style={{
      width:150,
      height: 28,
      margin: 16,
      background: 'rgb(255, 255, 255)',
    }} ><img style={{
      width:150,
      height: 28,
      margin: 0,
      background: 'rgb(255, 255, 255)',
    }} 
  src={logo} 
    
  /></div> */}
    <Layout
      style={{
        minHeight: '100vh',
      }}
      className='layout'
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
  
        <Content    style={{
            margin: '0 16px',
          }}>
        <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Cargar Datos</Breadcrumb.Item>
            
          </Breadcrumb>
          <div>
          <Descargar/>
          </div>
        </Content>
        
      </Layout>
    </Layout>
    </div>
  );
};
export default Layouts;