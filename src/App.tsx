import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs, DialogsType} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {MyPostsType} from "./Components/Profile/MyPosts/MyPosts";

export type StateType = {
    messagesPage: DialogsType
    profilePage: MyPostsType
}

type AppType = {
    state: StateType
    addPost: (message: string) => void
}

function App(props: AppType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/messages/*'} element={<Dialogs messagesPage={props.state.messagesPage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
