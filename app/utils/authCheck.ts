import { checkHygraphAuth } from './hygraph.server';

async function verifyAuth() {
    const isAuthenticated = await checkHygraphAuth();
    if (isAuthenticated) {
        console.log("Authentication successful, you can now make queries to Hygraph.");
    } else {
        console.log("Authentication failed. Please check your AUTH_TOKEN and API_ENDPOINT.");
    }
}

verifyAuth();