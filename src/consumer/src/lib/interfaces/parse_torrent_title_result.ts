import {IFileAttributes} from "@repository/interfaces/file_attributes";

export interface IParseTorrentTitleResult {
    title?: string;
    date?: string;
    year?: number | string;
    resolution?: string;
    extended?: boolean;
    unrated?: boolean;
    proper?: boolean;
    repack?: boolean;
    convert?: boolean;
    hardcoded?: boolean;
    retail?: boolean;
    remastered?: boolean;
    complete?: boolean;
    region?: string;
    container?: string;
    extension?: string;
    source?: string;
    codec?: string;
    bitDepth?: string;
    hdr?: Array<string>;
    audio?: string;
    group?: string;
    volumes?: Array<number>;
    seasons?: Array<number>;
    season?: number;
    episodes?: Array<number>;
    episode?: number;
    languages?: string;
    dubbed?: boolean;
    videoFile?: IFileAttributes;
    folderName?: string;
    fileName?: string;
}
