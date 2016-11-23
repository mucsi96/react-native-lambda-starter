import SHA256 from 'crypto-js/sha256';
import poolData from '../../../.aws-resources/cognito-user-pool.json';
import error from './error';

const api = {
  cognitoIdentityProvider: {
    signUp: {
      service: 'cognito-idp',
      method: 'POST',
      target: 'AWSCognitoIdentityProviderService.SignUp',
    }
  }
};

export async function signUp (username, password, userAttributes) {
  await fetchAWS({
    region: poolData.region,
    api: api.cognitoIdentityProvider.signUp,
    body: {
      ClientId: poolData.clientId,
      Username: username,
      Password: password,
      UserAttributes: userAttributes
    }
  });
}

async function fetchAWS ({region, api, body}) {
  body = JSON.stringify(body);
  const url = `https://${api.service}.${region}.amazonaws.com/`
  const response = await fetch(url, {
    method: api.method,
    headers: {
      'X-Amz-Content-Sha256': SHA256(body),
      'X-Amz-Target': api.target,
      'Content-Type': 'application/x-amz-json-1.1'
    },
    body
  }).catch((err) => {
    return error(err.message);
  });

  const responseData = await response.json();

  if (!response.ok) {
    return error(responseData.message);
  }

  return responseData;
}
