"use client"
import { Header } from "@/components/Header/Header"
import UserContext from "@/context/UserContext";
import { useVerifyLogin } from "@/helper/VerifyLogin"
import { useContext } from "react";

export default function Favoritos(){
    useVerifyLogin()

    const { userName } = useContext(UserContext) ?? {};
    
    return <>
        <Header title="Favoritos" userName={userName} />
    </>
}

// NÃO SEI PORQUE, ESSA PÁGINA NÃO ESTÁ FUNCIONANDO DIREITO NO NAVEGADOR!!