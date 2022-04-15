import React, { Component} from 'react'
import {BrowserRouter as Router, Route , Redirect, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import routes from '../../routes/routes.js';
import {Link} from 'react-router-dom';
// import NavBar from './NavBar';
// import Sidebar from './SideBar';
// import Footer from './Footer';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import'../../assets/admin/css/MasterLayout.css';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1'];

export default class MasterLayout extends Component {

  render() {    
    return (
        <Layout>
            <Sider>
                <div className="logo">RE:SCHOOL Ecology</div>
               
                <Menu 
                    theme='dark' mode='inline'
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<i className="fa-solid fa-chart-column"/>}>
                        <Link>Dashboard</Link>
                    </Menu.Item>  
                    <Menu.Item key="2" icon={<i className="fa-solid fa-map-location-dot"/>}>
                        <Link to="/admin/map">Map</Link>
                    </Menu.Item>
                    <Menu.Item key="3" to="/admin/poubelles" icon={<i className="fas fa-trash fa-fw"></i>}> 
                        Poubelles
                    </Menu.Item>
                    <Menu.Item key="4" icon={<i className="fas fa-truck-moving"/>}>
                        Camions
                    </Menu.Item>
                    <Menu.Item key="5" icon={<i className="fas fa-user"/>}>
                        Ouvriers
                    </Menu.Item>
                    <SubMenu key="sub1" title="Clients" icon={<i className="fas fa-user-tie"/>}>
                        <Menu.Item key="6" >
                            Responsables d'établissements
                        </Menu.Item>
                        <Menu.Item key="7" >
                            Acheteurs de déchets
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background">
                    header
                </Header>
                <Content className="site-layout-background"
                    style={{
                        margin: '24px 10px',
                        padding: 25,
                        minHeight: 280,
                      }}>

                    <h2>Dashboard</h2>
                </Content>
                <Footer/>
            </Layout>
        </Layout>
    )
  }
}
