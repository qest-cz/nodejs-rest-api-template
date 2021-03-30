import appConfig from './app-config';
import systemConfig from './system-config';

const config = {
    ...systemConfig,
    ...appConfig,
};

export default config;
