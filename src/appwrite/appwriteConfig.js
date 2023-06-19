import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("http://authtest-pearl.vercel.app/v1").setProject("648edea1325eb287fe2e")

export const account = new Account(client)

// Database

export const databases = new Databases(client, "648f30f5e2b02da42ae6")

