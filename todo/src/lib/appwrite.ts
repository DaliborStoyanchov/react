import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_PROJECT_ID);

export const databases = new Databases(client);
export const DB_ID = import.meta.env.VITE_DB_ID;
export const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;
export { ID };
