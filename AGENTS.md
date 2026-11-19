# AGENTS.md — Reglas de Contexto y Arquitectura de `{ locro. }`

Este archivo es la **fuente de verdad operativa** para cualquier persona o agente de IA que trabaje en este repositorio. Leelo antes de proponer cambios, diseñar pantallas, redactar copy o escribir código.

---

## 1. Resumen del Negocio

- **Marca:** `{ locro. }` (Locro)
- **Descriptor:** `ia & software a medida_`
- **Dominio activo:** `locro.com.ar` (`.ai` queda en backlog para fase posterior)
- **Canales oficiales:** `@somoslocro` · `somoslocro@gmail.com`
- **Propuesta de valor:** Desarrollo de software a medida, implementación de agentes de Inteligencia Artificial y automatización de procesos operativos para Pymes (foco inicial en Argentina).
- **Metáfora de marca:** Así como el locro integra ingredientes distintos en un plato contundente que rinde, `{ locro. }` integra sistemas, datos e IA sobre las herramientas que la Pyme ya usa, sin obligarla a tirar todo y empezar de cero.

---

## 2. Reglas de Marca Innegociables

> La documentación completa está en [`docs/manual-de-marca.md`](docs/manual-de-marca.md) y los tokens listos para código en [`brand/tokens.css`](brand/tokens.css).

### Estética
- **Estilo:** Flat design moderno, luminoso, cálido y contrastado (estética fintech B2B con micro-detalles de código). Layout basado en **Bento Grid**.
- **Prohibiciones absolutas:**
  - **NO** usar negro puro (`#000000`) en textos, fondos ni sombras. Usar Marrón Tierra (`#3A2212`).
  - **NO** usar estética cyberpunk, neón, modo oscuro futurista ni glow artificial.
  - **NO** usar degradados pesados.
  - **NO** usar fotos reales de comida ni ilustraciones folclóricas literales.

### Paleta Oficial
| Token | Nombre | Hex | Uso principal |
| :--- | :--- | :--- | :--- |
| `--locro-bg` | Crema Caldo | `#F9F4EB` | Fondo principal de página |
| `--locro-surface` | Blanco Puro | `#FFFFFF` | Cards, módulos Bento, formularios |
| `--locro-border` | Borde Arena | `#E6DDD0` | Divisores, bordes de cards (`1px`) |
| `--locro-ink` | Marrón Tierra | `#3A2212` | Texto principal, trazos, bloques oscuros |
| `--locro-ink-muted` | Marrón Suave | `#6E5A4F` | Texto secundario, subtítulos, labels |
| `--locro-accent` | Naranja Vibrante | `#FF5A00` | CTAs primarios, llaves `{ }`, punto `.`, vapor binario |
| `--locro-maize` | Amarillo Maíz | `#EBA83A` | Badges, rombos de datos, cards de acento |

### Tipografías (Google Fonts)
- **Display / Marca:** `Space Grotesk` (`600`, `700`)
- **Cuerpo / UI:** `Inter` (`400`, `500`, `600`)
- **Técnica / Código:** `JetBrains Mono` (`400`, `500`)

### Sistema de Logos
1. **Logotipo principal:** `{ locro. }` — llaves y punto en `#FF5A00`; `locro` en `#3A2212` (o `#F9F4EB` sobre fondo `#3A2212`). Asset: [`brand/assets/logo.svg`](brand/assets/logo.svg).
2. **Logotipo con descriptor:** `{ locro. }` + `ia & software a medida_` debajo en `JetBrains Mono`.
3. **Isotipo principal:** Cazuela minimalista sin asas con trazos y nodos de circuito (`#3A2212`), 5 rombos de maíz/datos (`#EBA83A`), vapor vertical en columnas de binario (`#FF5A00`) y chispas IA (`#EBA83A` / `#FF5A00`). **Escala mínima obligatoria: `120px` de alto.**
4. **Monograma / Avatar:** `{ l. }` en cuadrado con bordes redondeados (`20%`) sobre `#3A2212`. **Uso obligatorio en favicon y tamaños pequeños (< 120px).** Asset: [`brand/assets/icon.svg`](brand/assets/icon.svg).

### Tono de Voz
- **Voseo argentino profesional**, claro, directo y sin humo tech.
- Hablar de problemas concretos (horas perdidas, planillas manuales, datos duplicados, atención lenta) y soluciones medibles.
- Evitar buzzwords vacíos ("disruptivo", "sinergia", "revolucionario", "transformación digital 360").

---

## 3. Stack Técnico Preferido

- **Web (`apps/web`):**
  - **Framework:** Next.js (App Router)
  - **Lenguaje:** TypeScript (modo estricto)
  - **Estilos:** Tailwind CSS consumiendo los tokens de `brand/tokens.css`
  - **Deploy:** Vercel (dominio `locro.com.ar`)
- **Automatizaciones (Fase operativa):**
  - **Orquestador:** n8n (webhooks, captura de leads, integraciones CRM, notificaciones).
  - Versionar flujos JSON sanitizados (sin credenciales ni secrets) cuando se inicie la pata de automatizaciones.
- **Gestión & Documentación (`docs/`):**
  - Markdown en el repo (`docs/manual-de-marca.md`, `docs/propuesta-valor.md`, `docs/redes-y-contenido.md`, `ROADMAP.md`).

---

## 4. Estructura del Repositorio

```text
locro/
├── AGENTS.md                  # Reglas permanentes y contexto para el agente
├── ROADMAP.md                 # Plan de proyecto, hitos y backlog por fases
├── docs/
│   ├── manual-de-marca.md     # Manual completo (identidad, tono, UI, reglas)
│   ├── propuesta-valor.md     # Oferta comercial, servicios y perfil de cliente Pyme
│   └── redes-y-contenido.md   # Pilares de contenido para @somoslocro
├── brand/
│   ├── assets/                # Logotipo, monograma, isotipo final (PNG/SVG), favicon, placas base
│   └── tokens.css             # Variables oficiales reutilizables en cualquier app
└── apps/
    └── web/                   # Pata web (Next.js + Tailwind para locro.com.ar)
```

---

## 5. Convenciones del Repositorio

1. **Fuente única de verdad:**
   - Cualquier cambio visual debe actualizar primero `brand/tokens.css` y `docs/manual-de-marca.md`.
   - No hardcodear colores fuera de la paleta oficial en componentes web.
2. **Nomenclatura:**
   - Archivos y carpetas de documentación/assets: `kebab-case` (ej. `manual-de-marca.md`, `logo-dark.svg`).
   - Componentes React/Next.js: `PascalCase` (ej. `BentoCard.tsx`).
   - Variables CSS: prefijo `--locro-*` (excepto `--font-*` para familias tipográficas).
3. **Commits:**
   - Usar Conventional Commits concisos: `feat:`, `fix:`, `docs:`, `style:`, `chore:`, `refactor:`.
   - Ejemplos: `docs(brand): cerrar manual de marca v1`, `feat(web): agregar seccion hero bento`.
4. **Seguridad y secretos:**
   - Nunca commitear `.env`, API keys, webhooks privados ni tokens de n8n/CRM.
   - Proveer siempre `.env.example` cuando se agreguen integraciones.
5. **Actualización del Roadmap:**
   - Al completar una tarea de `ROADMAP.md`, marcar `[x]` y registrar brevemente cualquier decisión técnica relevante en la documentación correspondiente.
