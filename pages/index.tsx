import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return <div>hello friend</div>;
};

export default Home;
