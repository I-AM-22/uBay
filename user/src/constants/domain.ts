const DEVELOPMENT_BASE_URL = `${window.location.origin.split(":").slice(0, 2).join(":")}:3000`;
const DEVELOPMENT_API_BASE_URL = `${DEVELOPMENT_BASE_URL}/api/v1`;

export const SERVER_BASE_URL = DEVELOPMENT_BASE_URL;
export const API_BASE_URL = DEVELOPMENT_API_BASE_URL;
