import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64a67ac2309d4624f700")

export const account = new Account(client)

// Database

export const databases = new Databases(client, "64a67adf5b32e2976998")

