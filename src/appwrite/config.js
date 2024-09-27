import dotenv from 'dotenv';
dotenv.config();

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

const collections = [
    {
        name: "share",
        db_id: process.env.APPWRITE_DATABASE_ID,
        id: process.env.APPWRITE_SHARE_COLLECTION_ID,
    }
];

db = {};

collections.forEach((collection) => {
    db[collection.name] = {
        create: async (payload, id = ID.unique()) => {
            try {
                const response = await databases.createDocument(
                    collection.db_id,
                    collection.id,
                    id,
                    payload
                );
                return response;
            } catch (error) {
                console.error(`Error creating document in ${collection.name}:`, error);
                throw error;
            }
        },
        read: async (documentId) => {
            try {
                const response = await databases.getDocument(
                    collection.db_id,
                    collection.id,
                    documentId
                );
                return response;
            } catch (error) {
                console.error(`Error reading document from ${collection.name}:`, error);
                throw error;
            }
        },
    }
});

export default db;
