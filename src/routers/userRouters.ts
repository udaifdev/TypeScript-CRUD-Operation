import { Router, Request, Response } from "express";
import { createUser, deleteUser, getUsers, updateUser, getUser } from "../controllers/userController";


const router: Router = Router();


// Route to get all users
router.get('/', (req: Request, res: Response) => {
    getUsers(req, res);
});

// Route to get a single user by ID
router.get('/:id', (req: Request, res: Response) => {
    getUser(req, res);
});

// Route to create a new user
router.post('/', (req: Request, res: Response) => {
    createUser(req, res);
});

// Route to update a user by ID
router.put('/:id', (req: Request, res: Response) => {
    updateUser(req, res);
});

// Route to delete a user by ID
router.delete('/:id', (req: Request, res: Response) => {
    deleteUser(req, res);
});

export default router;
