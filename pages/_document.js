import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
 return (
  <Html lang="en">
   <Head>
    <title>BookManager</title>
    <meta name="description" content="BookManager"/>
    <meta name="application-name" content="BookManager"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
   </Head>
   <body>
   <Main/>
   <NextScript/>
   </body>
  </Html>
 )
}
