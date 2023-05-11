import React from 'react';
import Sidebar from "./Sidebar";
import {Breadcrumb, Layout, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const {Content} = Layout;
const ContentPage = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Layout>
    );
};

export default ContentPage;