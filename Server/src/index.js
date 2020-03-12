
const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const implementation = require('./implementation');
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'proto', 'chat.proto'),
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });
const proto = grpc.loadPackageDefinition(packageDefinition);
 
const  server =  new grpc.Server();
server.addService(proto.ChatService.service, implementation);
server.bind('0.0.0.0:3333', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:3333')
server.start();

