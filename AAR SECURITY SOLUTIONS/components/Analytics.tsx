import Script from "next/script";

export function Analytics() {
  return (
    <>
      {/* Replace GA_MEASUREMENT_ID with your Google Analytics 4 ID. */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics-placeholder" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Replace META_PIXEL_ID with your Meta Pixel ID. */}
      <Script id="meta-pixel-placeholder" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'META_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Replace AW-CONVERSION_ID and AW-CONVERSION_LABEL with Google Ads conversion values. */}
      <Script id="google-ads-conversion-placeholder" strategy="afterInteractive">
        {`
          window.aarTrackLead = function () {
            if (window.gtag) {
              window.gtag('event', 'conversion', {
                send_to: 'AW-CONVERSION_ID/AW-CONVERSION_LABEL'
              });
            }
          };
        `}
      </Script>
    </>
  );
}
