# Meraki page shell

Extract over the project root (the `mk` folder), then:

```bash
npm install          # adds tailwindcss + @tailwindcss/vite
rm src/App.css       # no longer used
npm run dev
```

## Where things live
- `src/index.css` — Tailwind v4 tokens (`@theme`): wine / gold / cream palette, fonts, easing. Strip width is `--strip-w` (58vw).
- `src/data/site.ts` — brand text, phone, WhatsApp link, nav items, background path.
- `src/lib/LenisProvider.tsx` — Lenis driven by the GSAP ticker; `useScroll().scrollTo('id')`.
- `src/components/` — `Splash`, `Background` (fixed photo), `Nav` (desktop fixed right + mobile overlay), `Logo`, `Section`.
- `src/sections/` — Hero + stubs. Add a section: create it, add it to `navItems` and `App.tsx`.

## To confirm
- WhatsApp number in `site.ts` (currently the first Instagram number).
- Logo: text wordmark for now; swap in `Logo.tsx` once a clean file is available.
