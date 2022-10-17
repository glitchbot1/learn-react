import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
