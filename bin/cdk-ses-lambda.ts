#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { SesStack } from '../lib/SesStack';

import { CONFIG } from '../lib/Config';

console.info(JSON.stringify(CONFIG, null, 2)); // eslint-disable-line no-console

const app = new App();
new SesStack(app, 'SesStack');
