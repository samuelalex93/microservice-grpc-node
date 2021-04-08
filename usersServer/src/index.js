require('dotenv').config();

const grpc = require('grpc');
const path = require('path');
const implementation = require('./implementation');

require('./database');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'messages.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);

server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();