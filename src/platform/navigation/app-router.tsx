import { Route, Routes } from "react-router-dom";
import Login from "../auth/pages/login";
import { storiesRoutes } from "@/_ui/stories";


export default function AppRouter() {

    return <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        {storiesRoutes()}
    </Routes>

}