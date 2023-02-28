import { Html, Head, Main, NextScript } from "next/document";
import Flicking from "@egjs/react-flicking";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="my-flicking" className="flicking-viewport">
          <div className="flicking-camera"></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
