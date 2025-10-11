const footer = document.getElementById('footer')
footer.innerHTML = `
 <div class="bg-[#888888] text-zinc-200">
    <!-- Footer -->
    <footer class="w-full pt-10">
      <div class="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Kontaktdaten -->
        <section>
          <h2 class="text-2xl font-semibold text-yellow-300">Kontaktdaten</h2>

          <div class="mt-4 space-y-1">
            <p class="font-semibold">E. Richter</p>
            <p>Sicherheitstechnik</p>
            <p>Hauptsitz</p>
            <p>Weilertsweg 8</p>
            <p>D-64739 Höchst im Odenwald</p>
          </div>

          <ul class="mt-5 space-y-3 text-zinc-100">
            <li class="flex items-start gap-3">
              <!-- phone -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15a1.5 1.5 0 001.5-1.5v-2.693a1.5 1.5 0 00-1.094-1.447l-3.13-.9a1.5 1.5 0 00-1.79.79l-.57 1.26a11.25 11.25 0 01-5.776-5.776l1.26-.57a1.5 1.5 0 00.79-1.79l-.9-3.13A1.5 1.5 0 006.943 3.75H4.25A1.5 1.5 0 002.75 5.25v1.5z"/>
              </svg>
              <span>Tel:&nbsp;<a href="tel:+496163937863" class="hover:text-yellow-300">06163 - 93 78 63</a></span>
            </li>
            <li class="flex items-start gap-3">
              <!-- mobile -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="7.5" y="2.25" width="9" height="19.5" rx="2" />
                <circle cx="12" cy="18" r="0.9" fill="currentColor"/>
              </svg>
              <span>Mobil:&nbsp;<a href="tel:+4901636513886" class="hover:text-yellow-300">0163 - 65 13 886</a></span>
            </li>
            <li class="flex items-start gap-3">
              <!-- fax -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2h12v6H6z"/><path d="M4 8h16a2 2 0 012 2v8H2v-8a2 2 0 012-2z"/><path class="fill-neutral-600" d="M8 4h8v2H8z"/>
              </svg>
              <span>Fax:&nbsp;06163 - 93 78 64</span>
            </li>
            <li class="flex items-start gap-3">
              <!-- mail -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v.15l-10 6.25L2 5.15V5z"/><path d="M22 7.35l-10 6.25L2 7.35V19a2 2 0 002 2h16a2 2 0 002-2V7.35z"/>
              </svg>
              <span>
                E-Mail:&nbsp;<a href="mailto:website@richter-sicherheitstechnik.de" class="hover:text-yellow-300">website@richter-sicherheitstechnik.de</a>
              </span>
            </li>
          </ul>
        </section>

        <!-- Rückrufanfrage -->
        <section>
          <h2 class="text-2xl font-semibold text-yellow-300">Rückrufanfrage</h2>
          <form class="mt-5 space-y-3" action="#" method="post">
            <input type="text" name="name" placeholder="Name*" required
              class="w-full rounded-md bg-neutral-100 p-3 placeholder-zinc-400 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300">
            <input type="tel" name="telefon" placeholder="Telefon*" required
              class="w-full rounded-md bg-neutral-100 p-3 placeholder-zinc-400 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300">
            <textarea name="nachricht" rows="4" placeholder="Ihre Nachricht*"
              class="w-full rounded-md bg-neutral-100 p-3 placeholder-zinc-400 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300"></textarea>

            <div class="flex items-center justify-between">
              <p class="text-sm text-zinc-300">
                Bitte beachten Sie unsere <a href="#" class="underline hover:text-yellow-300">Datenschutzerklärung</a>
              </p>
              <button type="submit"
                class="bg-yellow-300 text-neutral-800 font-semibold px-5 py-2 rounded-md hover:bg-yellow-200 transition">
                ABSENDEN
              </button>
            </div>
            <p class="text-xs text-zinc-300 mt-1">* Pflichtfelder</p>
          </form>
        </section>

        <!-- Quicklinks -->
        <nav>
          <h2 class="text-2xl font-semibold text-yellow-300">Quicklinks</h2>
          <ul class="mt-5 divide-y divide-neutral-500/60 border-y border-neutral-500/60">
            <!-- item -->
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Schlüsseldienst Standorte</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Notöffnungen &amp; Schlüsseldienst</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Achtung Abzocker</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Unser Team</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Aktuelle News</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 py-3 group">
                <span class="text-yellow-300 text-xl leading-none">+</span>
                <span class="group-hover:text-yellow-300">Suche auf unserer Seite</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Social + Promo -->
        <aside>
          <h2 class="text-2xl font-semibold text-yellow-300">Empfehlen Sie uns bei</h2>

          <div class="mt-4 flex items-center gap-3">
            <!-- Simple social icon buttons -->
            <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full grid place-items-center bg-neutral-500/40 border border-neutral-400 hover:bg-neutral-500 transition">
              <!-- Facebook -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 fill-zinc-100"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.2 10.44 22v-7.02H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.08 22 12.07z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" class="w-9 h-9 rounded-full grid place-items-center bg-neutral-500/40 border border-neutral-400 hover:bg-neutral-500 transition">
              <!-- Twitter/X -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-zinc-100" viewBox="0 0 24 24"><path d="M20.6 3 14 10.2 22 21h-6.4L11.6 14 6 21H2.8L10 13.3 2 3h6.4l3.9 5.8L18 3h2.6z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full grid place-items-center bg-neutral-500/40 border border-neutral-400 hover:bg-neutral-500 transition">
              <!-- Instagram -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-zinc-100" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.8a1 1 0 110 2 1 1 0 010-2z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" class="w-9 h-9 rounded-full grid place-items-center bg-neutral-500/40 border border-neutral-400 hover:bg-neutral-500 transition">
              <!-- YouTube -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-zinc-100" viewBox="0 0 24 24"><path d="M23.5 7.6a3 3 0 00-2.1-2.1C19.2 5 12 5 12 5s-7.2 0-9.4.5A3 3 0 00.5 7.6 31 31 0 000 12a31 31 0 00.5 4.4 3 3 0 002.1 2.1C4.8 19 12 19 12 19s7.2 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-4.4zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
          </div>

          <div class="mt-8">
            <h3 class="text-xl font-semibold text-yellow-300">Der Schlüsseldienst mit den Karos</h3>
            <p class="mt-3 text-zinc-300 leading-relaxed">
              Sie haben sich ausgesperrt oder eingesperrt? Schlüssel verloren, verlegt oder sogar abgebrochen?
              Sie wissen nicht mehr weiter? Nur keine Panik, alles was zugeht, geht auch wieder auf!
            </p>
            <a href="#" class="inline-block mt-3 underline hover:text-yellow-300">Weiterlesen</a>
          </div>
        </aside>
      </div>

    </footer>
</div>

<div class="bg-[#888888] text-zinc-100">
  <div class="max-w-7xl mx-auto px-6 pt-6">
    <!-- thin top line -->
    <div class="h-px bg-neutral-400/70 max-w-[95%] mx-auto"></div>

    <!-- services line -->
    <p class="mt-6 text-center font-semibold text-zinc-200 text-sm sm:text-base md:text-xl leading-relaxed tracking-wide">
      24h-Notdienste • Einbruchschutz • Alarmsysteme • Schließanlagen • Sicherheitsberatung •
      Notöffnungen aller Art • Fahrzeugöffnung (alle Marken) • Tresoröffnung • Videoüberwachung •
      Aufsperrdienst • Schlossnotdienst
    </p>

    <!-- centered logo -->
    <div class="mt-6 mb-8 flex justify-center">
      <!-- Replace with your asset -->
      <img src="/docs/assets/images/footerlogo.png" alt="OPEN Odenwald Team" class="h-12 md:h-14 w-auto" />
    </div>
  </div>

  <!-- bottom bar -->
  <div class="bg-[#a0a0a0]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center items-center justify-center md:justify-between">
      <p class="text-sm md:text-base">
        © 2013 - <span id="year"></span> - E. Richter Sicherheitstechnik
      </p>

      <nav class="text-sm md:text-base flex items-center flex-wrap">
        <a href="#kontakt" class="hover:underline">Kontakt</a>
        <span class="px-2">|</span>
        <a href="/impressum.html" class="hover:underline">Impressum</a>
        <span class="px-2">|</span>
        <a href="#datenschutz" class="hover:underline">Datenschutzerklärung</a>
      </nav>
    </div>
  </div>
</div>

`

document.getElementById('year').textContent = new Date().getFullYear();
