import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/auth`,
    withCredentials: true,
});

export async function register(username, email, password) {
    try {
        const response = await api.post("/register", {
            username,
            email,
            password,
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function login(username, password) {
    try {
        const response = await api.post("/login", {
            username,
            password,
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getMe(){
    try{
        const response = await api.get("/get-me")
        return response.data
    }catch(err){
        console.log((err));
    }
}