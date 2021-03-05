import * as cdk from '@aws-cdk/core';
import * as path from 'path'

import * as Lambda from "@aws-cdk/aws-lambda"

import { LambdaFleet } from './LambdaFleet'

export class CdkLambdafleetStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Configure path to Dockerfile
    const dockerfile = path.join(__dirname, "../src/lambda-node-example");

    // Create AWS Lambda function and push image to ECR
    new Lambda.DockerImageFunction(this, "function", {
      code: Lambda.DockerImageCode.fromImageAsset(dockerfile),
    });
  }
}
