package com.chequer.sqlgate.grpc.service;

import com.chequer.sqlgate.grpc.User;
import com.chequer.sqlgate.grpc.UserServiceGrpc;
import io.grpc.stub.StreamObserver;

public class UserService extends UserServiceGrpc.UserServiceImplBase {

    @Override
    public void getUser(User request, StreamObserver<User> responseObserver) {
        User user = null;

        if (request.getId() == 1L) {
            user = User.newBuilder().setName("Brant Hwang").setEmail("brant@chequer.io").setAge(30).setId(1).build();
        }

        if (user != null) {
            responseObserver.onNext(user);
        }

        responseObserver.onCompleted();
    }

    @Override
    public void saveUser(User request, StreamObserver<User> responseObserver) {
        responseObserver.onNext(request);
        responseObserver.onCompleted();
    }
}
