// package: user
// file: user.proto

import * as user_pb from "./user_pb";
export class UserService {
  static serviceName = "user.UserService";
}
export namespace UserService {
  export class GetUser {
    static readonly methodName = "GetUser";
    static readonly service = UserService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = user_pb.User;
    static readonly responseType = user_pb.User;
  }
  export class SaveUser {
    static readonly methodName = "SaveUser";
    static readonly service = UserService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = user_pb.User;
    static readonly responseType = user_pb.User;
  }
  export class UserStatus {
    static readonly methodName = "UserStatus";
    static readonly service = UserService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = user_pb.Status;
    static readonly responseType = user_pb.User;
  }
  export class ListUserList {
    static readonly methodName = "ListUserList";
    static readonly service = UserService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = user_pb.Empty;
    static readonly responseType = user_pb.User;
  }
}
