import * as fs from "fs";
import * as path from "path";
import * as grpc from "grpc";
import { clientFactory } from "rxjs-grpc";
import { WebContents } from 'electron';

import { user } from "./grpc-namespaces";

export async function client(sender: WebContents) {
  try {
    type ClientFactory = user.ClientFactory;
    const Services = clientFactory<ClientFactory>("../proto/user.proto", "user");

    const credentials = grpc.credentials.createSsl(fs.readFileSync(path.join(__dirname, '../localhostCA.pem')));
    const services = new Services("localhost:8090", credentials);
    const greeter = services.getUserService();

    await greeter.getUser({ id: 1 }).forEach(response => {
      console.log(`User: ${response}`);
      sender.send('grpc', `User: ${response}`);
    });

    await greeter.listUserList({}).forEach(response => {
      console.log(`Multi user: ${response}`);
      sender.send('grpc', `Multi user: ${response}`);
    });
  } catch (error) {
    console.error(error);
  }
}
