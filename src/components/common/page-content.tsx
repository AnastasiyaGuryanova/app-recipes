"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const PageContent = () => {
  const pathname = usePathname();
  const pageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  if (!pageContent) {
    return <div>Страница не найдена</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />;
};

export default PageContent;
