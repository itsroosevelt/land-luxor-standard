# 🚀 Guía de Despliegue en Vercel

## 🎯 En 5 Minutos

```bash
# 1. Git push
git add .
git commit -m "setup: configure for Vercel deployment"
git push origin main

# 2. Ve a https://vercel.com/new
# 3. Importa repo
# 4. Configura env vars (mira ENV_SETUP_GUIDE.md)
# 5. Deploy

# ✅ Listo! URL: https://luxorpage.vercel.app
```

---

## 📋 Prerequisitos

### Necesitas:
1. **Cuenta GitHub** ✅ (ya tienes)
2. **Cuenta Vercel** (gratis)
3. **Repositorio en GitHub** ✅ (luxorpage está aquí)

---

## 🔗 Paso 1: Conectar a Vercel

### Opción A: Desde Vercel Dashboard (Recomendado)

1. **Ve a**: https://vercel.com/new
2. **Haz click en**: "Import Git Repository"
3. **Selecciona**: GitHub
4. **Busca**: `luxorpage`
5. **Haz click**: "Import"

### Opción B: Desde CLI

```bash
npm i -g vercel
cd /home/itsroosevelt_/excelsior-project/luxorpage
vercel
```

Responde las preguntas:
```
? Set up and deploy? (Y/n) Y
? Which scope? admluxorsys
? Link to existing project? N
? What is your project's name? luxorpage
? In which directory is your code? ./
? Want to override? (Y/n) Y
? Auto-build? Y
```

---

## ⚙️ Paso 2: Configurar Variables de Entorno

### En el Dashboard de Vercel:

1. **Ve a**: https://vercel.com/dashboard
2. **Selecciona**: `luxorpage`
3. **Settings** → **Environment Variables**
4. **Agrega cada variable**:

```
Variable Name          | Value                                | Environments
─────────────────────────────────────────────────────────────────────────
NEXT_PUBLIC_RPC_URL    | https://api.mainnet-beta.solana.com | Production, Preview, Development
NEXT_PUBLIC_SOLANA_NW  | mainnet-beta                         | Production, Preview, Development
```

### Si usas Firebase:

```
Variable Name                            | Value              | Environments
────────────────────────────────────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_PROJECT_ID          | tu-project-id      | Production, Preview, Development
NEXT_PUBLIC_FIREBASE_API_KEY             | AIz...             | Production, Preview, Development
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN         | tu-proyecto.fb.com | Production, Preview, Development
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET      | tu-proyecto.appspot.com | Production, Preview
FIREBASE_PRIVATE_KEY                     | -----BEGIN...      | Production Only
FIREBASE_CLIENT_EMAIL                    | firebase-adminsdk@  | Production Only
FIREBASE_PROJECT_ID                      | tu-project-id      | Production Only
```

### Orden recomendado:
```
1. Agrega PUBLIC vars (available en todos)
2. Agrega vars privadas solo en Production
3. Guarda cambios
```

---

## 🏗️ Paso 3: Configurar Build

### Vercel detecta Next.js automáticamente:

```
Framework: Next.js
Build Command: npm run build && npm run postbuild
Output Directory: .next
Install Command: npm install
Node Version: 18.x (recomendado) o 20.x
```

✅ No necesitas cambiar nada (ya está en `vercel.json`)

---

## 📊 Paso 4: Entender el Flujo de Despliegue

### Workflow automático:

```
1. Git Push
   └─→ GitHub recibe código
   
2. Webhook → Vercel
   └─→ Vercel recibe notificación
   
3. Vercel Build
   └─→ Instala dependencias
   └─→ Corre: npm run build && npm run postbuild
   └─→ Genera: .next/
   
4. Vercel Deploy
   └─→ Despliega a CDN global
   └─→ 180+ ubicaciones
   
5. URL asignada
   └─→ https://luxorpage.vercel.app (producción)
   └─→ https://luxorpage-git-branch.vercel.app (preview)
```

---

## 🔍 Monitorear Despliegue

### En Dashboard:

1. **Deployments** tab
2. Ver lista de despliegues con estado:
   - ✅ Ready (completado)
   - ⏳ Building (en progreso)
   - ❌ Failed (error)

