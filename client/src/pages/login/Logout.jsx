import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Logout = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });

        navigate("/login");
    };

    return (
        <button onClick={handleLogout} className="navLink">
            Logout
        </button>
    );
};

export default Logout;