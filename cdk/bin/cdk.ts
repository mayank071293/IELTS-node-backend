#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EksStack } from '../lib/eks-stack';
import {config} from 'dotenv';
config();


const app = new cdk.App();
new EksStack(app, 'EksStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
