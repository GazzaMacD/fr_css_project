import * as React from "react";
import Head from "next/head";

import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import styles from "@/styles/page-styles/LayoutsIndex.module.scss";
// types
import { TNextPageWithLayout } from "@/common/types";
import Link from "next/link";
import Image from "next/image";

const LayoutsIndex: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Layouts | Learn CSS</title>
        <meta name="description" content="description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.LayoutIndex}>
        <div></div>
        <div></div>
        <div></div>
        <div>types of layout</div>
        <div></div>
        <div></div>
        <div>
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
          <LinkImageBlock />
        </div>
      </main>
    </>
  );
};

LayoutsIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default LayoutsIndex;

function LinkImageBlock() {
  return (
    <Link href="/">
      <a>
        <div className={styles.LinkImage}>
          <Image
            src="/image/layouts/cartoon_characters.jpg"
            alt="cartoon"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
    </Link>
  );
}
