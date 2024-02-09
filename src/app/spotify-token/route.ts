export const dynamic = 'force-dynamic';
export async function GET() {
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'body': `grant_type=client_credentials&client_id=${process.env['SPOTIFY_API_CLIENT_ID']}&client_secret=${process.env['SPOTIFY_API_CLIENT_SECRET']}`,
        'method': 'POST'
    };
    const res = await fetch('https://accounts.spotify.com/api/token', requestOptions);
    const data = JSON.stringify(await res.json());

    const responseOptions = {
        status: 200,
        headers: {
            "Set-Cookie": `token=${data}`
        }
    };
    return new Response(JSON.stringify(data), responseOptions);
};
