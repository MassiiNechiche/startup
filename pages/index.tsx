import Layout from "@/layout/Layout";
import { ReactNode } from "react";

export default function Home() {
  return <></>;
}

Home.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
