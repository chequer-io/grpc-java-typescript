package com.chequer.sqlgate.rpc;

import com.chequer.sqlgate.grpc.User;
import com.chequer.sqlgate.grpc.UserServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class UserServiceTestClient {

    private static final Logger logger = Logger.getLogger(UserServiceTestClient.class.getName());

    private final ManagedChannel channel;
    private final UserServiceGrpc.UserServiceBlockingStub blockingStub;
    private final UserServiceGrpc.UserServiceStub asyncStub;

    public UserServiceTestClient(String host, int port) {
        this(ManagedChannelBuilder.forAddress(host, port).usePlaintext());
    }

    public UserServiceTestClient(ManagedChannelBuilder<?> channelBuilder) {
        channel = channelBuilder.build();
        blockingStub = UserServiceGrpc.newBlockingStub(channel);
        asyncStub = UserServiceGrpc.newStub(channel);
    }

    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }

    public User getUser(Long id) {
        User response = blockingStub.getUser(User.newBuilder().setId(id).build());
        return response;
    }

    public static void main(String[] args) {
        UserServiceTestClient client = new UserServiceTestClient("localhost", 8090);
        User user = client.getUser(1L);
        System.out.println(user);
    }
}
