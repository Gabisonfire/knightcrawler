import {BooleanHelpers} from "@helpers/boolean_helpers";

export const trackerConfig = {
    TRACKERS_URL: process.env.TRACKERS_URL || 'https://ngosang.github.io/trackerslist/trackers_all.txt',
    GITHUB_PAT: process.env.GITHUB_PAT,
    UDP_ENABLED: BooleanHelpers.parseBool(process.env.UDP_TRACKERS_ENABLED, false)
};
