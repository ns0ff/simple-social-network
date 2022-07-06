import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {DialogItemType} from "./Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./Components/Dialogs/Message/Message";
import {PostType} from "./Components/Profile/MyPosts/MyPosts";

type AppType = {
    dialogsData: Array<DialogItemType>
    messageData: Array<MessageType>
    postData: Array<PostType>
}

function App(props: AppType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile postData={props.postData}/>}/>
                    <Route path={'/messages/*'} element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
