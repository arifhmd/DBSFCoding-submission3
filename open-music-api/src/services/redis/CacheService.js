const redis = require('redis');
const { config } = require('../../commons/config');

class CacheService {
  constructor() {
    this._client = redis.createClient({
      host: config.redis.url,
    });

    this._client.on('error', (error) => {
      console.error(error);
    });

    this._client.connect();
  }

  async set(key, value, expirationInSecond = 3600) {
    await this._client.set(key, value, {
      EX: expirationInSecond,
    });
  }

  async get(key) {
    const result = await this._client.get(key);

    if (!result) {
      throw new Error('Cache tidak ditemukan');
    }

    return result;
  }

  async delete(key) {
    return this._client.del(key);
  }
}

module.exports = CacheService;