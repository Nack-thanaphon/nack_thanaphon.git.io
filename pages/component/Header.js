import Head from 'next/head'

function IndexPage() {
    return (
        <Head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
                crossOrigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <title>Dev-Log | Log Everything I got</title>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-3P35X4E752"></script>
            <script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3P35X4E752');
        `}
            </script>
        </Head>

    )
}

export default IndexPage