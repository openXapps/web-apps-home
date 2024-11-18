import { useState, useEffect } from 'react';

import Disclaimer from '@components/Disclaimer';
import AppCard from '@components/AppCard';

import logo from '@assets/logo.svg';
import { appList } from '@lib/app-data';

export default function Home() {
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  useEffect(() => {
    const cookies = decodeURIComponent(document.cookie);
    // console.log('Home: cookies...', cookies);
    if (!cookiesAccepted && cookies.indexOf('gd_openapps_accept=Yes') > -1) setCookiesAccepted(true);
    if (cookiesAccepted && cookies.indexOf('gd_openapps_accept=Yes') === -1) setCookiesAccepted(false);

    return () => { };
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    let d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    // d.setTime(d.getTime() + (60 * 1000)); // Test cookie
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `gd_openapps_accept=Yes;expires=${expires};`;
    setCookiesAccepted(true);
  }

  return (
    <div className="container pt-6 px-4">
      <header className="py-4 max-w-sm mx-auto flex items-center justify-center gap-3 border border-slate-300 rounded-lg">
        <h1 className="text-5xl font-bold font-mono">OpenApps</h1>
        <img className="w-12" src={logo} alt="openapps logo" />
      </header>
      <div className="mt-6 mb-[80px] mx-auto max-w-screen-sm flex flex-col gap-3 md:gap-6">
        {appList.map((v, i) => (
          <AppCard key={i} app={v} enabled={cookiesAccepted} />
        ))}
      </div>
      <Disclaimer cookiesAccepted={cookiesAccepted} handleAcceptCookies={handleAcceptCookies} />
    </div>
  );
}

