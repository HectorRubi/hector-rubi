import Script from 'next/script'

export const GTM = () => {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RJFG3GMNZ1"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RJFG3GMNZ1');
          `}
      </Script>
    </>
  )
}
