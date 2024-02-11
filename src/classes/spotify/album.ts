// TODO: Complete enum
enum SpotifyAlbumType {
    ALBUM = 'album'
}

// TODO: Complete type
interface SpotifyAlbum {
    album_type: SpotifyAlbumType;
    artists: SpotifyArtist[];
    available_markets: string[];  // TODO: Do enum
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string; // TODO: Enum ?
    total_tracks: number;
    type: string; // TODO: enum ?
    uri: string;
}
