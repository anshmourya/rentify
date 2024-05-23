import { Request, Response } from "express";

import user, { userProps } from "service/user.js";

class UserController {
  async getUser(req: Request, res: Response) {
    try {
      const newUser = await user.getUserById(req.params.id);

      res.success({
        message: "user successfully fetched",
        data: newUser,
      });
    } catch (error) {
      res.error(error);
    }
  }
  async signUp(req: Request, res: Response) {
    try {
      const newUser = await user.create(req.body);

      res.success({
        message: "user successfully signed up",
        data: newUser,
      });
    } catch (error) {
      res.error(error);
    }
  }

  async createSession(req: Request, res: Response) {
    try {
      const checkCredential: userProps = await user.checkCredentials(req.body);
      const newToken = await user.createToken({
        role: checkCredential.role,
        name: checkCredential.name,
        id: checkCredential.id,
        email: checkCredential.email,
      });

      res.success({
        message: "user authentication completed successfully",
        data: newToken,
      });
    } catch (error) {
      res.error(error);
    }
  }
}

const userController = new UserController();

export default userController;
