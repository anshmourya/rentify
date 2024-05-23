import React from "react";

// Define the props interface
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
  total_like: number;
  seller_id: string;
  className?: string;
}

const PropertyList: React.FC<PropertyInfo> = (props) => {
  const {
    className,
    address,
    number_of_bedroom,
    number_of_bathroom,
    price,
    total_like,
  } = props;

  return (
    <div className={className}>
      <div className="flex flex-col items-start justify-start w-full p-3 rounded-md shadow-lg">
        <div className="border-b border-gray-200 border-solid flex md:flex-col flex-row gap-[27px] items-center justify-between px-2.5 py-[5px] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-10 items-start justify-start pl-[15px] pr-2.5 py-2.5 w-auto md:w-full">
            <p className="w-auto font-bold text-blue_gray-900_01">
              City: {address.city || "N/A"}
            </p>
            <p className="w-auto font-bold text-blue_gray-900_01">
              Country: {address.country || "N/A"}
            </p>
            <p className="w-auto font-bold text-blue_gray-900_01">
              Pincode: {address.pincode || "N/A"}
            </p>
            <p className="w-auto font-bold text-blue_gray-900_01">
              State: {address.state || "N/A"}
            </p>
            <p className="w-auto font-bold text-blue_gray-900_01">
              Street: {address.street || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-5 items-center justify-start sm:px-5 px-[25px] py-2.5 w-full">
          <p className="w-auto text-xl text-gray-700_01">
            Number of Bedrooms: {number_of_bedroom || "N/A"}
          </p>
          <p className="w-auto text-xl text-gray-700_01">
            Number of Bathrooms: {number_of_bathroom || "N/A"}
          </p>
          <p className="w-auto text-xl text-gray-700_01">
            Price: {price || "N/A"}
          </p>
          <p className="w-auto text-xl text-gray-700_01">
            Total Likes: {total_like || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
