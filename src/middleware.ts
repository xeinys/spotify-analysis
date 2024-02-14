import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/spotify-login')) {
        const state = request.nextUrl.searchParams.get('state');

        // Send to an auth page making the request via useEffect
        return NextResponse.redirect('https://accounts.spotify.com/authorize?' + queryString.stringify({
            response_type: 'code',
            client_id: process.env['SPOTIFY_API_CLIENT_ID'],
            redirect_uri: 'http://localhost:3000/',
            state: state,
            show_dialog: true
        }));
    }
}
