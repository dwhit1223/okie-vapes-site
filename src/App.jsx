import { useState } from 'react';
import profileLogo from './assets/profile_logo.png';
import profileLogoName from './assets/profile_logo_name.png';

const businessHours = 'Mon-Sat 10am-6pm';

const storeDetails = [
  {
    label: 'Address',
    value: '2340 E Shawnee Byp, Muskogee, OK 74403',
    href: 'https://www.google.com/maps/search/?api=1&query=2340%20E%20Shawnee%20Byp%2C%20Muskogee%2C%20OK%2074403',
  },
  {
    label: 'Phone',
    value: '(918) 608-8273',
    href: 'tel:+19186088273',
  },
  {
    label: 'Email',
    value: 'info@okievapes.com',
    href: 'mailto:info@okievapes.com',
  },
  {
    label: 'Hours',
    value: businessHours,
  },
];

const categories = [
  'Disposable Vapes',
  'E-Liquids',
  'Devices',
  'Coils & Pods',
  'Accessories',
];

const ageGateStorageKey = 'okie-vapes-age-confirmed';

function App() {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    try {
      return window.localStorage.getItem(ageGateStorageKey) === 'true';
    } catch {
      return false;
    }
  });

  function handleAgeConfirm() {
    try {
      window.localStorage.setItem(ageGateStorageKey, 'true');
    } catch {
      // Visitors can still enter if browser storage is disabled.
    }

    setIsAgeConfirmed(true);
  }

  function handleAgeDeny() {
    window.location.href = 'https://www.google.com/';
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {!isAgeConfirmed ? (
        <div
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black px-5 py-8 text-black"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="w-full max-w-lg border border-white bg-white p-6 shadow-2xl sm:p-8">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-black bg-white p-2">
              <img src={profileLogo} alt="Okie Vapes logo mark" className="h-full w-full object-contain" />
            </div>
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">
              Age Verification Required
            </p>
            <h1
              id="age-gate-title"
              className="mt-3 text-center text-3xl font-black uppercase leading-none tracking-[-0.05em] text-black sm:text-4xl"
            >
              Are you 21 or older?
            </h1>
            <p className="mt-5 text-center text-base leading-7 text-zinc-700">
              Okie Vapes is intended only for adults 21 years of age or older. Please confirm your
              age before entering this site.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAgeConfirm}
                className="inline-flex items-center justify-center border border-black bg-[#f97316] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black"
                style={{ color: '#ffffff' }}
              >
                Yes, I Am 21+
              </button>
              <button
                type="button"
                onClick={handleAgeDeny}
                className="inline-flex items-center justify-center border border-black bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
              >
                No, Exit
              </button>
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
              This website does not offer online sales. All purchases are in-store only.
            </p>
          </div>
        </div>
      ) : null}

      <div className="border-b border-black bg-black px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white sm:text-xs">
        21+ only | For in-store purchases only | Website does not offer online sales
      </div>

      <div className="border-b border-black bg-[#f97316] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:text-xs">
        Now open in Muskogee | Regular hours: {businessHours}
      </div>

      <header className="border-b border-black bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-black bg-white p-1 sm:flex">
              <img src={profileLogo} alt="Okie Vapes logo mark" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                Oklahoma Retail Vape Shop
              </p>
              <p className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] text-black sm:text-4xl">
                Okie Vapes
              </p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/okievapes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-black bg-[#f97316] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black hover:text-white"
            style={{ color: '#ffffff' }}
          >
            Follow On Facebook
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-black bg-[#f3f3f3]">
          <div className="mx-auto grid w-full max-w-6xl gap-0 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="border-b border-black py-12 lg:border-b-0 lg:border-r lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ea580c]">
                Now Open
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl">
                Your Muskogee
                <span className="block">Vape Shop.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
                Okie Vapes is now fully open in Muskogee with a clean retail space, a strong
                everyday in-store selection, and a straightforward local-store experience for adult
                customers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.facebook.com/okievapes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-black bg-[#f97316] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black hover:text-white"
                  style={{ color: '#ffffff' }}
                >
                  Follow On Facebook
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2340%20E%20Shawnee%20Byp%2C%20Muskogee%2C%20OK%2074403"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-email-button inline-flex items-center justify-center border border-black bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-black"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white py-12 lg:py-20">
              <div className="mx-auto max-w-md lg:pl-10">
                <div className="overflow-hidden border border-black bg-white p-4">
                  <img src={profileLogoName} alt="Okie Vapes logo" className="w-full object-contain" />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                  Store Details
                </p>
                <div className="mt-6 space-y-5 border-t border-black pt-6">
                  {storeDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-zinc-300 pb-5 last:border-b-0 last:pb-0"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-2 inline-flex text-lg font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:text-[#ea580c]"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-lg font-semibold text-black">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-[#fff7ed]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ea580c]">
                Stay Updated
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-black uppercase tracking-[-0.05em] text-black sm:text-4xl">
                Follow us on Facebook for announcements, updates, and local specials.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-700">
                We&apos;re removing the email signup for now. For store announcements, new arrivals,
                and local promotions, Facebook is the best place to keep up with Okie Vapes.
              </p>
            </div>

            <div className="border border-black bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-600">
                Best Place For Updates
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-700">
                Follow our Facebook page for announcements, new product highlights, and current
                in-store updates.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/okievapes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center border border-black bg-[#f97316] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black"
                  style={{ color: '#ffffff' }}
                >
                  Follow Okie Vapes On Facebook
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2340%20E%20Shawnee%20Byp%2C%20Muskogee%2C%20OK%2074403"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center border border-black bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-black"
                  style={{ color: '#000000' }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = '#000000';
                  }}
                >
                  Get Directions
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-600">
                For now, Facebook is our main channel for announcements and day-to-day updates.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-[#f3f3f3]">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ea580c]">
                Find Us
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-black uppercase tracking-[-0.05em] text-black sm:text-4xl">
                Visit Okie Vapes in Muskogee.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-700">
                We&apos;re open and ready to help. Stop by during normal business hours, or tap for
                turn-by-turn directions from your current location.
              </p>
              <div className="mt-6 space-y-3 text-base leading-7 text-zinc-700">
                <p>2340 E Shawnee Byp</p>
                <p>Muskogee, OK 74403</p>
                <p>{businessHours}</p>
                <p>21+ only. Valid ID required.</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2340%20E%20Shawnee%20Byp%2C%20Muskogee%2C%20OK%2074403"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center border border-black bg-[#f97316] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black"
                style={{ color: '#ffffff' }}
              >
                Open In Google Maps
              </a>
            </div>

            <div className="overflow-hidden border border-black bg-white">
              <iframe
                title="Map to Okie Vapes"
                src="https://www.google.com/maps?q=2340+E+Shawnee+Byp,+Muskogee,+OK+74403&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block min-h-[360px] w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
              In-Store Categories
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="border border-black bg-[#f3f3f3] px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white p-1">
                <img
                  src={profileLogo}
                  alt="Okie Vapes secondary logo mark"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-2xl font-black uppercase tracking-[-0.04em]">Okie Vapes</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-400">
                  Now open in Muskogee
                </p>
              </div>
            </div>

            <div className="space-y-1 text-sm text-zinc-300 lg:text-right">
              <p>Muskogee, Oklahoma</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:info@okievapes.com"
                  className="font-semibold text-white underline-offset-4 transition hover:text-[#f97316] hover:underline"
                >
                  info@okievapes.com
                </a>
              </p>
              <p>
                Follow us on{' '}
                <a
                  href="https://www.facebook.com/okievapes"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white underline-offset-4 transition hover:text-[#f97316] hover:underline"
                >
                  Facebook
                </a>
              </p>
              <p>21+ only | For in-store purchases only | No online sales</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
