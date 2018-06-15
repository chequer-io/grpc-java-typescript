package com.chequer.sqlgate.grpc.service;

import com.chequer.sqlgate.grpc.Empty;
import com.chequer.sqlgate.grpc.Status;
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

    @Override
    public StreamObserver<Status> userStatus(StreamObserver<User> responseObserver) {
        return new StreamObserver<Status>() {

            @Override
            public void onNext(Status status) {
                System.out.println("Status Received : " + status);
            }

            @Override
            public void onError(Throwable throwable) {
                System.out.println("Error : " + throwable);
            }

            @Override
            public void onCompleted() {
                System.out.println("Completed");
                responseObserver.onNext(User.newBuilder().setName("").build());
                responseObserver.onCompleted();
            }
        };
    }

    @Override
    public void listUserList(Empty request, StreamObserver<User> responseObserver) {
        for (int i = 0; i < 100; i++) {
            responseObserver.onNext(User.newBuilder().setName("Brant" + i).build());
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        responseObserver.onCompleted();
    }
}
