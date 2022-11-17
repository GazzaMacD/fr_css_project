import * as React from "react";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { TNextPageWithLayout } from "@/common/types";
import { HomeLink } from "@/components/elements/HomeLink";
import styles from "@/styles/page-styles/AnimationIndex.module.scss";

const AnimationIndex: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Animation | Learn CSS</title>
        <meta name="description" content="Fun animation learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Wrapper}>
        <HomeLink />
        Animation here
      </main>
    </>
  );
};

AnimationIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default AnimationIndex;
