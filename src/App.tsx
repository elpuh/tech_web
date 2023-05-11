import React from 'react';
import {Layout} from 'antd';
import MainHeader from "./components/MainHeader";
import ContentPage from "./components/ContentPage";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react";

const App: React.FC = observer(() => {
    return (
        <BrowserRouter>
            <Layout>
                <MainHeader/>
                <ContentPage/>
            </Layout>
        </BrowserRouter>
    );
});

export default App;