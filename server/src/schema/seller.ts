import mongoose from "mongoose";

interface Address {
  city: string;
  country: string;
  pincode: string;
  state: string;
  street: string;
}

interface PropertyInfo {
  address: Address;
  number_of_bedroom: number;
  number_of_bathroom: number;
  description: string;
  price: number;
  likes: string[];
  total_like: number;
  seller_id: mongoose.Types.ObjectId;
}

const addressSchema = new mongoose.Schema<Address>({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
});

const sellerSchema = new mongoose.Schema<PropertyInfo>({
  seller_id: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  number_of_bedroom: {
    type: Number,
    required: true,
    min: 1, // Assuming a property must have at least one bedroom
  },
  number_of_bathroom: {
    type: Number,
    required: true,
    min: 1, // Assuming a property must have at least one bathroom
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price should be non-negative
  },
  likes: {
    type: [String],
    default: [],
  },
  total_like: {
    type: Number,
    default: 0,
  },
});

const Seller = mongoose.model<PropertyInfo>("Seller", sellerSchema);

export default Seller;
export { Address, PropertyInfo };
