// eslint-disable-next-line import/no-unresolved
import 'source-map-support/register';

import { Callback, Context } from 'aws-lambda';

export async function handler(
  event: any,
  context: Context,
  callback: Callback,
): Promise<void> {
  console.log(JSON.stringify({ event }, null, 2)); // eslint-disable-line no-console
  callback(null, {
    statusCode: 200,
    body: 'Success!!',
    headers: {
      'Content-Type': 'image/svg+xml',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
