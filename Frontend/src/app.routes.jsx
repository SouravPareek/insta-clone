import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/post/pages/Feed";
import CreatePost from "./features/post/pages/CreatePost";
import Landing from "./features/shared/pages/Landing";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/feed" element={<Feed/>}/>

                <Route path="/create-post" element={<CreatePost/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;