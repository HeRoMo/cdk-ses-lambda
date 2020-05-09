import { ConfigDefinition } from '../lib/Config';

const config: ConfigDefinition = {
  appName: 'SesLambda',
  aws: {
    account: process.env.AWS_ACCOUNT || '',
    region: 'us-east-1',
  },
};

export default config;
