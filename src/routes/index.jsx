import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Containers/Login";
import { Register } from "../Containers/Register";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
    {
		path: "/cadastro",
		element: <Register />,
	},
]);
