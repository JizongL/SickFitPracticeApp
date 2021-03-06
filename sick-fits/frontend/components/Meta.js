import Head from 'next/head';

const Meta =()=>(
    <Head>
        <meta name="viewport" 
        content="width=divice-width, 
        initial-scale=1"/>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png"/>
        {/* nprogress css stylesheet */}
        <link rel="stylesheet" type="text/css" 
            href="/static/nprogress.css"/>
            <title>Sick Fits!</title>            
    </Head>
)

export default Meta;