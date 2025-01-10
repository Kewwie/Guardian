import { useEffect, useState } from "react";

export default function Guilds() {
    interface Guild {
        id: string;
        name: string;
    }

    const [guilds, setGuilds] = useState<Guild[]>([]);

    useEffect(() => {
        fetch("https://api.example.com/guilds")
            .then((response) => response.json())
            .then((data) => setGuilds(data));
    }, []);

    return (
        <div>
            <h1>Guilds</h1>
            <ul>
                {guilds.map((guild) => (
                    <li key={guild.id}>{guild.name}</li>
                ))}
            </ul>
        </div>
    );
}
