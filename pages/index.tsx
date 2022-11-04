import * as React from "react";
import _ from "lodash";
import Head from "next/head";

import { BaseLayout } from "@/components/layouts/BaseLayout/BaseLayout";
import { FrontLayout } from "@/components/layouts/FrontLayout";
import { Button } from "@/components/elements/Button";
import styles from "@/styles/page-styles/Home.module.scss";
// types
import { TNextPageWithLayout } from "@/common/types";

const Home: TNextPageWithLayout = (): JSX.Element => {
  const [showTestText, setShowTestText] = React.useState(false);
  const complexObj = { nest: { complex: null } };
  const cpyComplexObj = _.cloneDeep(complexObj);
  console.log(cpyComplexObj);
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Home}>
        <div className="container">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum risus leo, luctus dapibus mi imperdiet feugiat. Aenean
            sagittis, ex ut maximus consequat, nulla erat tincidunt diam, in
            varius velit enim in tortor. Integer sed egestas est. Maecenas
            lectus leo, lobortis quis sodales non, malesuada vitae arcu. Duis
            metus massa, ultrices ut egestas in, vehicula sit amet nunc. Sed nec
            quam bibendum ante varius pulvinar a in ex. Quisque scelerisque
            feugiat lacus, vitae rhoncus nunc viverra et.{` `}
          </p>
          <p>
            Vivamus ullamcorper nisl quis viverra tincidunt. Donec vel aliquam
            ligula, ac pharetra lacus. Ut auctor magna quis lobortis tincidunt.
            Morbi eget metus sit amet augue varius gravida. Suspendisse bibendum
            ultrices volutpat. Phasellus vel quam in purus rhoncus auctor.
            Nullam eu nunc sem. Donec ligula enim, congue ut massa suscipit,
            vulputate laoreet massa. Integer at est molestie, viverra velit sed,
            porttitor eros.
          </p>
          <ul>
            <li>Unordered List</li>
            <li>Unordered List</li>
            <li>Unordered List</li>
            <li>Unordered List</li>
            <li>Unordered List</li>
          </ul>
          <hr></hr>
          <ol>
            <li>ordered List</li>
            <li>ordered List</li>
            <li>ordered List</li>
            <li>ordered List</li>
            <li>ordered List</li>
          </ol>
        </div>
        <Button clickHandler={() => setShowTestText(!showTestText)}>
          Test Button
        </Button>
        <br></br>
        {showTestText && <p>Test text</p>}
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <FrontLayout>{page}</FrontLayout>
    </BaseLayout>
  );
};

export default Home;
