import Link from "next/link";
import { lazy, Suspense } from "react";

const Content = lazy(() => import("../components/content.client"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
      <Link href="/home">
        <a style={{ color: "blue" }}>Go to Home page</a>
      </Link>
    </div>
  );
}
