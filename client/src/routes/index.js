import IndexPage from "../pages/IndexPage";
import UsersPage from "../pages/UsersPage";
import MessagesPage from "../pages/MessagesPage";
import {Navigate} from "react-router-dom";

export const routes = [
    {path: '/', component: <IndexPage/>, exact: true},
    {path: '/users', component: <UsersPage/>, exact: true},
    {path: '/messages', component: <MessagesPage/>, exact: true},
    {path: "*", component: <Navigate to="/" replace />},
]