'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
    useEffect(() => {
        fetch('/spotify-token');
    }, []);

    return (
        <main className={styles.main}></main>
    );
}
