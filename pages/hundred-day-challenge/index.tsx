import * as React from "react";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { TNextPageWithLayout } from "@/common/types";
import { HomeLink } from "@/components/elements/HomeLink";
import { Day } from "@/components/hundred-days/Day";
import { Day1 } from "@/components/hundred-days/Day1";
import styles from "@/styles/page-styles/HundredIndex.module.scss";

const HundredDayIndex: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>One Hundred Day Challenge | Learn CSS</title>
        <meta name="description" content="Fun challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Wrapper}>
        <HomeLink />
        <h1>One Hundred Day CSS Challenge</h1>
        <section className={styles.Days}>
          <Day1 />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </section>
      </main>
    </>
  );
};

HundredDayIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HundredDayIndex;
