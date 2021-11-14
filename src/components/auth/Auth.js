import { style } from "@mui/system";
import {useContext} from "react";
import {UserContext} from "../../controllers/user-context";
import { SignIn } from "../sign/index";
import './Auth.scss';

export const Auth = ({ children }) => {
    const {isLoggedIn} = useContext(UserContext);
    return isLoggedIn
        ? children
        : <>
            <h5 className={"auth__message"}>You are not authorized to view this content!</h5>
            < SignIn/>
        </>
} 