import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { fetchMenuDetails, fetchRestaurantDetails } from "@/lib/api";
import "./globals.css";
import { notFound } from "next/navigation";
import StoreProvider from "@/providers/StoreProvider";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Header from "@/components/Header/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QikServe Menu",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurant = await fetchRestaurantDetails();

  if (!restaurant) notFound();

  const menu = await fetchMenuDetails();

  return (
    <html lang={restaurant?.locale || "en"}>
      <body className={`${roboto.className}`}>
        <StoreProvider restaurant={restaurant} menu={menu}>
          <PageWrapper>
            <Header />
            {children}
          </PageWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
