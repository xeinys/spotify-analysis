interface SpotifyPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: SpotifyExternalUrls;
    followers: SpotifyPlaylistFollowers;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyUser;
    primary_color: string|null;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
}

interface SpotifyPlaylistFollowers {
    href: string|null;
    total: number;
}

interface SpotifyPlaylistTracks {
    href: string;
    items: SpotifyTrackItem[];
    limit: number;
    next: string|null;
    offset: number;
    previous: string|null;
    total: number;
}
