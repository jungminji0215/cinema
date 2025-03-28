import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <div>검색 결과 : {q}</div>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
