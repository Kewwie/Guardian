import { useEffect } from "react";

export default function Discord() {
    useEffect(() => {
        window.location.href = "https://discord.gg/";
    }, []);

    return <div>Redirecting to Discord...</div>;
}
