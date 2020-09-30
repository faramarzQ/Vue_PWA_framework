
import axios from 'axios';

const baseDomain = 'https://snaagrin.ir'
const baseURL = `${baseDomain}/api/v1/`

export default axios.create({
  baseURL,
});
