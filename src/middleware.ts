import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/spotify-token')) {
        const state = 'qjdoiqzjdoiqjsodijqsd';

        // Send to an auth page making the request via useEffect
        return NextResponse.redirect('https://accounts.spotify.com/authorize?' + queryString.stringify({
            response_type: 'code',
            client_id: process.env['SPOTIFY_API_CLIENT_ID'],
            redirect_uri: 'http://localhost:3000/login-callback',
            state: state
        }));
    }
}
