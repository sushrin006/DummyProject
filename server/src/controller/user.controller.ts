import { Request, Response } from "express";
import { users } from "../constants/user";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    return res.status(400).json("Invalid Credentials");
  }
  {
    res.status(200).json("Login successfull");
  }
};

export const register = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    const usersTobeAdded = {
      id: users.length + 1,
      username,
      password,
    };
    users.push(usersTobeAdded);
    return res.status(200).json("Register Successfull");
  }
  {
    res.status(400).json("User already exists");
  }
};

export const getUsers = (req: Request, res: Response) => {
  res.json({ data: users });
};

export const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(400).json("User not found");
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
};

export const newPassword = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const { oldPassword, newPassword } = req.body;
  const user = users.find(
    (user) => user.id === id && user.password === oldPassword,
  );
  if (!user) {
    return res.status(400).json("Incorrect password");
  }

  user.password = newPassword;

  res.status(200).json("Password changed");
};
