import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Guild() {
    const router = useRouter();
    const { guildID } = router.query;
    const [guild, setGuild] = useState(null);

    useEffect(() => {
        if (guildID) {
            fetch(`https://api.example.com/guilds/${guildID}`)
                .then((response) => response.json())
                .then((data) => setGuild(data));
        }
    }, [guildID]);

    if (!guild) return <div>Loading...</div>;

    return (
        <div>
            <h1>{guild.name}</h1>
            <p>{guild.description}</p>
        </div>
    );
}
