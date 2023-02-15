import React from 'react';
import {Layout} from 'antd';
import MainHeader from "./components/MainHeader";
import ContentPage from "./components/ContentPage";

const App: React.FC = () => {
    return (
        <Layout>
            <MainHeader/>
            <ContentPage/>
        </Layout>
    );
};

export default App;