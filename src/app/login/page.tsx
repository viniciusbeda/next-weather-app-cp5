"use client";
import UserContext from "@/context/UserContext";
import { jwtDecode } from "jwt-decode";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";

export default function Login() {
    const { setUserName } = useContext(UserContext);
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSendLogin = async (params: object) => {
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(params),
            });

            const data = await response.json();

            if (data) {
                sessionStorage.setItem("userToken", JSON.stringify(data));
                const userData = jwtDecode(data.token);
                setUserName(userData.name);
                router.push("/perfil");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            console.log("finnaly");
        }
    };

    const handleClick = () => {
        const params = {
            login: login,
            password: password,
        };

        handleSendLogin(params);
    };

    return (
        <>
            <h1>Login</h1>
            <form>
                <Input
                    type="text"
                    id="login"
                    name="login"
                    label="Login"
                    onChange={handleLogin}
                    placeholder="digite seu email"
                />

                <Input
                    label="Senha"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handlePassword}
                />
                <Button type="button" onClick={handleClick}>
                    Login
                </Button>
            </form>
        </>
    );
}