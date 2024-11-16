import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home'
import Filme from "../src/pages/Filme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";

export default function RoutesApp(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/> } />
                <Route path="/meusfavoritos" element={ <Favoritos/>} />

                <Route path="*" element={ <Erro/> } />
            </Routes>
            <Footer/>
        
        </BrowserRouter>

    )
}