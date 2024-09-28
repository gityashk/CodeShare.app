import { Databases, ID } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);

const collections = [
    {
        name: "share",
        db_id: import.meta.env.VITE_APPWRITE_DATABASE_ID,
        id: import.meta.env.VITE_APPWRITE_SHARE_COLLECTION_ID,
    }
];

const db = {};

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
                console.log(`Error creating document in ${collection.name}:`, error);
                return null;
            }
        },
        get: async (documentId) => {
            try {
                const response = await databases.getDocument(
                    collection.db_id,
                    collection.id,
                    documentId
                );
                return response;
            } catch (error) {
                console.log(`Error reading document from ${collection.name}:`, error);
                return null;
            }
        },
    }
});

export default db;