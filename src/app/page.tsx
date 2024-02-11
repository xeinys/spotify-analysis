'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch('/spotify-token').then((res: Response) => {
            fetch('/spotify-get-hellow-2-0').then(async (res: Response) => {
                const playlist = await (res.json());
                console.log(playlist);
                if (playlist) setTracks(playlist.tracks.items);
            });
        });
    }, []);

    return (
        <main className={styles.main}>
            {tracks.map((track: SpotifyTrackItem, index: number) => {
                const trackInfo = track.track;
                return (<p key={`track-${index}`}>{`${trackInfo.artists[0].name} - ${trackInfo.name} (${trackInfo.album.name} - ${trackInfo.album.release_date.split('-')[0]})`}</p>);
            })}
        </main>
    );
}
