import { Construct } from '@aws-cdk/core';
import {
  Code,
  Function as LambdaFunc,
  LayerVersion,
  Runtime,
} from '@aws-cdk/aws-lambda';

import { BaseStack } from './BaseStack';

export class LambdaStack extends BaseStack {
  public readonly function: LambdaFunc;

  constructor(scope: Construct, id: string, props: { codeDir: string; layerDir: string; }) {
    super(scope, id);

    const functionName = 'SesMailReciever';
    const runtime = Runtime.NODEJS_12_X;

    // Lambda Layer
    const layer = new LayerVersion(this, `${functionName}Layer`, {
      compatibleRuntimes: [runtime],
      code: Code.fromAsset(props.layerDir),
    });

    // Lambda Function
    this.function = new LambdaFunc(this, 'SesMailReciever', {
      functionName,
      runtime,
      handler: 'index.handler',
      code: Code.fromAsset(props.codeDir),
      layers: [layer],
    });
  }
}
