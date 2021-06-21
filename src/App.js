import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from  "./components/Main/Main"
function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
