'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
    const [spotifyToken, setSpotifyToken] = useState({});

    useEffect(() => {
        fetch('/spotify-token').then(async (res: Response) => {
            setSpotifyToken(await res.json());
        });
    }, []);

    return (
        <main className={styles.main}>
            {JSON.stringify(spotifyToken)}
        </main>
    );
}
