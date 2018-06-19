package com.chequer.sqlgate.rpc;

import com.chequer.sqlgate.grpc.Empty;
import com.chequer.sqlgate.grpc.User;
import com.chequer.sqlgate.grpc.UserServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.netty.GrpcSslContexts;
import io.grpc.netty.NegotiationType;
import io.grpc.netty.NettyChannelBuilder;
import io.netty.handler.ssl.SslContext;

import javax.net.ssl.SSLException;
import java.util.Iterator;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class UserServiceTestClient {

    private static final Logger logger = Logger.getLogger(UserServiceTestClient.class.getName());

    private final ManagedChannel channel;
    private final UserServiceGrpc.UserServiceBlockingStub blockingStub;
    private final UserServiceGrpc.UserServiceStub asyncStub;

    public UserServiceTestClient() throws SSLException {
        NettyChannelBuilder builder = NettyChannelBuilder.forAddress("localhost", 8090);
        SslContext sslContext = GrpcSslContexts.forClient().trustManager(UserServiceTestClient.class.getResourceAsStream("/localhost.crt")).build();
        builder.negotiationType(NegotiationType.TLS);
        builder.sslContext(sslContext);

        channel = builder.build();
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

    public void getListUser() {
        Iterator<User> users = blockingStub.listUserList(Empty.newBuilder().build());

        while (users.hasNext()) {
            System.out.println("user : " + users.next());
        }

    }

    public static void main(String[] args) throws SSLException {
        UserServiceTestClient client = new UserServiceTestClient();
        User user = client.getUser(1L);
        System.out.println(user);

        client.getListUser();

    }
}
