import * as React from "react";
import Head from "next/head";
import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { TNextPageWithLayout } from "@/common/types";
import { HomeLink } from "@/components/elements/HomeLink";
import styles from "@/styles/page-styles/GeorgiaVerdana.module.scss";

const GV: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Animation | Learn CSS</title>
        <meta name="description" content="Fun animation learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeLink />
        <div className={styles.Wrapper}>
          <section className={styles.Container}>
            <h1>My main title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{` `}
              <a>Link here ut aliquip ex ea commodo</a> consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.My main title
            </p>
            <h2>A Subtitle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.My main title
            </p>
          </section>
          <div className={styles.BlueBlock}>
            <section className={styles.Container}>
              <h2>Another subtitle</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.My main title
              </p>
            </section>
          </div>
          <section className={styles.Container}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.My main title
            </p>
            <h2>A Subtitle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.My main title
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.My main title
            </p>
            <h3>Header for the list</h3>
            <ul>
              <li>Some bullets</li>
              <li>Some bullets</li>
              <li>Some bullets</li>
              <li>Some bullets</li>
              <li>Some bullets</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

GV.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default GV;
