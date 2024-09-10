"use client";

import StoreProvider from "@/providers/StoreProvider";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
