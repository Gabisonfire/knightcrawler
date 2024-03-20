export const torrentConfig = {
    MAX_CONNECTIONS_PER_TORRENT: parseInt(process.env.MAX_CONNECTIONS_PER_TORRENT || "20", 10),
    TIMEOUT: parseInt(process.env.TORRENT_TIMEOUT || "30000", 10)
};
