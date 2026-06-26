import { Routes, Route } from "react-router-dom";
import About from "../About";
import PotionStore from "../PotionStore";
import PotionAdmin from "../PotionAdmin";

export default function PotionRoutes() {
    return (<Routes>
        <Route element={<About/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<PotionStore/>} path="/potions"/>
        <Route element={<PotionAdmin/>} path="/admin"/>
    </Routes>);
}

