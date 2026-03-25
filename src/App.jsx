import logoMark from './assets/profile_logo.png';
import logoFull from './assets/profile_logo_name.png';

const contactItems = [
  { label: 'Address', value: 'Coming Soon' },
  { label: 'Phone', value: 'Coming Soon' },
  { label: 'Email', value: 'Coming Soon' },
  { label: 'Hours', value: 'Coming Soon' },
];

const categories = ['Disposable Vapes', 'E-Liquids', 'Devices', 'Coils & Pods', 'Accessories'];

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="border-b border-black bg-black px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white sm:text-xs">
        21+ only | For in-store purchases only | Website does not offer online sales
      </div>

      <div className="border-b border-black bg-[#f97316] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:text-xs">
        Retail location opening soon in Muskogee, Oklahoma
      </div>

      <header className="border-b border-black bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-black bg-white p-1 sm:flex">
              <img src={logoMark} alt="Okie Vapes logo mark" className="h-full w-full object-contain" />
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
                Coming Soon
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl">
                Muskogee’s Next
                <span className="block">Vape Shop.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
                Okie Vapes is preparing to open in Muskogee with a clean retail space, a strong
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
                  Follow For Updates
                </a>
                <div className="inline-flex items-center justify-center border border-black bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black">
                  Contact Details Coming Soon
                </div>
              </div>
            </div>

            <div className="bg-white py-12 lg:py-20">
              <div className="mx-auto max-w-md lg:pl-10">
                <div className="overflow-hidden border border-black bg-white p-4">
                  <img src={logoFull} alt="Okie Vapes logo" className="w-full object-contain" />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                  Store Details
                </p>

                <div className="mt-6 space-y-5 border-t border-black pt-6">
                  {contactItems.map((item) => (
                    <div key={item.label} className="border-b border-zinc-300 pb-5 last:border-b-0 last:pb-0">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-black">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
              In-Store Categories
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {categories.map((item) => (
                <div
                  key={item}
                  className="border border-black bg-[#f3f3f3] px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white p-1">
                <img src={logoMark} alt="Okie Vapes secondary logo mark" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-2xl font-black uppercase tracking-[-0.04em]">Okie Vapes</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-400">
                  Muskogee retail store opening soon
                </p>
              </div>
            </div>

            <div className="space-y-1 text-sm text-zinc-300 lg:text-right">
              <p>Muskogee, Oklahoma</p>
              <p>Address, phone, and email coming soon</p>
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
