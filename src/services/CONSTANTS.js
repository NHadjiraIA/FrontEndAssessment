 //base address
 export const BASE_ADDRESS = () => 'https://api.shrtco.de/v2/'
 export const GET_SHORT_URL = (url) => `${BASE_ADDRESS()}/shorten?url=${url}`