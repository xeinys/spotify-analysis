'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

    useEffect(() => {
        fetch('/spotify-token').then(async (res: Response) => {
            fetch('/spotify-get-hellow-2-0');
        });
    }, []);

    return (
        <main className={styles.main}></main>
    );
}
