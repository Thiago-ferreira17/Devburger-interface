import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Containers/Login";
import { Register } from "../Containers/Register";
import { Home } from "../Containers/Home";

export const router = createBrowserRouter([
	
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/login",
		element: <Login />,
	},
    {
		path: "/cadastro",
		element: <Register />,
	},
]);
