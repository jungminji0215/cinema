import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <div>검색 결과 : {q}</div>;
}
