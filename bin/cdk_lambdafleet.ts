#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdafleetStack } from '../lib/cdk_lambdafleet-stack';

const app = new cdk.App();
new CdkLambdafleetStack(app, 'CdkLambdafleetStack');
