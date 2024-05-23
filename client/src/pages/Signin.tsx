import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "@tanstack/react-query";
import useAccount from "@/hooks/useAccount";
import toast from "react-hot-toast";
import { signInSchema } from "@/utils/validation";
import { loginInputs } from "@/constant/inputs";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
const Signin = () => {
  const navigate = useNavigate();
  const { createSession } = useAccount();
  const form = useForm({
    resolver: yupResolver(signInSchema),
  });

  const loginHandler = useMutation({
    mutationFn: createSession,
    mutationKey: ["loginHandler"],
  });

  const onsubmit = async (data) => {
    await toast.promise(loginHandler.mutateAsync(data), {
      loading: "Processing",
      error: loginHandler?.error?.message,
      success: "you are successfully signed in",
    });
  };

  return (
    <div className="grid h-screen place-items-center">
      <form
        className="m-auto max-w-[500px] w-full"
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <div className="grid place-items-center">
          <p className="w-auto text-xl font-medium text-black-900 sm:text-xl font-montserrat">
            LOGO
          </p>
          <p className="font-semibold text-xl md:text-[22px] text-black-900 sm:text-xl w-auto font-montserrat my-2">
            Rentify ltd
          </p>
        </div>
        <div className="my-7 font-poppins">
          <p>
            <span className="text-xl font-semibold "> Welcome! </span>
            <br />
            <span className="text-base font-medium text-gray-700">
              {" "}
              Login to your account
            </span>
          </p>
        </div>
        <div className="grid gap-5">
          {loginInputs.map((input) => (
            <label key={input.name}>
              <p className="my-3 font-medium font-poppins"> {input.label}</p>
              <Input
                placeholder="name@email.com"
                className="w-full p-0 text-base font-medium text-left md:h-auto placeholder:text-gray-900_99 sm:h-auto sm:pr-5 text-gray-900_99"
                wrapClassName="bg-white-A700 border-[2px] border-blue-A200 border-solid flex pl-5 pr-[35px] py-[19px] rounded-[10px] w-full"
                type={input.name}
                control={form.control}
                name={input.name}
              />
            </label>
          ))}
        </div>
        <div className="flex justify-center my-10 ">
          <Button
            className="w-full p-5 text-white bg-blue-500 rounded-[10px] mt-5 cursor-pointer text-base border-none"
            type="submit"
          >
            Let&apos;s goo!!!
          </Button>
        </div>
        <Button
          className="float-right text-base bg-white border-none cursor-pointer"
          type="button"
          onClick={() => navigate("/signup")}
        >
          create your account..
        </Button>
      </form>
    </div>
  );
};

export default Signin;
