import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
    const token = request.cookies.get('token');
    const parsedToken = token ? JSON.parse(token.value) : '';

    const requestOptions = {
        'headers': {
            'Authorization': `Bearer ${parsedToken.access_token}`
        },
        'method': 'GET'
    };
    const res = await fetch('https://api.spotify.com/v1/playlists/4zpg5G5hBuwbIVysbVxyLe', requestOptions);
    const data = await res.json();

    console.log(data);
    // GET TRACKS ENDPOINTS TO GET FULL LIST

    return Response.json(data);
};
