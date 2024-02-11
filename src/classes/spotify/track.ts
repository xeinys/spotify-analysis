interface SpotifyTrackItem {
    added_at: string;
    added_by: any; // TODO: Complete type
    is_local: boolean;
    primary_color: any // TODO:  Complete type, is null for the moment
    track: SpotifyTrack;
    video_thumbnail: any; // TODO:  Complete type
}

interface SpotifyTrack {
    album: SpotifyAlbum;
    artists: SpotifyArtist[];
    available_markets: string[]; // TODO: Do enum
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: SpotifyTrackExternalIds;
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string|null;
    track: boolean;
    track_number: number;
    type: string; // TODO: Do enum for this?
    uri: string;
}