### Inspeccionar logs:

```
Deployments → [Selecciona deployment] → Logs → Build/Production
```

### Búsqueda común de logs:

```
ERROR    → Problemas en build/runtime
installed → npm install completó
Built    → Compilación lista
```

---

## 📱 Preview Deployments

### Automático en PRs:

Cuando haces push a una rama (no main):

```bash
git checkout -b feature/new-component
git push origin feature/new-component
```

Vercel crea URL única:
```
https://luxorpage-git-feature-new-component-admluxorsys.vercel.app
```

### Ventajas:
- ✅ Compartir cambios sin publicar
- ✅ Todos ven versión en vivo
- ✅ Facilita reviews
- ✅ Se elimina cuando mergeas o cierras PR

---

## 🌍 Dominios Personalizados

### Agregar dominio:

1. **Settings** → **Domains**
2. **Add Domain** → escribe tu dominio
3. **Add** → Vercel te da nameservers
4. **En tu registrador**:
   - Solana.com, Namecheap, etc.
   - Actualiza nameservers
5. **Espera** (5-48 horas para DNS)

### Ejemplo:
```
luxorpage.luxor.com → apunta a Vercel
```

---

## 🔒 Variables Secretas de Producción

### Patrón seguro:

```
Development (.env.local):
└─ NEXT_PUBLIC_RPC_URL=devnet
└─ API calls a testnet

Production (Vercel):
└─ NEXT_PUBLIC_RPC_URL=mainnet
└─ API calls a mainnet
```

### Nunca en Git:
```
❌ .env (local)
❌ .env.local
❌ secrets.json
❌ firebase-key.json

✅ Usa Vercel Environment Variables
```

---

## 🔄 Redeploy Manual

Si necesitas redeployar sin cambios:

1. **Deployments** tab
2. **Selecciona deployment**
3. **Redeploy** (botón superior)

---

## 🚨 Troubleshooting

### Build fails con error de dependencias

**Error**: `npm ERR! Cannot find module 'firebase'`

**Solución**:
```bash
# Local: instala dependencias faltantes
npm install firebase firebase-admin

# Vercel: automático con package.json
git push  # Vercel re-builds
```

### Variables de entorno no cargan

**Error**: `process.env.FIREBASE_PROJECT_ID is undefined`

**Solución**:
1. Verifica en Vercel Settings → Env Vars
2. Asegúrate que está en "Production"
3. Redeploy

### Build timeout (>60 segundos)

**Error**: `Build timed out after 1m`

**Solución**:
1. Optimiza `next.config.mjs` (quita configuraciones innecesarias)
2. Reduce tamaño de `node_modules` (audita dependencias)
3. Contacta Vercel si persiste

---

## 📈 Performance Optimization

### Caching automático:

Tu `next.config.mjs` ya está optimizado:
```javascript
images: {
    formats: ['image/avif', 'image/webp'],  // Formatos optimizados
},
```

### CDN Vercel cacheará:
- HTML estático (60 segundos)
- Imágenes (365 días)
- JS/CSS (inmutable)

---

## 🆘 Soporte y Contacto

### Vercel Help:
- Dashboard → Help/Support
- https://vercel.com/support
- Community: https://vercel.com/community

### Tu repositorio:
```
admluxorsys/excelsior-project
└─ luxorpage/
```

---

## ✅ Checklist Final

- [ ] Repositorio en GitHub
- [ ] Cuenta Vercel creada (vercel.com)
- [ ] Repositorio importado en Vercel
- [ ] Variables de entorno configuradas
- [ ] Primer deploy completado
- [ ] URL accesible: https://luxorpage.vercel.app
- [ ] Dominio personalizado (opcional)
- [ ] Analytics monitoreando

---

## 🎉 ¡Listo para producción!

Una vez completado:

```bash
# Ver tu app en vivo
open https://luxorpage.vercel.app

# Seguimiento de cambios
git push origin main  # Auto-deploy a Vercel
```

**Próximos pasos**:
1. Configurar Firestore en Firebase Console
2. Crear Cloud Functions si necesitas backend
3. Configurar Solana RPC (mainnet)

🚀 **¡Tu infraestructura está lista!**
