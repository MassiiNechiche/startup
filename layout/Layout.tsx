import ClippedDrawer from "@/components/Drawer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClippedDrawer>{children}</ClippedDrawer>
    </>
  );
}
