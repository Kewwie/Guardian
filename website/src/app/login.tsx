import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        window.location.href = "http://localhost:5000/auth";
    }, []);

    return <div>Redirecting to login...</div>;
}
