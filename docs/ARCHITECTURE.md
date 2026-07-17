# Arquitetura — Elva Fonseca

## Stack e decisões

| Tema | Decisão | Motivo |
| --- | --- | --- |
| Framework | Astro 7, **output estático, sem adapter** | Site de fundação: HTML estático, JS só onde isolado |
| CSS | Tailwind v4 (`@tailwindcss/vite`), CSS-first via `@theme` | Tokens + raiz fluida num só arquivo (`global.css`) |
| Motion | GSAP + ScrollTrigger via `src/lib/gsap.ts` | Helper obrigatório com `prefers-reduced-motion` |
| Navegação | **MPA puro** (sem `<ClientRouter />`) | Zero cleanup de ScrollTrigger entre rotas; View Transitions só se virarem requisito |
| CMS | Sanity embutido (`@sanity/astro`, studio em `/admin`) | Sem monorepo para projeto deste porte |
| Donate/Contact | Provedores estáticos (Stripe Payment Link / Web3Forms etc.) | Mantém build 100% estático; adapter só se surgir rota server real |
| Deploy | A definir (Vercel provável) | Estático → qualquer host serve |

## Rotas

`/` `/about` `/programs` `/volunteer` `/donate` `/stories` `/contact` + `404` + `/admin` (studio)

## Pastas

```
src/
  layouts/BaseLayout.astro     # html/head/SEO/Header/Footer
  pages/                       # 7 rotas + 404 (stubs até Fase 3)
  components/
    global/                    # Header, Footer, SEO; Fase 2: Button, Container, Section, cards…
    home/                      # Fase 3, seção a seção
  styles/global.css            # raiz fluida + @theme (fonte: DESIGN_TOKENS.md)
  lib/
    gsap.ts                    # createMotion() — todo motion passa por aqui
    sanity.ts                  # client GROQ (sanity:client)
  animations/                  # Fase 3+ (ex.: home-hero.ts)
sanity/schemas/                # siteSettings (Fase 4: stat, program, faqItem, story, homePage)
sanity.config.ts               # studio embutido
docs/                          # este arquivo, FLUID_DESIGN_SYSTEM, DESIGN_TOKENS
```

## Sanity

- Env: `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET` (ver `.env.example`).
  Criar projeto: `npx sanity init` logado, depois preencher `.env`.
- `siteSettings` (singleton): nav, footer, social, donate URL, contato — evita hardcode global.
- Fase 4 adiciona schemas de conteúdo e o wire começa por **stats e programs** (pedido do brief).

## Ordem de fases (não pular seções)

Foundation ✅ → Fase 2 globais → Fase 3 Home seção a seção → Fase 4 Sanity wire → Fase 5 motion completo.
Cada fase só começa com a anterior aprovada. Detalhe no plano aprovado e em AGENTS.md.

## Performance (rules)

- GSAP: import só em `<script>` client; nunca hidratar Header/Footer inteiros
- Imagens: `astro:assets` para locais; Sanity CDN + width/height para CMS
- Fontes: self-host, subset, só pesos usados, preload do peso crítico
- Sitemap exclui `/admin`; robots.txt bloqueia `/admin`
