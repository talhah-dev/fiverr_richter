const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <nav class="w-full z-40">
    <!-- TOP BAR (MOBILE ONLY) -->
    <div class="bg-[#ffea00] lg:block hidden border-t-4 border-[#6b6b6b]">
      <div class="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1.5 px-3">
        <!-- Social icons (left) -->
        <div class="flex items-center gap-2">
          <a href="#" class="w-8 h-8 rounded-full bg-[#777] grid place-items-center text-white"><i class="fa-brands fa-facebook-f text-sm"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-[#777] grid place-items-center text-white"><i class="fa-brands fa-x-twitter text-sm"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-[#777] grid place-items-center text-white"><i class="fa-brands fa-instagram text-sm"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-[#777] grid place-items-center text-white"><i class="fa-brands fa-youtube text-sm"></i></a>
        </div>

        <!-- Notdienst (center) -->
        <a href="tel:+491636513886" class="justify-self-start flex items-center gap-2 text-black font-extrabold tracking-tight">
          <i class="fa-solid fa-phone text-red-600 text-lg"></i>
          <span class="text-red-600">Notdienst</span>
          <span>0163 - 65 13 886</span>
        </a>

        <!-- Search (right) -->
        <form class="justify-self-end flex items-stretch">
          <input type="text" placeholder="" class="h-7 w-36 sm:w-44 bg-white border border-black/20 outline-none px-2 text-sm">
          <button type="submit" class="h-7 px-2 bg-[#dfcf39] border border-black/20 -ml-[1px]">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- MAIN (GREY) -->
    <div class="bg-[#a4a4a4]">
      <div class="max-w-7xl mx-auto w-full flex items-center justify-between px-3 lg:px-4">
        <!-- Logo/Title -->
        <a href="/index.html" class="py-5">
          <div class="leading-tight">
            <div class="text-2xl font-extrabold text-black">E. Richter</div>
            <div class="text-2xl font-extrabold text-[#ffe44d] drop-shadow">Sicherheitstechnik</div>
          </div>
        </a>

        <!-- Desktop menu -->
        <ul class="hidden lg:flex items-stretch text-[#ffe44d] font-semibold tracking-wide uppercase">
          <li class="relative"><a href="/index.html" class="px-6 hover:bg-[#ffea00] hover:text-black transition-colors flex items-center">Home</a></li>

          <li class="relative group z-40">
            <button class="px-6 h-full flex items-center hover:bg-[#ffea00] hover:text-black transition-colors">Leistungen</button>
            <div class="absolute left-0 top-full hidden group-hover:flex flex-col w-72 bg-black text-white">
              <a href="/sicherungstechnik.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Sicherungstechnik</a>
              <a href="/alarmanlagen-einfamilienhaus.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Alarmanlage</a>
              <a href="/videoueberwachung.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Videoüberwachung</a>
              <a href="/notoeffnungen.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Notöffnungen</a>
              <a href="/einbruchschaden-beseitigung.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Einbruchschaden-Beseitigung</a>
            </div>
          </li>

          <li class="relative group z-40">
            <button class="px-6 h-full flex items-center hover:bg-[#ffea00] hover:text-black transition-colors">Standorte</button>
            <div class="absolute left-0 top-full hidden group-hover:flex flex-col min-w-[22rem] bg-black text-white">
            <a href="/standorte.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Schlüsseldienst</a>
            </div>
          </li>

          <li class="relative group z-40">
            <button class="px-6 h-full flex items-center hover:bg-[#ffea00] hover:text-black transition-colors">Über uns</button>
            <div class="absolute left-0 top-full hidden group-hover:flex flex-col w-72 bg-black text-white">
              <a href="/team.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Team</a>
              <a href="/galerie-kurioses.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Galerie - Kurioses</a>
              <a href="/stellenangebote.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Stellenangebote</a>
              <a href="/aktuelle-news.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Aktuelle News</a>
              <a href="/impressum.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Impressum</a>
              <a href="/datenschutzerklaerung.html" class="p-4 hover:bg-[#ffea00] hover:text-black">Datenschutzerklärung</a>
            </div>
          </li>

          <li class="relative"><a href="/kontakt.html" class="px-6 flex items-center hover:bg-[#ffea00] hover:text-black transition-colors">Kontakt</a></li>
        </ul>

        <!-- mobile menu button -->
            <div class="lg:hidden block">
            <i class="fa-solid fa-bars mobileMenuBtn text-zinc-800 text-xl lg:hidden"></i>
            </div>
      </div>
    </div>
  </nav>

  <!-- OVERLAY (for outside-click close) -->
  <div id="menuOverlay" class="fixed inset-0 bg-black/40 opacity-0 pointer-events-none z-40 transition-opacity duration-300"></div>

  <!-- MOBILE SIDEBAR -->
  <aside id="mobileMenu"
    class="fixed left-0 top-0 bg-[#202020] text-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
    <div class="flex items-center justify-between p-5 border-b border-white/10">
      <div class="font-bold">Menü</div>
      <i class="fa-solid fa-x mobileMenuCloseBtn text-white/80 text-xl cursor-pointer"></i>
    </div>

    <nav class="py-2">
      <ul class="text-base">
        <li><a href="/index.html" class="block px-4 py-3 bg-[#494949] border-b border-black/30">Home</a></li>

        <li class="border-b border-black/30 bg-[#3e3e3e]">
          <button onclick="toggleAccordion(1)" class="w-full px-4 py-3 flex justify-between items-center">
            <span>Leistungen</span>
            <i id="icon-1" class="fa-solid fa-angle-down text-white/80 transition-transform"></i>
          </button>
          <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <ul class="bg-[#2c2c2c]">
              <li><a href="/sicherungstechnik.html" class="block px-6 py-3 border-t border-black/30">Sicherungstechnik</a></li>
              <li><a href="/alarmanlagen-einfamilienhaus.html" class="block px-6 py-3 border-t border-black/30">Alarmanlage</a></li>
              <li><a href="/videoueberwachung.html" class="block px-6 py-3 border-t border-black/30">Videoüberwachung</a></li>
              <li><a href="/notoeffnungen.html" class="block px-6 py-3 border-t border-black/30">Notöffnungen</a></li>
              <li><a href="/einbruchschaden-beseitigung.html" class="block px-6 py-3 border-t border-black/30">Einbruchschaden-Beseitigung</a></li>
            </ul>
          </div>
        </li>

        <li class="border-b border-black/30 bg-[#3e3e3e]">
          <button onclick="toggleAccordion(2)" class="w-full px-4 py-3 flex justify-between items-center">
            <span>Standorte</span>
            <i id="icon-2" class="fa-solid fa-angle-down text-white/80 transition-transform"></i>
          </button>
          <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div class="px-6 py-3 bg-[#2c2c2c] border-t border-black/30 flex items-center gap-3">
              <span><a href="/standorte.html" class="">Schlüsseldienst Suche auf unserer Seite</a></span>
            </div>
          </div>
        </li>

        <li class="border-b border-black/30 bg-[#3e3e3e]">
          <button onclick="toggleAccordion(3)" class="w-full px-4 py-3 flex justify-between items-center">
            <span>Über uns</span>
            <i id="icon-3" class="fa-solid fa-angle-down text-white/80 transition-transform"></i>
          </button>
          <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <ul class="bg-[#2c2c2c]">
              <li><a href="/team.html" class="block px-6 py-3 border-t border-black/30">Team</a></li>
              <li><a href="/galerie-kurioses.html" class="block px-6 py-3 border-t border-black/30">Galerie - Kurioses</a></li>
              <li><a href="/stellenangebote.html" class="block px-6 py-3 border-t border-black/30">Stellenangebote</a></li>
              <li><a href="/aktuelle-news.html" class="block px-6 py-3 border-t border-black/30">Aktuelle News</a></li>
              <li><a href="/impressum.html" class="block px-6 py-3 border-t border-black/30">Impressum</a></li>
              <li><a href="/datenschutzerklaerung.html" class="block px-6 py-3 border-t border-black/30">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </li>

        <li><a href="/kontakt.html" class="block px-4 py-3 bg-[#494949] border-t border-black/30">Kontakt</a></li>
      </ul>
    </nav>
  </aside>
`;

// ============== INTERACTIVITY ==============
const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtn = document.querySelector(".mobileMenuCloseBtn");
const overlay = document.getElementById("menuOverlay");

// Open/close helpers
function openMenu() {
    mobileMenu.style.width = "85%";
    overlay.classList.remove("pointer-events-none");
    overlay.classList.add("opacity-100");
}
function closeMenu() {
    mobileMenu.style.width = "0";
    overlay.classList.add("pointer-events-none");
    overlay.classList.remove("opacity-100");
}

// Open
mobileMenuBtn.forEach(btn => btn.addEventListener("click", openMenu));

// Close buttons/outside click/esc
mobileMenuCloseBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

// Close on any link click inside the menu
mobileMenu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
});

// Close if resized to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) closeMenu();
});

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    // close all accordion items
    document.querySelectorAll('[id^="content-"]').forEach(el => {
        el.style.maxHeight = "0px";
        el.previousElementSibling.querySelector("i").classList.remove("rotate-180");
    });

    // open clicked item if it's not already open
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
    }
}
