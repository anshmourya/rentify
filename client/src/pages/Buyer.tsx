import Spinner from "@/components/loader/Spinner";
import PropertyList from "@/components/PropertyList";
import useBuyer from "@/hooks/useBuyer";
import PropertyDetail from "@/modals/PropertyDetail";
import { useQuery } from "@tanstack/react-query";

const Buyer = () => {
  const { getPropertyList } = useBuyer();
  const propertyList = useQuery({
    queryKey: ["propertyList"],
    queryFn: getPropertyList,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

  if (propertyList.isLoading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col gap-[15px] items-start justify-start pb-10 pt-5 px-5 w-full">
      <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between  md:px-5 w-full  ">
        <div className="grid w-full place-items-center">
          <div className="w-full max-w-[1440px] cursor-pointer">
            {propertyList?.data?.map((item) => (
              <div
                key={item._id}
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 py-[25px] rounded-[15px] shadow-bs w-full"
              >
                <PropertyDetail>
                  <PropertyList
                    className="w-full"
                    address={item.address}
                    price={item.price}
                    total_like={item.total_like}
                    seller_id={item.seller_id}
                    number_of_bathroom={item.number_of_bathroom}
                    number_of_bedroom={item.number_of_bedroom}
                    description={item.description}
                  />
                </PropertyDetail>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
