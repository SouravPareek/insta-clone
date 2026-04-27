import { RouterProvider } from "react-router";
import AppRoutes from "./app.routes";
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context";
import { PostContextProvider } from "./features/post/post.context";

const App = () => {
    return (
        <AuthProvider>
            <PostContextProvider>
                <AppRoutes />
            </PostContextProvider>
        </AuthProvider>
    )
};

export default App;
