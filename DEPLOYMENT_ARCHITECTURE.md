# 🏗️ Arquitectura de Despliegue: Vercel + Firebase/GCP

## Visión General

Tu proyecto está configurado con una **arquitectura moderna y escalable**:

```
┌─────────────────────────────────────────────────────────────┐
│                     USUARIO (Cliente)                        │
└────────────────────┬────────────────────────────────────────┘
                     │
          ┌──────────▼──────────┐
          │  VERCEL (Frontend)  │
          │  - Next.js App      │
          │  - CDN Global       │
          │  - Auto Scaling     │
          │  - 180+ ubicaciones │
          └──────────┬──────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
   ┌────▼────┐  ┌───▼────┐  ┌───▼────┐
   │ Firebase │  │  GCP   │  │Solana  │
   │Firestore │  │ Cloud  │  │Mainnet │
   │Analytics │  │Functions│ │(RPC)   │
   │Storage   │  │  Cloud  │  └────────┘
   │          │  │  Tasks  │
   └──────────┘  └────────┘
```

---

## 🌐 Capa 1: Frontend (Vercel)

### ¿Por qué Vercel?
- ✅ Optimizado para Next.js (creador oficial)
- ✅ Despliegue automático desde GitHub
- ✅ CDN global en 180+ ubicaciones
- ✅ HTTPS automático con Cloudflare
- ✅ Auto scaling sin configuración
- ✅ Preview deployments (git push = instant preview)
- ✅ Serverless functions para API routes

### Estructura del Frontend
```
luxorpage/
├── app/                    # App Router de Next.js
│   ├── [locale]/          # Rutas i18n (en, es, fr, etc)
│   └── api/               # API routes (serverless)
├── components/            # Componentes React
├── lib/                   # Utilities (SIN Firebase client)
├── public/                # Assets estáticos
├── next.config.mjs        # Config de Next.js
├── vercel.json            # Config de despliegue
└── package.json           # Dependencias
```

### Variables de Entorno (Vercel)
```env
NEXT_PUBLIC_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
```

Solo variables **públicas** (NEXT_PUBLIC_*) en el frontend.

---

## 🔥 Capa 2: Firebase/GCP (Backend)

### Servicios que Usarás

#### 1. **Firestore Database**
```javascript
// Para almacenar:
// - Datos de usuarios
// - Configuraciones
// - Historiales de transacciones
// - Analytics custom

collection('users')
  ├── {userId}
  │   ├── wallet
  │   ├── profile
  │   └── transactions

collection('analytics')
  └── {eventId}
      ├── timestamp
      ├── action
      └── metadata
```

#### 2. **Firebase Storage**
```
Para archivos:
- Documentos de identidad
- Logos de integraciones
- Backups
```

#### 3. **Cloud Functions**
```
Funciones serverless para:
- Procesar webhooks de Solana
- Actualizar datos en batch
- Enviar notificaciones
- Integración con APIs externas
```

#### 4. **Cloud Tasks**
```
Para tareas programadas:
- Actualizar precios de tokens
- Hacer cleanup de datos
- Reportes diarios
```

#### 5. **Cloud Run** (Opcional)
```
Para aplicaciones más complejas:
- API REST personalizado
- WebSockets
- Procesamiento de datos pesado
```

---

## 📡 Cómo Se Comunican (Vercel ↔ Firebase)

### Opción A: Mediante APIs REST (RECOMENDADO)

**Frontend (Vercel):**
```typescript
// luxorpage/app/api/users/route.ts
import { getFirestore } from 'firebase-admin/firestore';

export async function GET(request: Request) {
  const firestore = getFirestore();
  const snapshot = await firestore.collection('users').limit(10).get();
  return Response.json({ users: snapshot.docs.map(d => d.data()) });
}
```

**Flujo:**
```
User → Vercel Frontend → Vercel API Route → Firebase Admin SDK → Firestore
```

### Opción B: Cliente Cloud Firestore (Para datos en tiempo real)

Si necesitas actualizaciones en tiempo real:
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ... otras configs públicas
});

