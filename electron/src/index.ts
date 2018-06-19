import {grpc} from "grpc-web-client";
import {UserService} from "../_proto/user_pb_service";
import {User} from "../_proto/user_pb";

declare const USE_TLS: boolean;
const host = USE_TLS ? "https://localhost:8090" : "http://localhost:8090";

function getBook() {
  const user = new User();
  grpc.unary(UserService.GetUser, {
    request: user,
    host: host,
    onEnd: res => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("getBook.onEnd.status", status, statusMessage);
      console.log("getBook.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("getBook.onEnd.message", message.toObject());
      }
      console.log("getBook.onEnd.trailers", trailers);
      // queryBooks();
    }
  });
}

getBook();

// function queryBooks() {
//   const queryBooksRequest = new QueryBooksRequest();
//   queryBooksRequest.setAuthorPrefix("Geor");
//   const client = grpc.client(UserService.QueryBooks, {
//     host: host,
//   });
//   client.onHeaders((headers: grpc.Metadata) => {
//     console.log("queryBooks.onHeaders", headers);
//   });
//   client.onMessage((message: User) => {
//     console.log("queryBooks.onMessage", message.toObject());
//   });
//   client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
//     console.log("queryBooks.onEnd", code, msg, trailers);
//   });
//   client.start();
//   client.send(queryBooksRequest);
// }
