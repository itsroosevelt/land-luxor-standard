# 🔐 Guía de Variables de Entorno

## 📌 Overview

Tu proyecto necesita variables en **dos lugares**:
1. **Local** (`.env.local`) - para desarrollo
2. **Vercel** (Settings → Environment Variables) - para producción

---

## 🏠 Configuración Local (.env.local)

### Paso 1: Crear archivo `.env.local`

```bash
cd /home/itsroosevelt_/excelsior-project/luxorpage
touch .env.local
```

### Paso 2: Agregar variables públicas

```env
# .env.local
NEXT_PUBLIC_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
NEXT_PUBLIC_SOLANA_COMMITMENT=confirmed
```

### Paso 3: (Opcional) Si usas Firestore localmente

Si quieres conectar a Firebase en desarrollo:

```env
# Firebase Client Config (PUBLIC - seguro compartir)
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-project-id
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://tu-project.firebaseio.com
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcd1234

# Firebase Admin SDK (SECRETO - solo en servidor)
FIREBASE_PROJECT_ID=tu-project-id
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@tu-project.iam.gserviceaccount.com
```

---

## 🔗 Cómo Obtener las Credenciales de Firebase

### Opción 1: Desde Firebase Console (Recomendado)

1. **Accede a**: https://console.firebase.google.com/
2. **Selecciona tu proyecto**
3. **Settings (⚙️) → Project Settings**

#### Para configuración pública (NEXT_PUBLIC_*):
```
General → Tus apps → [tu app web]
```

Copias el bloque JSON:
```javascript
const firebaseConfig = {
  apiKey: "AIz...",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};
```

#### Para Admin SDK (Credenciales privadas):
```
Service Accounts → Generate New Private Key
```

Te descarga un JSON:
```json
{
  "type": "service_account",
  "project_id": "tu-proyecto",
  "private_key_id": "key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...",
  "client_email": "firebase-adminsdk-xxxxx@tu-proyecto.iam.gserviceaccount.com",
  ...
}
```

---

## 🚀 Configuración en Vercel

### Paso 1: Conectar Repositorio

1. Ve a https://vercel.com/new
2. **Importa tu repositorio** desde GitHub
3. Selecciona `luxorpage`

### Paso 2: Configurar Variables de Entorno

1. **Durante la importación inicial**: Aparece formulario de env vars
2. **O después**: Dashboard → Settings → Environment Variables

### Paso 3: Agregar Variables

```
NEXT_PUBLIC_RPC_URL = https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK = mainnet-beta

# Firebase (solo si usas desde frontend)
NEXT_PUBLIC_FIREBASE_PROJECT_ID = tu-project-id
NEXT_PUBLIC_FIREBASE_API_KEY = AIz...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 123456789
NEXT_PUBLIC_FIREBASE_APP_ID = 1:123456789:web:abcd1234

# Firebase Admin SDK (si tienes API routes)
FIREBASE_PROJECT_ID = tu-project-id
FIREBASE_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----
FIREBASE_CLIENT_EMAIL = firebase-adminsdk-xxxxx@tu-proyecto.iam.gserviceaccount.com
```

### ⚠️ Seguridad en Vercel

- Variables con `NEXT_PUBLIC_` = visibles en el navegador (OK)
- Variables sin `NEXT_PUBLIC_` = solo en servidor (seguras)
- Vercel **nunca** expone secretos en build logs
- Las credenciales se inyectan en runtime

---

## 🧪 Verificar Configuración

### Local

```bash
# Ver qué variables se cargan
node -e "console.log(process.env.NEXT_PUBLIC_RPC_URL)"

# En tu app Next.js
console.log(process.env.NEXT_PUBLIC_RPC_URL)  // En componentes
console.log(process.env.FIREBASE_PRIVATE_KEY) // En API routes
```

### En Vercel

1. **Dashboard → Deployments → (tu deployment)**
2. **Logs → Build**
3. Busca: `Environment variables loaded: ...`

---

## 📝 .env.local vs .env.production

### Desarrollo (.env.local)
```env
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

### Producción (Vercel)
```env
NEXT_PUBLIC_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
```

El archivo `.gitignore` ya excluye `.env.local`:
```gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 🔄 Recargar después de cambios

### Local
```bash
# Detén el servidor
Ctrl + C

# Reinicia
npm run dev
```

### Vercel
```bash
# Opción 1: Redeploy desde dashboard
Dashboard → Deployments → (selecciona) → Redeploy

# Opción 2: Git push automáticamente triggeará rebuild
git push origin main
```

---

## 🛠️ Estructura en API Routes

### Usando variables en un API route:

```typescript
// app/api/data/route.ts
import { getFirestore } from 'firebase-admin/firestore';

// Variables públicas (accesibles aquí también)
console.log(process.env.NEXT_PUBLIC_RPC_URL);

// Variables privadas (solo en servidor)
console.log(process.env.FIREBASE_PROJECT_ID);

export async function GET() {
  // Aquí tienes acceso a credenciales de Firebase
  const firestore = getFirestore();
  const snapshot = await firestore.collection('users').get();
  return Response.json({ count: snapshot.size });
}
```

---

## 🚨 Troubleshooting

### Error: "process.env.FIREBASE_PRIVATE_KEY is undefined"

**Causa**: Variable no configurada en Vercel
**Solución**: 
1. Ve a Settings → Environment Variables
2. Verifica que está ahí
3. Haz redeploy

### Error: "Firebase config is missing"

**Causa**: Variable `NEXT_PUBLIC_FIREBASE_PROJECT_ID` no existe
**Solución**: Agrégala a `.env.local` y Vercel

### Variables locales funcionan, pero en Vercel no

**Causa**: Nombres diferentes entre `.env.local` y Vercel
**Solución**: 
```bash
# Verifica nombres
grep NEXT_PUBLIC .env.local
# En Vercel, asegúrate que sean EXACTOS (case-sensitive)
```

---

## 📚 Referencias

- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Firebase Configuration](https://firebase.google.com/docs/web/setup)

---

## ✅ Checklist

- [ ] `.env.local` creado con `NEXT_PUBLIC_RPC_URL`
- [ ] Variables públicas de Firebase obtenidas
- [ ] Variables configuradas en Vercel
- [ ] `npm run dev` carga variables correctamente
- [ ] Vercel redeploy completado
- [ ] Verificar logs de Vercel sin errores

**Próximo paso**: Conectar repositorio a Vercel. 🚀
