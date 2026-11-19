# ROADMAP — Lanzamiento de `{ locro. }`

Plan de gestión maestro para lanzar la agencia `{ locro. }` (`ia & software a medida_`), organizado en **4 tracks paralelos** con entregables accionables.

**Convención de estado:**
- `[ ]` Pendiente
- `[/]` En progreso
- `[x]` Completado

---

## Track 1 — Marca & Assets (`brand/`, `docs/`) — ✅ CERRADO
**Objetivo:** Cerrar todos los entregables de identidad visual y kits listos para web, redes y operación comercial.

- [x] Formalizar Manual de Marca v1 (`docs/manual-de-marca.md`)
- [x] Crear tokens CSS oficiales (`brand/tokens.css`)
- [x] Generar SVG base de logotipo `{ locro. }` (`brand/assets/logo.svg`) y monograma `{ l. }` (`brand/assets/icon.svg`)
- [x] Generar variantes adicionales de logo en SVG:
  - [x] Logotipo versión fondo oscuro (`brand/assets/logo-dark.svg`)
  - [x] Logotipo con descriptor `ia & software a medida_` (`brand/assets/logo-descriptor.svg` y `brand/assets/logo-descriptor-dark.svg`)
  - [x] Versiones con tipografía convertida a curvas (outlines) sin dependencia de Google Fonts (`logo-outlined.svg`, `logo-dark-outlined.svg`, `logo-descriptor-outlined.svg`, `icon-outlined.svg`)
- [x] Vectorizar y optimizar el **isotipo principal** (cazuela minimalista de circuito + 5 rombos `#EBA83A` + vapor binario `#FF5A00` + chispas IA, escala mínima `120px`) en `brand/assets/isotipo.svg`
- [x] Exportar paquete de favicons y Open Graph (`brand/assets/favicon.ico`, `brand/assets/apple-touch-icon.png` 180×180, `brand/assets/og-image.png` 1200×630)
- [x] Diseñar plantilla de **propuesta comercial** (`docs/plantilla-propuesta-comercial.md`) aplicando paleta, tipografías y tono de voz
- [x] Armar **firma de mail** HTML/texto (`brand/firma-mail.html` y `brand/firma-mail.txt`) para `somoslocro@gmail.com` y cuentas `@locro.com.ar`

---

## Track 2 — Web (`apps/web` — `locro.com.ar`) — `[/]` En progreso (listo para deploy)
**Objetivo:** Publicar la landing page oficial de `locro.com.ar` con estética Bento Grid, mensaje claro para Pymes y captura de leads automatizada.

- [x] Inicializar proyecto Next.js (App Router) + TypeScript + Tailwind CSS en `apps/web`
- [x] Configurar Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`) y conectar `brand/tokens.css` (sincronizado en `apps/web/src/styles/tokens.css`)
- [x] Definir arquitectura de información y copy final de la landing:
  - [x] Hero con propuesta de valor directa, CTA a diagnóstico e isotipo/visual Bento (`HeroSection.tsx`)
  - [x] Sección "Problemas reales que ordenamos" + herramientas actuales (`ProblemsSection.tsx`)
  - [x] Sección "Qué armamos" en Bento Grid (4 packs + diagrama de nodos en `ServicesBento.tsx`)
  - [x] Sección "Cómo trabajamos" (`// 01 diagnóstico` -> `// 02 prototipo` -> `// 03 integración` en `ProcessSection.tsx`)
  - [x] Formulario de contacto / diagnóstico breve (`ContactSection.tsx`)
  - [x] Footer con canales (`@somoslocro`, `somoslocro@gmail.com`) y copyright (`Footer.tsx`)
- [x] Conectar formulario de contacto con endpoint API (`POST /api/leads`) listo para webhook de n8n (con validación, honeypot anti-spam y `.env.example`)
- [x] Configurar SEO básico: metadata, Open Graph (`/og-image.png`), JSON-LD, `sitemap.xml` y `robots.txt`
- [ ] Configurar dominio `locro.com.ar`, SSL y deploy productivo en Vercel (Root Directory: `apps/web`)
- [ ] Integrar analítica liviana (Plausible / PostHog / GA4) y verificar eventos de conversión

---

## Track 3 — Comercial & Redes (`@somoslocro`, `docs/`)
**Objetivo:** Definir oferta comercial empaquetada, proceso de venta consultiva para Pymes y presencia inicial en redes.

- [x] Definir propuesta de valor, ICP Pyme, catálogo de **servicios empaquetados** y proceso de diagnóstico de 20 min en `docs/propuesta-valor.md`
- [x] Definir bio, pilares editoriales y grilla de las **primeras 6 placas de lanzamiento** en `docs/redes-y-contenido.md`
- [ ] Configurar perfiles sociales `@somoslocro` (Instagram, LinkedIn, X según prioridad): avatar `{ l. }`, bio oficial y link a `locro.com.ar`
- [ ] Diseñar las 6 placas base de lanzamiento siguiendo el sistema Bento Grid (`brand/assets/`)
- [ ] Validar precios orientativos y armar versión final editable de la propuesta comercial

---

## Track 4 — Operación & Automatización
**Objetivo:** Que `{ locro. }` opere con el ejemplo desde el día 1: captura, registro y seguimiento de leads 100% automatizados.

- [ ] Elegir y configurar stack de **CRM liviano** (ej. Notion, Airtable o HubSpot Free) con pipeline simple: `Nuevo` -> `Contactado` -> `Diagnóstico agendado` -> `Propuesta enviada` -> `Ganado / Perdido`
- [ ] Configurar herramienta de agenda para diagnósticos de 20 min (Cal.com / Calendly)
- [ ] Construir flujo principal en **n8n** para captura de leads:
  - [ ] Recibir webhook desde `locro.com.ar`
  - [ ] Validar/normalizar datos del lead
  - [ ] Crear registro en CRM
  - [ ] Enviar confirmación automática al prospecto con link de agenda
  - [ ] Notificar internamente al equipo (email / Telegram / WhatsApp / Slack)
- [ ] Armar flujo de **seguimiento automático** (recordatorio interno a las 48h si el lead no agendó o no recibió respuesta)
- [ ] Documentar variables de entorno (`.env.example`) y runbook operativo del flujo de leads

---

## Backlog — Fase 2 (Post-lanzamiento)
- [ ] Evaluar adquisición y redirección de dominio `.ai`
- [ ] Publicar primeros 2–3 casos de estudio con métricas reales de clientes
- [ ] Implementar casillas de correo corporativo (`hola@locro.com.ar`) con SPF/DKIM/DMARC
- [ ] Crear calculador interactivo de "horas ahorradas" en `locro.com.ar`
- [ ] Armar newsletter o artículos técnicos cortos orientados a dueños de Pymes
