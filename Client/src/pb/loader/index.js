const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { promisify } = require('util');

const protoConfig = require('../../config/proto');

module.exports = function load({
  serviceName,
  fileName,
  address,
  credentials = grpc.credentials.createInsecure(),
}) {

  console.log(serviceName,fileName,address)
  const protoDef = protoLoader.loadSync(
    path.resolve(__dirname, '..', `${fileName}.proto`),
    protoConfig
  );

  const proto = grpc.loadPackageDefinition(protoDef);
  //criando studbs
  const client = new proto[serviceName](address, credentials);

  // Promisify all client methods
  Object.entries(client.__proto__).map(([prop, value]) => {
    if (value.originalName !== undefined) {
      client[prop] = promisify(value);
    }
  });

  return client;
};