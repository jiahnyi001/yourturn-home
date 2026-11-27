/* 방문 분석 (Google Analytics 4).
   MEASUREMENT_ID가 비어 있으면 아무것도 불러오지 않고 아무것도 모으지 않는다.
   홈용 GA4 속성을 만든 뒤 G-로 시작하는 측정 ID를 아래에 넣는다. */
(() => {
  const MEASUREMENT_ID = '';

  if (!MEASUREMENT_ID || /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;

  // 유럽경제지역·영국·스위스: 동의 전에는 분석·광고 쿠키를 쓰지 않는다
  const CONSENT_REGIONS = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU',
    'MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'];

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    region: CONSENT_REGIONS, wait_for_update: 500,
  });
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);
})();
