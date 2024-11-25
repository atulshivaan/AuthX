import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"
dotenv.config();

const TOKEN ='33594e974ff729ae3cfe555e0881793c'
const ENDPOINT='https://send.api.mailtrap.io/'


 export const mailtrapclient = new MailtrapClient({
  token: TOKEN,
  endpoint:ENDPOINT
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "ByteSonic",
};


