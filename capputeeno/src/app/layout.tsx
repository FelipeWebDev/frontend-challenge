import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { FilterContextProvider } from "@/contexts/FilterContext";

const saira = Saira({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Frontend Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
