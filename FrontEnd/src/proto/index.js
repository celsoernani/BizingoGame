const game = require("./game_pb.js");
const gameClients = require("./game_grpc_web_pb.js");
const {improbRPC,googleRPC} = require("reactRPC");
reactRPC = googleRPC  // or reactRPC = improbRPC
reactRPC.build(
  game,
  gameClients,
  "http://" + window.location.hostname + ":8080"
);
