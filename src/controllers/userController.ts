import { Request, Response } from "express";
import User, { Iuser } from '../models/userModel';



// Utility function for errors
function logError(error: unknown, context: string): void {
    if (error instanceof Error) {
        console.error(`${context}: ${error.message}`);
        if (error.stack) {
            console.error(`Stack trace: ${error.stack}`);
        }
    } else {
        console.error(`${context}: An unknown error occurred`, error);
    }
}



// Creating a user
export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    // Ensure required fields are provided
    if (!name || !email || !password) {
        res.status(400).json({ message: "Missing required fields from body" });
        return;
    }

    try {
        const user: Iuser = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error: unknown) {
        logError(error, 'createUser error undallo userController');
        res.status(500).json({ message: "Internal server error" });
    }
}

// Displaying all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: Iuser[] = await User.find();
        res.status(200).json(users);
    } catch (error: unknown) {
        logError(error, 'getUsers error undallo userController');
        res.status(500).json({ message: "Internal server error" });
    }
}

// Updating a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: Iuser | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (error: unknown) {
        logError(error, 'updateUser error undallo userController');
        res.status(500).json({ message: "Internal server error" });
    }
}

// Deleting a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: Iuser | null = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.status(200).json({ message: "User Deleted !!" });
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (error: unknown) {
        logError(error, 'deleteUser error undallo userController');
        res.status(500).json({ message: "Internal server error" });
    }
}

// Displaying a single user
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: Iuser | null = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (error: unknown) {
        logError(error, 'getUser error undallo userController');
        res.status(500).json({ message: "Internal server error" });
    }
}

