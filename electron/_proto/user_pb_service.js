// package: user
// file: user.proto

var user_pb = require("./user_pb");
var grpc = require("grpc-web-client").grpc;

var UserService = (function () {
  function UserService() {}
  UserService.serviceName = "user.UserService";
  return UserService;
}());

UserService.GetUser = {
  methodName: "GetUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_pb.User,
  responseType: user_pb.User
};

UserService.SaveUser = {
  methodName: "SaveUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_pb.User,
  responseType: user_pb.User
};

UserService.UserStatus = {
  methodName: "UserStatus",
  service: UserService,
  requestStream: true,
  responseStream: false,
  requestType: user_pb.Status,
  responseType: user_pb.User
};

UserService.ListUserList = {
  methodName: "ListUserList",
  service: UserService,
  requestStream: false,
  responseStream: true,
  requestType: user_pb.Empty,
  responseType: user_pb.User
};

exports.UserService = UserService;

function UserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(UserService.GetUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

UserServiceClient.prototype.saveUser = function saveUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(UserService.SaveUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

UserService.prototype.userStatus = function userStatus() {
  throw new Error("Bi-directional streaming is not currently supported");
}

UserServiceClient.prototype.listUserList = function listUserList(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UserService.ListUserList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.UserServiceClient = UserServiceClient;

