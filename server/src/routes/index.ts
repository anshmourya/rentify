import sellerController from "@controller/SellerController";
import userController from "@controller/userController";
import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("ok");
});

//user
router.get("/getUser/:id", userController.getUser);
router.post("/create", userController.signUp);
router.post("/createSession", userController.createSession);

//seller
router.post("/post", sellerController.postProertry);
router.put("/updatedProperty", sellerController.updateProperty);
router.post("/updateLike", sellerController.updatedLike);
router.get("/getSellerProperty/:id", sellerController.getSellerProperty);

//buyer
router.get("/getList", sellerController.getProertryList);
export default router;
