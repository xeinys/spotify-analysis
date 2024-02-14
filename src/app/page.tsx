import styles from "./page.module.css";
import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

interface HomeProps {
    searchParams: {[key: string]: string | string[]};
}

const Home: React.FC<HomeProps> = function({ searchParams }) {
    const loginState = randomBytes(16).toString('hex');

    const code = searchParams.code;
    const state = searchParams.state;

    if (state && code) {
        const data = {
            code: code,
            state: state
        };

        fetch(`http://localhost:3000/api/login-callback?${queryString.stringify(data)}`).then(async (res) => {
            setTokenInCookies(await res.text());
        });
    }

    async function setTokenInCookies(token: string) {
        'use server';

        cookies().set('spotify-token', token);
    }

    return (
        <main className={styles.main}>
            {
                state ?
                    <div>
                        {code}
                        {state}
                    </div> :
                    <a href={`/api/spotify-login?state=${loginState}`}>Login to Spotify</a>
            }
        </main>
    );
};

export default Home;
