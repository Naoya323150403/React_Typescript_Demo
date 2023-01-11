import { memo, VFC } from "react";
import { Route, Routes} from "react-router-dom";
//
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";


export const Rouer:VFC = memo( () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/user_management" element={<UserManagement />}/>
            <Route path="/setting" element={<Setting />}/>
            <Route path="*" element={<Page404 />}/>

        </Routes>
    )
})