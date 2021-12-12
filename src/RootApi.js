import axios from 'axios';
import axiosRetry from 'axios-retry';
import { apiHost } from './constants';

const RootApi = axios.create({
  baseURL: apiHost,
});

axiosRetry(RootApi, { retries: 3 });

export { RootApi as default };
