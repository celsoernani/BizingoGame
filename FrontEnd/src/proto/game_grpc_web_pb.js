/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./game_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.GameServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.GameServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddPlayer,
 *   !proto.PlayerResponse>}
 */
const methodDescriptor_GameService_CreatePlayer = new grpc.web.MethodDescriptor(
  '/GameService/CreatePlayer',
  grpc.web.MethodType.UNARY,
  proto.AddPlayer,
  proto.PlayerResponse,
  /**
   * @param {!proto.AddPlayer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PlayerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddPlayer,
 *   !proto.PlayerResponse>}
 */
const methodInfo_GameService_CreatePlayer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PlayerResponse,
  /**
   * @param {!proto.AddPlayer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PlayerResponse.deserializeBinary
);


/**
 * @param {!proto.AddPlayer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.PlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.createPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/CreatePlayer',
      request,
      metadata || {},
      methodDescriptor_GameService_CreatePlayer,
      callback);
};


/**
 * @param {!proto.AddPlayer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PlayerResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.createPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/CreatePlayer',
      request,
      metadata || {},
      methodDescriptor_GameService_CreatePlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListPlayersequest,
 *   !proto.ListPlayersResponse>}
 */
const methodDescriptor_GameService_FindPlayers = new grpc.web.MethodDescriptor(
  '/GameService/FindPlayers',
  grpc.web.MethodType.UNARY,
  proto.ListPlayersequest,
  proto.ListPlayersResponse,
  /**
   * @param {!proto.ListPlayersequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListPlayersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ListPlayersequest,
 *   !proto.ListPlayersResponse>}
 */
const methodInfo_GameService_FindPlayers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListPlayersResponse,
  /**
   * @param {!proto.ListPlayersequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListPlayersResponse.deserializeBinary
);


/**
 * @param {!proto.ListPlayersequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListPlayersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListPlayersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.findPlayers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/FindPlayers',
      request,
      metadata || {},
      methodDescriptor_GameService_FindPlayers,
      callback);
};


/**
 * @param {!proto.ListPlayersequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListPlayersResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.findPlayers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/FindPlayers',
      request,
      metadata || {},
      methodDescriptor_GameService_FindPlayers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddMessage,
 *   !proto.MessageResponse>}
 */
const methodDescriptor_GameService_CreateMessage = new grpc.web.MethodDescriptor(
  '/GameService/CreateMessage',
  grpc.web.MethodType.UNARY,
  proto.AddMessage,
  proto.MessageResponse,
  /**
   * @param {!proto.AddMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddMessage,
 *   !proto.MessageResponse>}
 */
const methodInfo_GameService_CreateMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.MessageResponse,
  /**
   * @param {!proto.AddMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.AddMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.createMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/CreateMessage',
      request,
      metadata || {},
      methodDescriptor_GameService_CreateMessage,
      callback);
};


/**
 * @param {!proto.AddMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MessageResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.createMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/CreateMessage',
      request,
      metadata || {},
      methodDescriptor_GameService_CreateMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListMessagesequest,
 *   !proto.ListMessagesResponse>}
 */
const methodDescriptor_GameService_FindMessages = new grpc.web.MethodDescriptor(
  '/GameService/FindMessages',
  grpc.web.MethodType.UNARY,
  proto.ListMessagesequest,
  proto.ListMessagesResponse,
  /**
   * @param {!proto.ListMessagesequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListMessagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ListMessagesequest,
 *   !proto.ListMessagesResponse>}
 */
const methodInfo_GameService_FindMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListMessagesResponse,
  /**
   * @param {!proto.ListMessagesequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.ListMessagesequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.findMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/FindMessages',
      request,
      metadata || {},
      methodDescriptor_GameService_FindMessages,
      callback);
};


/**
 * @param {!proto.ListMessagesequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListMessagesResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.findMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/FindMessages',
      request,
      metadata || {},
      methodDescriptor_GameService_FindMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateGame,
 *   !proto.GameResponse>}
 */
const methodDescriptor_GameService_UpdateGameState = new grpc.web.MethodDescriptor(
  '/GameService/UpdateGameState',
  grpc.web.MethodType.UNARY,
  proto.UpdateGame,
  proto.GameResponse,
  /**
   * @param {!proto.UpdateGame} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateGame,
 *   !proto.GameResponse>}
 */
const methodInfo_GameService_UpdateGameState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GameResponse,
  /**
   * @param {!proto.UpdateGame} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GameResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateGame} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.updateGameState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/UpdateGameState',
      request,
      metadata || {},
      methodDescriptor_GameService_UpdateGameState,
      callback);
};


/**
 * @param {!proto.UpdateGame} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GameResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.updateGameState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/UpdateGameState',
      request,
      metadata || {},
      methodDescriptor_GameService_UpdateGameState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateChangeListPlayers,
 *   !proto.ListPlayersResponse>}
 */
const methodDescriptor_GameService_UpdatePlayersServer = new grpc.web.MethodDescriptor(
  '/GameService/UpdatePlayersServer',
  grpc.web.MethodType.UNARY,
  proto.UpdateChangeListPlayers,
  proto.ListPlayersResponse,
  /**
   * @param {!proto.UpdateChangeListPlayers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListPlayersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateChangeListPlayers,
 *   !proto.ListPlayersResponse>}
 */
const methodInfo_GameService_UpdatePlayersServer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListPlayersResponse,
  /**
   * @param {!proto.UpdateChangeListPlayers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListPlayersResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateChangeListPlayers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListPlayersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListPlayersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GameServiceClient.prototype.updatePlayersServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GameService/UpdatePlayersServer',
      request,
      metadata || {},
      methodDescriptor_GameService_UpdatePlayersServer,
      callback);
};


/**
 * @param {!proto.UpdateChangeListPlayers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListPlayersResponse>}
 *     A native promise that resolves to the response
 */
proto.GameServicePromiseClient.prototype.updatePlayersServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GameService/UpdatePlayersServer',
      request,
      metadata || {},
      methodDescriptor_GameService_UpdatePlayersServer);
};


module.exports = proto;

