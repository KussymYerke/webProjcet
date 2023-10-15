import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile/:userId?'} element = {<ProfileContainer />}></Route>
                        <Route path={'/dialogs/*'} element = {<DialogsContainer />}></Route>
                        <Route path={'/users'} element = {<UsersContainer />}></Route>
                        <Route path={'/login'} element = {<Login />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



