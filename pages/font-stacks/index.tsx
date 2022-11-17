import * as React from "react";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { TNextPageWithLayout } from "@/common/types";
import { HomeLink } from "@/components/elements/HomeLink";
import styles from "@/styles/page-styles/FontStackIndex.module.scss";

const FontStackIndex: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Animation | Learn CSS</title>
        <meta name="description" content="Fun animation learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Wrapper}>
        <HomeLink />
        <ul>
          <li>Georgia&Verdana</li>
        </ul>
      </main>
    </>
  );
};

FontStackIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default FontStackIndex;
