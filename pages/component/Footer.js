import Script from 'next/script'

function Footer() {
  return (
    <div className="container">

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3P35X4E752"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3P35X4E752');
        `}
      </Script>
    </div>
  )
}

export default Footer