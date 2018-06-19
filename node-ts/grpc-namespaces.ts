import * as $protobuf from 'protobufjs';
import { Observable } from 'rxjs/Observable';

/**
 * Namespace user.
 * @exports user
 * @namespace
 */
export namespace user {

    /**
     * Contains all the RPC service clients.
     * @exports user.ClientFactory
     * @interface
     */
    export interface ClientFactory {

        /**
         * Returns the UserService service client.
         * @returns {user.UserService}
         */
        getUserService(): user.UserService;
    }

    /**
     * Builder for an RPC service server.
     * @exports user.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {

        /**
         * Adds a UserService service implementation.
         * @param {user.UserService} impl UserService service implementation
         * @returns {user.ServerBuilder}
         */
        addUserService(impl: user.UserService): user.ServerBuilder;
    }

    /**
     * Constructs a new UserService service.
     * @exports user.UserService
     * @interface
     */
    export interface UserService {

        /**
         * Calls GetUser.
         * @param {user.User} request User message or plain object
         * @returns {Observable<user.User>}
         */
        getUser(request: user.User): Observable<user.User>;

        /**
         * Calls SaveUser.
         * @param {user.User} request User message or plain object
         * @returns {Observable<user.User>}
         */
        saveUser(request: user.User): Observable<user.User>;

        /**
         * Calls UserStatus.
         * @param {user.Status} request Status message or plain object
         * @returns {Observable<user.User>}
         */
        userStatus(request: user.Status): Observable<user.User>;

        /**
         * Calls ListUserList.
         * @param {user.Empty} request Empty message or plain object
         * @returns {Observable<user.User>}
         */
        listUserList(request: user.Empty): Observable<user.User>;
    }

    /**
     * Constructs a new Empty.
     * @exports user.Empty
     * @interface
     */
    export interface Empty {
    }

    /**
     * Constructs a new User.
     * @exports user.User
     * @interface
     */
    export interface User {

        /**
         * User id.
         * @type {number|$protobuf.Long|undefined}
         */
        id?: (number|$protobuf.Long);

        /**
         * User name.
         * @type {string|undefined}
         */
        name?: string;

        /**
         * User age.
         * @type {number|undefined}
         */
        age?: number;

        /**
         * User email.
         * @type {string|undefined}
         */
        email?: string;

        /**
         * User status.
         * @type {user.Status|undefined}
         */
        status?: user.Status;
    }

    /**
     * Constructs a new Status.
     * @exports user.Status
     * @interface
     */
    export interface Status {

        /**
         * Status statusId.
         * @type {number|undefined}
         */
        statusId?: number;

        /**
         * Status userId.
         * @type {number|undefined}
         */
        userId?: number;

        /**
         * Status message.
         * @type {string|undefined}
         */
        message?: string;
    }

    /**
     * Constructs a new Query.
     * @exports user.Query
     * @interface
     */
    export interface Query {

        /**
         * Query message.
         * @type {Array.<string>|undefined}
         */
        message?: string[];
    }
}
