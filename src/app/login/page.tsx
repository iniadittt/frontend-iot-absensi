import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/login-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authOptions } from "@/lib/authOptions";

const Page = async ({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) => {
  const callBackUrl = searchParams?.callbackUrl || "/dashboard";
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 py-8 md:gap-8 lg:py-24 xl:gap-12">
      <div className="flex flex-col gap-2 xl:gap-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm callBackUrl={callBackUrl} />
          </CardContent>
        </Card>
        <Button variant={"link"} asChild>
          <Link href="/">Return to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;