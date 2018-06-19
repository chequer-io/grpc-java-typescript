import * as fs from "fs";
import * as grpc from "grpc";
import { clientFactory } from "rxjs-grpc";

import { user } from "./grpc-namespaces";

async function main() {
  type ClientFactory = user.ClientFactory;
  const Services = clientFactory<ClientFactory>("../proto/user.proto", "user");

  const credentials = grpc.credentials.createSsl(fs.readFileSync('../misc/localhostCA.pem'));
  const services = new Services("localhost:8090", credentials);
  const greeter = services.getUserService();

  await greeter.getUser({ id: 1 }).forEach(response => {
    console.log(`User: ${response}`);
  });

  await greeter.listUserList({}).forEach(response => {
    console.log(`Multi user: ${response}`);
  });
}

main().catch(error => console.error(error));
