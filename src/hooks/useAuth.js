import { useLocalStorage } from "./useLocalStorage";
import JoblyApi from "../api/api";
import jwt from "jwt-decode";

export const useAuth = () => {

     const [user, setUser] = useLocalStorage("user", null);
     const [token, setToken] = useLocalStorage("token", null);

    if (token) {
        JoblyApi.token = token.token;
    }

     const signup = async (signupData) => {
        let res = await JoblyApi.signup(signupData);
        const decodedToken = jwt(res.token)
        const username = decodedToken.username;
        setUser(username);
        setToken(res.token);
        JoblyApi.token = res.token;
     }

     const login = async (loginData) => {
         let res = await JoblyApi.login(loginData);
         const decodedToken = jwt(res.token)
         const username = decodedToken.username;
        setUser(username);
        setToken(res.token);
        JoblyApi.token = res.token;
     }

     const editProfile = async (profileData) => {
      await JoblyApi.editProfile(profileData);
      }

      const logout = async => {
        setUser(null);
        setToken(null);
      }


     return {
         user, token, signup, login, editProfile, logout
     }
 };
