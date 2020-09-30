
import Repository from './src/Repository'

const resource = '/shops'

export default {
  get(payload) {
    return Repository.get(`${resource}`);
  },

  getShop(payload) {
    return Repository.get(`${resource}/single`, payload);
  },

  createShop(payload) {
    return Repository.post(`${resource}/store`, payload);
  }
}
