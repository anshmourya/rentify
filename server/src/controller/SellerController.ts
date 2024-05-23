import Seller, { PropertyInfo } from "@schema/seller";
import { Request, Response } from "express";
import mongoose from "mongoose";

class SellerController {
  getProertryList = async (req: Request, res: Response) => {
    try {
      const propertyList: PropertyInfo[] = await Seller.find();
      res.success({
        message: "property list",
        data: propertyList,
      });
    } catch (error) {
      console.error("erorr in getProertryList", error);
      res.error(error);
    }
  };

  getSellerProperty = async (req: Request, res: Response) => {
    try {
      const propertyList: PropertyInfo[] = await Seller.find({
        seller_id: req.params.id,
      });
      res.success({
        message: "property list",
        data: propertyList,
      });
    } catch (error) {
      console.error("erorr in getSellerProperty", error);
      res.error(error);
    }
  };

  postProertry = async (req: Request, res: Response) => {
    try {
      const propertyInfo: PropertyInfo = req.body;
      propertyInfo.seller_id = new mongoose.Types.ObjectId(req.user.id);
      await Seller.create(propertyInfo);
      res.success({
        message: "property created successfully",
        data: propertyInfo,
      });
    } catch (error) {
      console.error("erorr in postProertry", error);
      res.error(error);
    }
  };
  updateProperty = async (req: Request, res: Response) => {
    try {
      const propertyInfo: PropertyInfo = req.body;
      await Seller.updateOne(propertyInfo);
      res.success({
        message: "property updated successfully",
        data: propertyInfo,
      });
    } catch (error) {
      console.error("erorr in updateProperty", error);
      res.error(error);
    }
  };

  deleteProperty = async (req: Request, res: Response) => {
    try {
      const { propertyId } = req.body;
      await Seller.findByIdAndDelete(propertyId);
      res.success({
        message: "property deleted successfully",
        data: propertyId,
      });
    } catch (error) {
      console.error("erorr in deleteProperty", error);
      res.error(error);
    }
  };

  updatedLike = async (req: Request, res: Response) => {
    try {
      const { propertyId } = req.body;
      const userId = req.user.id;

      const property = await Seller.findById(propertyId);
      if (!property) {
        return res.status(404).json({
          message: "Property not found",
        });
      }

      if (property.likes.includes(userId)) {
        // User has already liked the property, so unlike it
        await Seller.updateOne(
          { _id: propertyId },
          {
            $inc: { total_like: -1 },
            $pull: { likes: userId },
          }
        );
        res.status(200).json({
          message: "Property unliked successfully",
          data: propertyId,
        });
      } else {
        // User has not liked the property, so like it
        await Seller.updateOne(
          { _id: propertyId },
          {
            $inc: { total_like: 1 },
            $push: { likes: userId },
          }
        );
        res.status(200).json({
          message: "Property liked successfully",
          data: propertyId,
        });
      }
    } catch (error) {
      console.error("Error in updatedLike", error);
      res.status(500).json({
        message: "An error occurred while updating the like",
        error: error.message,
      });
    }
  };
}

const sellerController = new SellerController();

export default sellerController;
