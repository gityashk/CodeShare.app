import { Account, ID } from "appwrite";
import { client } from "./config";

const account = new Account(client);

export async function emailAuth(email) {
    try {
        const sessionToken = await account.createEmailToken(
            ID.unique(),
            email
        );
        return sessionToken.userId;
    } catch (error) {
        console.log("Error creating phone token:", error);
        return null;
    }
}

export async function verifyEmail(userId, secret) {
    try {
        const response = await account.createSession(
            userId,
            secret
        );
        return response;
    } catch (error) {
        console.log("Error verifying phone token:", error);
        return null;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();
        return response;
    } catch (error) {
        console.log("Error getting current user:", error);
        return null;
    }
}

export async function logout() {
    try {
        const response = await account.deleteSession("current");
        return response;
    } catch (error) {
        console.log("Error logging out:", error);
        return null;
    }
}