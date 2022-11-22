import Navbar from "./components/Navbar";
import UsersTable from "./components/UsersTable";
import MessagesTable from "./components/MessagesTable";


function App() {
    return (
        <div className="App">
            <Navbar />
            <UsersTable />
            <MessagesTable />
        </div>
    );
}

export default App;
