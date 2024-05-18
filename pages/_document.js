// import { Html, Head, Main, NextScript } from "next/document";


// export default function Document(Component, pageProps) {
//   return (
//     <Html lang="en">
//       <Head />
//       <body >
//         <Main className={poppings.className}/>
//         <NextScript {...pageProps} />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(Component, pageProps) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript {...pageProps} />
      </body>
    </Html>
  );
}