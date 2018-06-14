package com.chequer.sqlgate.grpc;

import com.chequer.sqlgate.grpc.service.UserService;
import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;
import java.util.logging.Logger;

public class RpcServer {

    private static final Logger logger = Logger.getLogger(RpcServer.class.getName());

    private final int port;
    private final Server server;

    public RpcServer(int port) {
        this.port = port;

        ServerBuilder<?> builder = ServerBuilder.forPort(port);
        server = builder.addService(new UserService()).build();
    }

    public void start() throws IOException {
        server.start();
        logger.info("Server started, listening on " + port);
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.err.println("*** shutting down gRPC server since JVM is shutting down ***");
            RpcServer.this.stop();
            System.err.println("*** server shut down ***");
        }));
    }

    public void stop() {
        if (server != null) {
            server.shutdown();
        }
    }

    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    public static void main(String[] args) throws Exception {
        RpcServer rpcServer = new RpcServer(8090);
        rpcServer.start();
        rpcServer.blockUntilShutdown();
    }
}
