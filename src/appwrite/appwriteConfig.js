import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("648ead97590eb13c6a71")

export const account = new Account(client)

// Database

export const databases = new Databases(client, "648eae4bc60173e689f8")

