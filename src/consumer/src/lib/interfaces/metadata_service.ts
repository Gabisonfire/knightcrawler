import {IMetaDataQuery} from "@interfaces/metadata_query";
import {IMetadataResponse} from "@interfaces/metadata_response";

export interface IMetadataService {
    getKitsuId(info: IMetaDataQuery): Promise<number | Error>;

    getImdbId(info: IMetaDataQuery): Promise<string | undefined>;

    getMetadata(query: IMetaDataQuery): Promise<IMetadataResponse | Error>;

    isEpisodeImdbId(imdbId: string | undefined): Promise<boolean>;

    escapeTitle(title: string): string;
}
