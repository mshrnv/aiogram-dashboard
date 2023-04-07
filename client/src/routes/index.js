import IndexPage from "../pages/IndexPage";
import UsersPage from "../pages/UsersPage";
import MessagesPage from "../pages/MessagesPage";

export const routes = [
    {name: 'Главная', path: '/', component: <IndexPage/>, exact: true},
    {name: 'Пользователи', path: '/users', component: <UsersPage/>, exact: true},
    {name: 'Сообщения', path: '/messages', component: <MessagesPage/>, exact: true},
]