import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
    console.log('CALLBACK', req);
    return new Response();
};
