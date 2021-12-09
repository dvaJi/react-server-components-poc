import { Suspense } from "react";
import Link from "next/link";

import ServerInfo from "../components/server-info.server";
import Content from "../components/content.client";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome to React Server Components</h1>
      <Suspense fallback={"Loading..."}>
        <ServerInfo />
      </Suspense>
      <Content />
      <Link href="/">
        <a style={{ color: "blue" }}>Back to Index Page</a>
      </Link>
    </div>
  );
}
