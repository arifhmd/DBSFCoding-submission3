const { existsSync, mkdirSync } = require('fs');
const fs = require('fs');
const { config } = require('../../commons/config');

class LocalStorageService {
  constructor() {
    // if public path not exist, create it.
    if (!existsSync(config.app.imagesPublicPath)) {
      mkdirSync(config.app.imagesPublicPath, { recursive: true });
    }
  }

  saveAlbumArt(albumId, albumArt, fileExtension) {
    return new Promise((resolve, reject) => {
      const filename = `${albumId}.${fileExtension}`;
      const filePath = `${config.app.imagesPublicPath}/${filename}`;
      const writable = fs.createWriteStream(filePath);
      albumArt.pipe(writable);
      albumArt.on('end', () => resolve(filename));
      writable.on('finish', () => {
        resolve(filename);
      });

      writable.on('error', (err) => {
        reject(err);
      });
    });
  }
}

module.exports = LocalStorageService;
