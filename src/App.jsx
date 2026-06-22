import { useState } from 'react';
import storeSign from './assets/StoreSign-optimized.jpg';

const brandLogoModules = import.meta.glob('./assets/Brands/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

const businessHours = 'Mon-Sat 10am-6pm';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=2340%20E%20Shawnee%20Byp%2C%20Muskogee%2C%20OK%2074403';

const storeDetails = [
  {
    label: 'Address',
    value: '2340 E Shawnee Byp, Muskogee, OK 74403',
    href: mapsUrl,
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
  'Disposables',
  'E-Liquids',
  'Mods',
  'Coils',
  'Pods',
  'Batteries',
  'Chargers',
  'Accessories',
];

const brandLogos = Object.entries(brandLogoModules)
  .filter(([path]) => !path.includes('/Old/') && !path.includes('/Resized/'))
  .map(([path, src]) => {
    const filename = path.split('/').pop() ?? '';
    const name = filename.replace(/\.[^/.]+$/, '');
    const label = name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .trim();

    return { src, alt: `${label} logo`, name: label };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const ageGateStorageKey = 'okie-vapes-age-confirmed';

function BrandMark({ compact = false }) {
  return (
    <div className={compact ? 'inline-flex w-fit flex-col items-start' : 'flex w-fit flex-col items-start'}>
      <p
        className={`font-bold uppercase leading-[0.86] tracking-[0.08em] text-[#f5f1ea] ${
          compact ? 'text-2xl sm:text-[2.15rem]' : 'text-[2.8rem] sm:text-[4.15rem]'
        }`}
        style={{ fontFamily: "'Barlow Condensed', Impact, sans-serif" }}
      >
        OKIE VAPES
      </p>
      <span className={`mt-2 block w-full bg-[#b62d24] ${compact ? 'h-[3px]' : 'h-[5px]'}`} />
    </div>
  );
}

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
    <div className="min-h-screen bg-[#1b1816] text-[#f5f1ea]">
      {!isAgeConfirmed ? (
        <div
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#120f0e]/95 px-5 py-8 text-[#f5f1ea]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="w-full max-w-lg border border-[#6f5a42] bg-[#211c19] p-6 shadow-2xl sm:p-8">
            <div className="flex justify-center">
              <BrandMark />
            </div>
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#b08d57]">
              Age Verification Required
            </p>
            <h1
              id="age-gate-title"
              className="mt-3 text-center text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f5f1ea] sm:text-4xl"
            >
              Are you 21 or older?
            </h1>
            <p className="mt-5 text-center text-base leading-7 text-[#c8beb1]">
              Okie Vapes is intended only for adults 21 years of age or older. Please confirm your
              age before entering this site.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAgeConfirm}
                className="inline-flex items-center justify-center border border-[#b08d57] bg-[#b08d57] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#171311] transition hover:bg-[#8e6f40]"
              >
                Yes, I Am 21+
              </button>
              <button
                type="button"
                onClick={handleAgeDeny}
                className="inline-flex items-center justify-center border border-[#6f5a42] bg-transparent px-5 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#f5f1ea] transition hover:bg-[#2e2723]"
              >
                No, Exit
              </button>
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#a79989]">
              This website does not offer online sales. All purchases are in-store only.
            </p>
          </div>
        </div>
      ) : null}

      <div className="border-b border-[#3a312c] bg-[#120f0e] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#f5f1ea] sm:text-xs">
        21+ only | For in-store purchases only | Website does not offer online sales
      </div>

      <div className="border-b border-[#7c6549] bg-[#2d2622] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d3b07a] sm:text-xs">
        Now open in Muskogee | Regular hours: {businessHours}
      </div>

      <header className="border-b border-[#3a312c] bg-[#191614]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#b08d57]">
                Oklahoma Retail Vape Shop
              </p>
              <div className="mt-3">
                <BrandMark compact />
              </div>
            </div>
          </div>

          <a
            href="https://www.facebook.com/okievapes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-[#b08d57] bg-[#b08d57] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#171311] transition hover:bg-[#8e6f40]"
          >
            Follow On Facebook
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-[#3a312c] bg-[#1f1b19]">
          <div className="mx-auto grid w-full max-w-6xl gap-0 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="border-b border-[#3a312c] py-12 lg:border-b-0 lg:border-r lg:border-r-[#3a312c] lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                Now Open
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#f5f1ea] sm:text-6xl lg:text-7xl">
                Your Muskogee
                <span className="block">Vape Shop.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c8beb1] sm:text-lg">
                Okie Vapes is now fully open in Muskogee with a strong everyday in-store selection,
                straightforward service, and a clean local-shop experience for adult customers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.facebook.com/okievapes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#b08d57] bg-[#b08d57] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#171311] transition hover:bg-[#8e6f40]"
                >
                  Follow On Facebook
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#6f5a42] bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#f5f1ea] transition hover:bg-[#2e2723]"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b08d57]">
                  Brands We Carry
                </p>
                <div className="mt-4 grid grid-cols-4 gap-[10px] bg-[#120f0e] p-0">
                  {brandLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex h-[110px] items-center justify-center overflow-hidden"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                  In-Store Categories
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="border border-[#6f5a42] bg-[#241f1c] px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#f5f1ea]"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#171311] py-12 lg:py-20">
              <div className="mx-auto max-w-md lg:pl-10">
                <div className="overflow-hidden border border-[#6f5a42] bg-[#241f1c] p-3">
                  <img
                    src={storeSign}
                    alt="Front of the Okie Vapes building"
                    className="aspect-[3/4] w-full object-contain bg-[#120f0e]"
                  />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                  Store Details
                </p>
                <div className="mt-6 space-y-5 border-t border-[#3a312c] pt-6">
                  {storeDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-[#3a312c] pb-5 last:border-b-0 last:pb-0"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a79989]">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-2 inline-flex text-lg font-semibold text-[#f5f1ea] underline decoration-[#b08d57]/40 underline-offset-4 transition hover:text-[#d3b07a]"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-lg font-semibold text-[#f5f1ea]">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#3a312c] bg-[#221d1a]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                Stay Updated
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-black uppercase tracking-[-0.05em] text-[#f5f1ea] sm:text-4xl">
                Follow us on Facebook for announcements, updates, and local specials.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#c8beb1]">
                We&apos;re keeping updates simple for now. Facebook is the best place to keep up
                with store announcements, new arrivals, and local promotions.
              </p>
            </div>

            <div className="border border-[#6f5a42] bg-[#191614] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b08d57]">
                Best Place For Updates
              </p>
              <p className="mt-4 text-base leading-8 text-[#c8beb1]">
                Follow our Facebook page for announcements, product highlights, and current
                in-store updates.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/okievapes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center border border-[#b08d57] bg-[#b08d57] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#171311] transition hover:bg-[#8e6f40]"
                >
                  Follow Okie Vapes On Facebook
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center border border-[#6f5a42] bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#f5f1ea] transition hover:bg-[#2e2723]"
                >
                  Get Directions
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#a79989]">
                Facebook is our main channel for announcements and day-to-day updates.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#3a312c] bg-[#1c1917]">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                Find Us
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-black uppercase tracking-[-0.05em] text-[#f5f1ea] sm:text-4xl">
                Visit Okie Vapes in Muskogee.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#c8beb1]">
                We&apos;re open and ready to help. Stop by during normal business hours, or tap for
                turn-by-turn directions from your current location.
              </p>
              <div className="mt-6 space-y-3 text-base leading-7 text-[#c8beb1]">
                <p>2340 E Shawnee Byp</p>
                <p>Muskogee, OK 74403</p>
                <p>{businessHours}</p>
                <p>21+ only. Valid ID required.</p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center border border-[#b08d57] bg-[#b08d57] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#171311] transition hover:bg-[#8e6f40]"
              >
                Open In Google Maps
              </a>
            </div>

            <div className="overflow-hidden border border-[#6f5a42] bg-[#241f1c] lg:self-start">
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

        <section className="bg-[#120f0e] text-[#f5f1ea]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <BrandMark compact />
            </div>

            <div className="space-y-1 text-sm text-[#c8beb1] lg:text-right">
              <p>Muskogee, Oklahoma</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:info@okievapes.com"
                  className="font-semibold text-[#f5f1ea] underline-offset-4 transition hover:text-[#d3b07a] hover:underline"
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
                  className="font-semibold text-[#f5f1ea] underline-offset-4 transition hover:text-[#d3b07a] hover:underline"
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
