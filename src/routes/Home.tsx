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
    <div className="container pt-6">
      <header className="flex items-center justify-center gap-3">
        <h1 className="text-5xl font-bold font-mono">OpenApps</h1>
        <img className="w-12" src={logo} alt="openapps logo" />
      </header>
      <div className=" mt-6 mb-[85px] mx-auto max-w-screen-sm flex flex-col gap-3 md:gap-6">
        {appList.map((v, i) => (
          <AppCard key={i} app={v} enabled={cookiesAccepted} />
        ))}
      </div>
      <Disclaimer cookiesAccepted={cookiesAccepted} handleAcceptCookies={handleAcceptCookies} />
    </div>
  );
}


/**
 * <>
      <Container maxWidth="sm">
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" my={2}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: { xs: 40, sm: 64 }, height: { xs: 40, sm: 64 } }} />
          <Typography variant="h4">OpenApps</Typography>
        </Stack>
        <Typography textAlign="center">open source utilities to be used freely</Typography>
        <Apps cookiesAccepted={cookiesAccepted} />
      </Container>
      <Toolbar />
      <Disclaimer cookiesAccepted={cookiesAccepted} handleAcceptCookies={handleAcceptCookies} />
    </>
 */