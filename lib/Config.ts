import * as config from 'config';

export interface ConfigDefinition {
  aws: AwsConfig;
}

interface AwsConfig {
  region: string;
}

const CONFIG: ConfigDefinition = {
  aws: config.get<AwsConfig>('aws'),
};

export { CONFIG };
