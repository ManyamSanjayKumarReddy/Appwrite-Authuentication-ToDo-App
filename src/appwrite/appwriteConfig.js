import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("648edea1325eb287fe2e")

export const account = new Account(client)

// Database

export const databases = new Databases(client, "648ee54487ce55c5b9ff")

