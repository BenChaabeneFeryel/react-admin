import React from 'react';
import {BrowserRouter as Router, Route , Redirect, Switch} from 'react-router-dom';
import routes from '../../routes/routes.js';
import NavBar from './NavBar';
import Sidebar from './SideBar';
import Footer from './Footer';


const Masterlayout = () => {
    
    return (
        <div className='sb-nav-fixed'>
            <NavBar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                    <Switch>
                        {routes.map((route, idx)=> {
                            return(
                                route.component && (
                                    <Route 
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props)=> (<route.component {...props} /> )}
                                    />
                                )
                            )
                        })
                        }
                        <Redirect from="admin" to="/admin/dashboard"/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Masterlayout;
