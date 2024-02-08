import {ICacheService} from "@interfaces/cache_service";
import {ILoggingService} from "@interfaces/logging_service";
import {ITrackerService} from "@interfaces/tracker_service";
import {IocTypes} from "@models/ioc_types";
import {configurationService} from '@services/configuration_service';
import axios, {AxiosResponse} from 'axios';
import {inject, injectable} from "inversify";

@injectable()
export class TrackerService implements ITrackerService {
    private cacheService: ICacheService;
    private logger: ILoggingService;

    constructor(@inject(IocTypes.ICacheService) cacheService: ICacheService,
                @inject(IocTypes.ILoggingService) logger: ILoggingService) {
        this.cacheService = cacheService;
        this.logger = logger;
    }

    public getTrackers = async (): Promise<string[]> => this.cacheService.cacheTrackers(this.downloadTrackers);

    private downloadTrackers = async (): Promise<string[]> => {
        const response: AxiosResponse<string> = await axios.get(configurationService.trackerConfig.TRACKERS_URL);
        const trackersListText: string = response.data;
        // Trackers are separated by a newline character
        let urlTrackers = trackersListText.split("\n");
        // remove blank lines
        urlTrackers = urlTrackers.filter(line => line.trim() !== '');

        if (!configurationService.trackerConfig.UDP_ENABLED) {
            // remove any udp trackers
            urlTrackers = urlTrackers.filter(line => !line.startsWith('udp://'));

        }

        this.logger.info(`Trackers updated at ${Date.now()}: ${urlTrackers.length} trackers`);

        return urlTrackers;
    };
}
