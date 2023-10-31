import "@/app/globals.css";
import Head from "next/head";
import { ReactNode } from "react";

//import providers
import { Providers } from "@/app/providers";

export const metadata = {
  title: "Avimuktaa Creations",
  description: "Login to Avimuktaa Creations",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </Head>

      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
