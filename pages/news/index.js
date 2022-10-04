import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/Home">Home</Link>
        </li>
        <li>Something too</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
