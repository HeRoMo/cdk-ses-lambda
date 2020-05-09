#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { LambdaStack } from '../lib/LambdaStack';
// import { SesStack } from '../lib/SesStack';

import { CONFIG } from '../lib/Config';
import { prepareLayerModules, transpile } from '../lib/prepareForLambda';

const codeDir = transpile();
const layerDir = prepareLayerModules();

console.info(JSON.stringify(CONFIG, null, 2)); // eslint-disable-line no-console

const app = new App();
new LambdaStack(app, 'LambdaStack', { codeDir, layerDir });
// new SesStack(app, 'SesStack');
