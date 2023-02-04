import Head from 'next/head'

// propsの型定義
interface Props {
  title: string,
  description: string
}

export function HeadTag(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
        <meta name="robots" content="noindex"></meta>
      </Head>
    </>
  );
}