const db = getFirestore(app);
```

---

## 🔐 Credenciales y Seguridad

### Firebase Project Setup

1. **Accede a**: https://console.firebase.google.com/
2. **Crea proyecto** o usa existente
3. **Obtén credenciales:**
   - Project ID
   - API Key
   - Web App Config

### Archivos de Credenciales

```bash
# IMPORTANTE: Nunca commit este archivo a Git!
~/.config/gcloud/application_default_credentials.json

# Exclusión en .gitignore (ya configurada):
.env
.env.local
.env.*.local
secrets/
```

### Variables de Entorno en Vercel

1. Ve a: https://vercel.com/admluxorsys/luxorpage/settings/environment-variables
2. Agrega en **Vercel Settings → Environment Variables**:

```
FIREBASE_PROJECT_ID=tu-project-id
FIREBASE_PRIVATE_KEY=tu-private-key
FIREBASE_CLIENT_EMAIL=tu-client-email
```

**Nunca** en `.env` local o GitHub.

---

## 🚀 Flujo de Despliegue

### 1. Desarrollo Local

```bash
cd luxorpage
npm install
npm run dev
# Accede a http://localhost:3000
```

### 2. Push a GitHub

```bash
git add .
git commit -m "feature: agregar dashboard"
git push origin main
```

### 3. Vercel Detecta y Despliega Automáticamente

```
GitHub Push → Vercel Webhook → Build → Test → Deploy
                                    ↓
                            Disponible en:
                        https://luxorpage.vercel.app
```

### 4. Preview Deployments (Automático)

Cada PR crea una preview URL única:
```
https://luxorpage-git-feature-xyz-admluxorsys.vercel.app
```

---

## 📊 Escalamiento Automático

### Vercel Escala Automáticamente:
- ✅ Pods por demanda
- ✅ CDN distribuido
- ✅ Database connection pooling

### Firebase Escala Automáticamente:
- ✅ Firestore: billonarios de documentos
- ✅ Cloud Functions: 100+ concurrentes
- ✅ Cloud Storage: TB de datos

---

## 🔍 Monitoring y Logs

### Vercel
```
https://vercel.com/admluxorsys/luxorpage
→ Logs
→ Deployments
→ Analytics (Real User Monitoring)
```

### Firebase
```
https://console.firebase.google.com/
→ Cloud Firestore → Logs
→ Cloud Functions → Logs
→ Monitoring (Grafana)
```

---

## 📝 Checklist de Configuración

### ✅ Frontend (Vercel)
- [x] `next.config.mjs` limpio (sin Firebase Storage)
- [x] `vercel.json` optimizado
- [x] `apphosting.yaml` eliminado
- [ ] Variables de entorno configuradas en Vercel
- [ ] GitHub conectado a Vercel

### ✅ Backend (Firebase/GCP)
- [ ] Proyecto Firebase creado
- [ ] Firestore Database habilitada
- [ ] Cloud Functions habilitadas
- [ ] Credenciales en Vercel Environment Variables
- [ ] Reglas de Firestore configuradas

### ✅ Solana Integration
- [ ] RPC URL configurada (mainnet)
- [ ] Wallet adapter funcional

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev              # Inicia servidor dev

# Construcción
npm run build            # Build production
npm run build && npm run postbuild  # Build + sitemap

# Lint
npm run lint             # ESLint check

# Despliegue
git push origin main     # Vercel se despliega automáticamente
```

---

## 📚 Documentación Oficial

- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [GCP Documentation](https://cloud.google.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

---

## ⚠️ Cosas Importantes

1. **Variables de entorno públicas** (NEXT_PUBLIC_*) solo en frontend
2. **Credenciales sensibles** solo en Vercel/GCP, nunca en Git
3. **API routes en Vercel** pueden usar credenciales sin exponerlas
4. **Firestore reglas** deben restricciones de lectura/escritura
5. **Cloud Functions** escalan automáticamente (máximo 540 segundos)

---

**Próximo paso:** Conectar tu repo a Vercel y configurar variables de entorno. 🚀
