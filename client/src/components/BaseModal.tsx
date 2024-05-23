import React, { ReactNode, useState } from "react";
import { default as ModalProvider } from "react-modal";
import { Button } from "./Button";
import { cn } from "@/utils";

interface ModalBaseProps {
  children: ReactNode;
  triggerComponent: ReactNode;
  modalClass?: string;
  acceptFunctions?: () => void;
  defalutOpen?: boolean;
}

const ModalBase: React.FC<ModalBaseProps> = ({
  children,
  triggerComponent,
  modalClass,
  acceptFunctions,
  defalutOpen,
}) => {
  const [open, setOpen] = useState<boolean>(!!defalutOpen);
  const handleModal = () => setOpen(!open);

  return (
    <>
      {triggerComponent && (
        <button onClick={handleModal} type="button">
          {triggerComponent}
        </button>
      )}
      <ModalProvider
        appElement={document.getElementById("root")}
        className={cn(
          "w-full m-auto max-w-[97vw] max-h-[90vh] overflow-y-scroll",
          modalClass
        )}
        overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full "
        isOpen={open}
        onRequestClose={handleModal}
      >
        <div className="w-full sm:w-full md:w-full">
          <div className="bg-white flex flex-col gap-[25px] items-start justify-start p-10 md:px-5 rounded-[15px]  md:w-full w-full">
            {children}

            {/* Buttons */}
            <div className="py-2.5 justify-center items-center gap-5 inline-flex">
              <Button
                className="bg-blue-A200 border-[3px] border-blue-A200 border-solid cursor-pointer h-[35px] min-w-[103px] py-[7px] rounded-[5px] text-center text-sm text-white-A700 text-white"
                type="submit"
                onClick={() => {
                  if (typeof acceptFunctions === "function") acceptFunctions();
                }}
              >
                Accept
              </Button>
              <Button
                className="w-auto text-base text-center text-gray-700"
                onClick={handleModal}
                type="button"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ModalBase;
