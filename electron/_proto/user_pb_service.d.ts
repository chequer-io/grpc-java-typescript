// package: user
// file: user.proto

import * as user_pb from "./user_pb";
import {grpc} from "grpc-web-client";

type UserServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.User;
  readonly responseType: typeof user_pb.User;
};

type UserServiceSaveUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.User;
  readonly responseType: typeof user_pb.User;
};

type UserServiceUserStatus = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.Status;
  readonly responseType: typeof user_pb.User;
};

type UserServiceListUserList = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof user_pb.Empty;
  readonly responseType: typeof user_pb.User;
};

export class UserService {
  static readonly serviceName: string;
  static readonly GetUser: UserServiceGetUser;
  static readonly SaveUser: UserServiceSaveUser;
  static readonly UserStatus: UserServiceUserStatus;
  static readonly ListUserList: UserServiceListUserList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getUser(
    requestMessage: user_pb.User,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: user_pb.User|null) => void
  ): void;
  getUser(
    requestMessage: user_pb.User,
    callback: (error: ServiceError, responseMessage: user_pb.User|null) => void
  ): void;
  saveUser(
    requestMessage: user_pb.User,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: user_pb.User|null) => void
  ): void;
  saveUser(
    requestMessage: user_pb.User,
    callback: (error: ServiceError, responseMessage: user_pb.User|null) => void
  ): void;
  userStatus(): void;
  listUserList(requestMessage: user_pb.Empty, metadata?: grpc.Metadata): ResponseStream<user_pb.User>;
}

