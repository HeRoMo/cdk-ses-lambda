import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { SesStack } from '../lib/SesStack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new SesStack(app, 'MyTestSesStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    Resources: {},
  }, MatchStyle.EXACT));
});
