const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: (request, h) => handler.postAlbumHandler(request, h),
  },
  {
    method: 'GET',
    path: '/albums/{param*}',
    handler: () => ({
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    }),
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: (request, h) => handler.putAlbumByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: (request, h) => handler.deleteAlbumByIdHandler(request, h),
  },
  {
    method: 'POST',
    path: '/albums/{id}/covers',
    handler: (request, h) => handler.postAlbumCoverByIdHandler(request, h),
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },
  {
    method: 'GET',
    path: '/albums/{id}/covers',
    handler: (request, h) => handler.getAlbumCoverByIdHandler(request, h),
  },
  {
    method: 'POST',
    path: '/albums/{id}/likes',
    handler: (request, h) => handler.postLikeAlbumByIdHandler(request, h),
    options: {
      auth: 'songsapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/albums/{id}/likes',
    handler: (request, h) => handler.getLikeAlbumByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/albums/{id}/likes',
    handler: (request, h) => handler.deleteLikeAlbumByIdHandler(request, h),
    options: {
      auth: 'songsapp_jwt',
    },
  },
];

module.exports = routes;
