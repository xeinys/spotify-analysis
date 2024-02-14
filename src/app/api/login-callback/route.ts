import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');
    const state = req.nextUrl.searchParams.get('state');

    let tokenInfo = '';

    if (state && code) {
        const data = {
            code: code,
            redirect_uri: 'http://localhost:3000/',
            grant_type: 'authorization_code'
        };

        const headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${new (Buffer as any).from(`${process.env.SPOTIFY_API_CLIENT_ID}:${process.env.SPOTIFY_API_CLIENT_SECRET}`).toString('base64')}`
        };

        const response = await fetch('https://accounts.spotify.com/api/token', {
            headers: headers,
            body: queryString.stringify(data),
            method: 'POST'
        });

        tokenInfo = await response.text();
        console.log(tokenInfo);
        cookies().set('spotify-token', tokenInfo);
    }

    return new NextResponse(tokenInfo, {
        status: tokenInfo.includes('access-token') ? 200 : 500
    });
}
