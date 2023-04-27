"use strict";

const enablebanking = require("enablebanking");
const readline = require("readline");

const REDIRECT_URL = "https://enablebanking.com/auth_redirect"; // PUT YOUR REDIRECT URI HERE
const CONNECTOR_NAME = "Nordea";
const CONNECTOR_COUNTRY = "FI";
/**
 * Bank connector specific settings
 */

const CONNECTOR_SETTINGS = {
  sandbox: true,
  consentId: null,
  accessToken: null,
  redirectUri: REDIRECT_URL,
  country: CONNECTOR_COUNTRY,
  clientId: "client_id", // API Client ID
  clientSecret: "client_secret", // API Client Secret
  signKeyPath: "/path/to/private.key", // Path or URI to QSeal private key in PEM format
  language: null,
};

const readRedirectUrl = async (url, redirectUrl) => {
  console.log(`Please, open this page in browser: ${url}`);
  console.log(
    "Log in, authenticate and copy/paste back the URL where you got redirected."
  );
  return input(`URL (starts with ${redirectUrl}): `);
};

const input = async (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
};
