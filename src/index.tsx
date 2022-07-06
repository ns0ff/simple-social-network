import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {state} from './redux/state'

// DATA:
// const dialogsData = [
//     {id: 1, name: 'Marius Hutchinson'},
//     {id: 2, name: 'Jaimee Bryan'},
//     {id: 3, name: 'Tess Coffey'},
//     {id: 4, name: 'Myles Atherton'},
//     {id: 5, name: 'Crystal Heaton'},
//     {id: 6, name: 'Veer Cotton'},
// ]
//
// const messageData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt.'},
//     {id: 3, message: 'Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.'},
//     {id: 4, message: 'Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.'},
//     {id: 5, message: 'Dolorem doloremque magni cum maiores vero facere ipsam. Quidem aut laudantium reiciendis praesentium.'},
//     {id: 6, message: 'Praesentium aut autem saepe tempore molestiae. Ut sed non eum porro in voluptate assumenda. Sit est illo consequatur.'},
// ]
//
// const postData = [
//     {id: 1, message: 'hello world', likes: 15},
//     {id: 2, message: 'Aliquid aliquam officia praesentium exercitationem omnis sapiente. A qui laudantium numquam quis doloremque. Voluptas non qui et.', likes: 5},
// ]

// END of DATA section



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
