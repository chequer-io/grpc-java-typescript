import { Observable } from 'rxjs/Observable';

/**
 * Namespace helloworld.
 * @exports helloworld
 * @namespace
 */
export namespace helloworld {

    /**
     * Contains all the RPC service clients.
     * @exports helloworld.ClientFactory
     * @interface
     */
    export interface ClientFactory {

        /**
         * Returns the Greeter service client.
         * @returns {helloworld.Greeter}
         */
        getGreeter(): helloworld.Greeter;
    }

    /**
     * Builder for an RPC service server.
     * @exports helloworld.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {

        /**
         * Adds a Greeter service implementation.
         * @param {helloworld.Greeter} impl Greeter service implementation
         * @returns {helloworld.ServerBuilder}
         */
        addGreeter(impl: helloworld.Greeter): helloworld.ServerBuilder;
    }

    /**
     * Constructs a new Greeter service.
     * @exports helloworld.Greeter
     * @interface
     */
    export interface Greeter {

        /**
         * Calls SayHello.
         * @param {helloworld.HelloRequest} request HelloRequest message or plain object
         * @returns {Observable<helloworld.HelloReply>}
         */
        sayHello(request: helloworld.HelloRequest): Observable<helloworld.HelloReply>;

        /**
         * Calls SayMultiHello.
         * @param {helloworld.MultiHelloRequest} request MultiHelloRequest message or plain object
         * @returns {Observable<helloworld.HelloReply>}
         */
        sayMultiHello(request: helloworld.MultiHelloRequest): Observable<helloworld.HelloReply>;
    }

    /**
     * Constructs a new HelloRequest.
     * @exports helloworld.HelloRequest
     * @interface
     */
    export interface HelloRequest {

        /**
         * HelloRequest name.
         * @type {string|undefined}
         */
        name?: string;
    }

    /**
     * Constructs a new MultiHelloRequest.
     * @exports helloworld.MultiHelloRequest
     * @interface
     */
    export interface MultiHelloRequest {

        /**
         * MultiHelloRequest name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * MultiHelloRequest num_greetings.
         * @type {number}
         */
        num_greetings: number;
    }

    /**
     * Constructs a new HelloReply.
     * @exports helloworld.HelloReply
     * @interface
     */
    export interface HelloReply {

        /**
         * HelloReply message.
         * @type {string|undefined}
         */
        message?: string;
    }
}
