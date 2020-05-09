#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSesLambdaStack } from '../lib/cdk-ses-lambda-stack';

const app = new cdk.App();
new CdkSesLambdaStack(app, 'CdkSesLambdaStack');
