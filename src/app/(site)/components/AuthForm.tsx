"use client";

// React and Next.
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// External packages.
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Components.
import MyButton from "@/components/MyButton";
import Input from "@/components/inputs/Input";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const router = useRouter();
  const session = useSession();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const userMutation = useMutation({
    mutationFn: (data: FieldValues) => axios.post("/api/auth/register", data),
    onSuccess: (_, data) => {
      toast.success("Account created.");
      reset();
      signIn("credentials", data);
    },
    onError: () => toast.error("Something went wrong."),
  });

  useEffect(() => {
    setIsLoading(userMutation.isLoading);
    if (session?.status === "authenticated") router.push("/dashboard");
  }, [session, router, userMutation.isLoading]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggleVariant = useCallback(
    () => setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN")),
    []
  );

  const socialAction = useCallback((action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) toast.error("Invalid credentials.");
        if (callback?.ok && !callback.error) toast.success("Logged in.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") userMutation.mutate(data);

    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) toast.error("Invalid credentials.");
          if (callback?.ok && !callback.error) toast.success("Logged in.");
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-300">
        {variant === "LOGIN"
          ? "Sign in to Nocrastinate"
          : "Start saying NO to Procrastination"}
      </h2>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="rounded-lg bg-white/10 px-4 py-8 shadow sm:px-10">
          {/* Form. */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <Input
                id="name"
                label="Name"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}
            <Input
              id="email"
              label="Email address"
              type="email"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <div>
              <MyButton type="submit" disabled={isLoading} fullWidth>
                {variant === "LOGIN" ? "Sign In" : "Register"}
              </MyButton>
            </div>
          </form>
          {/* Social login. */}
          <div className="mt-6">
            {/* Text */}
            <div className="flex justify-center text-sm text-gray-400">
              <span className="px-2">or continue with</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {/* Github login. */}
            <AuthSocialButton
              icon={BsGithub}
              label="Github"
              onClick={() => socialAction("github")}
            />
            {/* Google login. */}
            <AuthSocialButton
              icon={FcGoogle}
              label="Google"
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        {/* Footer. */}
        <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-400">
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="cursor-pointer underline">
            {variant === "LOGIN" ? "Register" : "Sign in"}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
