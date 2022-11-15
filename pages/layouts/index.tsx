import * as React from "react";
import Head from "next/head";
import { SlHome } from "react-icons/sl";

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
      <div className={styles.Wrapper}>
        <main className={styles.Main}>
          <div className={styles.Main__heading}>
            <h1>
              <div>types</div>
              <div>of</div>
              <div>layout</div>
            </h1>
          </div>
          <div className={styles.Main__links}>
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
            <LinkImageBlock />
          </div>
        </main>
        <HomeLink />
      </div>
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

function HomeLink() {
  return (
    <div className={styles.HomeLink}>
      <Link href="/">
        <a>
          <SlHome />
        </a>
      </Link>
    </div>
  );
}
