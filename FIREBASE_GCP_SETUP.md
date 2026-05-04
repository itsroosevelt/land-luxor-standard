# 🔥 Firebase & GCP Setup Guide

## 🎯 En 3 Pasos

```bash
# 1. Ve a Firebase Console
open https://console.firebase.google.com/

# 2. Crea proyecto (o usa existente)
# 3. Habilita Firestore, Storage, Functions

# ✅ Listo! Tienes backend escalable
```

---

## 📊 Servicios Firebase/GCP que Usarás

```
┌─────────────────────────────────────────┐
│      FIREBASE & GCP CONSOLE             │
├─────────────────────────────────────────┤
│ ✅ Firestore Database    (datos)        │
│ ✅ Firebase Storage      (archivos)     │
│ ✅ Cloud Functions       (serverless)   │
│ ✅ Cloud Tasks           (scheduled)    │
│ ✅ Cloud Pub/Sub         (eventos)      │
│ ✅ Cloud Logging         (monitoring)   │
└─────────────────────────────────────────┘
```

---

## 🚀 Paso 1: Crear Proyecto Firebase

### Opción A: Proyecto Nuevo

1. **Ve a**: https://console.firebase.google.com/
2. **Click**: "+ Add project"
3. **Nombre**: `luxor-mainnet` (o tu preferencia)
4. **Analytics**: Habilita (opcional, solo tracking)
5. **Create Project**

**Espera** 1-2 minutos a que se cree...

### Opción B: Usar Proyecto Existente

Si ya tienes un proyecto GCP:
1. Ve a https://console.firebase.google.com/
2. Click en tu proyecto existente
3. Settings (⚙️) → Project Settings
4. Verifica Project ID

---

## 🔧 Paso 2: Habilitar Servicios

### Firestore Database (IMPORTANTE)

1. **Build** (sidebar izq) → **Firestore Database**
2. **Create Database**
3. **Location**: `us-central1` (o cercana a ti)
4. **Security Rules**: Start in test mode (cambiar después)
5. **Create**

```
🔓 Test mode = cualquiera puede leer/escribir
🔒 Production mode = necesita reglas de seguridad
```

### Firebase Storage

1. **Build** → **Storage**
2. **Get Started**
3. **Location**: `us-central1`
4. **Done**

Reglas por defecto bloquean acceso (cambiar después).

### Cloud Functions

1. **Build** → **Functions**
2. **Get Started**
3. Se habilita automáticamente

---

## 🔐 Paso 3: Configuración de Seguridad

### Firestore Security Rules

Por defecto (test mode):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

⚠️ **Cambiar a producción**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuarios solo pueden leer/escribir su propio documento
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Datos públicos (solo lectura)
    match /public/{document=**} {
      allow read: if true;
    }
    
    // Analytics (solo escribir, no leer)
    match /analytics/{document=**} {
      allow create, write: if true;
      allow read: if false;
    }
  }
}
```

### Storage Security Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Solo autenticados pueden subir
    match /{userId}/uploads/{allPaths=**} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
    }
    
    // Archivos públicos
    match /public/{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## 🔑 Paso 4: Obtener Credenciales

### Para Vercel (API Key pública)

1. **Settings** (⚙️) → **Project Settings**
2. **General tab**
3. **"Your apps"** section
4. **Click en tu app web** (o agregar si no existe)
5. Copia el config:

```javascript
// Esto es PÚBLICO (OK compartir)
const firebaseConfig = {
  apiKey: "AIzaSy...",                    // ← Pública
  authDomain: "luxor-mainnet.firebaseapp.com",
  projectId: "luxor-mainnet",
  storageBucket: "luxor-mainnet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};
```

### Para API Routes de Vercel (Admin SDK)

1. **Settings** → **Service Accounts**
2. **Node.js**
3. **Generate New Private Key**

Te descarga `luxor-mainnet-xxxxx.json`:

```json
{
  "type": "service_account",
  "project_id": "luxor-mainnet",
  "private_key_id": "abcd1234",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...",
  "client_email": "firebase-adminsdk-xxxx@luxor-mainnet.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs"
}
```

🔐 **IMPORTANTE**: 
- Nunca compartir este archivo
- No agregar a GitHub
- Solo en Vercel env vars

---

## 📝 Paso 5: Configurar en Vercel

Copia tus credenciales a Vercel:

```
NEXT_PUBLIC_FIREBASE_PROJECT_ID = luxor-mainnet
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = luxor-mainnet.firebaseapp.com
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = luxor-mainnet.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 123456789
NEXT_PUBLIC_FIREBASE_APP_ID = 1:123456789:web:abcd1234

FIREBASE_PROJECT_ID = luxor-mainnet
FIREBASE_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----
FIREBASE_CLIENT_EMAIL = firebase-adminsdk-xxxx@luxor-mainnet.iam.gserviceaccount.com
```

Ver: [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md)

---

## 🛠️ Estructurar Base de Datos

### Ejemplo de estructura para Luxor:

```
luxor-mainnet/
├── users/
│   ├── {userId1}/
│   │   ├── wallet: "8QbUK4G7pPtg..."
│   │   ├── email: "user@example.com"
│   │   ├── createdAt: timestamp
│   │   └── transactions/
│   │       ├── {txId1}/
│   │       ├── {txId2}/
│   │       └── ...
│   └── {userId2}/
│
├── analytics/
│   ├── {eventId1}/
│   │   ├── event: "swap"
│   │   ├── timestamp: timestamp
│   │   ├── amount: 1000
│   │   └── ...
│   └── ...
│
├── public/
│   ├── statistics/
│   │   ├── totalVolume: 1000000
│   │   ├── activeUsers: 342
│   │   └── lastUpdated: timestamp
│   └── ...
│
└── integrations/
    ├── {integrationId1}/
    │   ├── name: "Merchant A"
    │   ├── endpoint: "https://..."
    │   └── ...
    └── ...
```

### Crear datos de prueba en Firestore:

1. **Firestore Console** → **Data**
2. **+ Start collection**
3. Collection ID: `public`
4. **+ Add document**
5. Document ID: `statistics`
6. Agregar campos:
   ```
   totalVolume: 1000000 (number)
   activeUsers: 342 (number)
   lastUpdated: (timestamp) now
   ```

---

## ☁️ Cloud Functions (Opcional pero Poderoso)

### Caso de uso: Actualizar estadísticas cada hora

Crear función:

1. **Build** → **Functions**
2. **Create Function**

```typescript
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const updateStats = functions.pubsub
  .schedule("every 60 minutes")
  .onRun(async (context) => {
    const firestore = admin.firestore();
    
    // Obtener volumen desde Solana
    const response = await fetch("https://api.mainnet-beta.solana.com", {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getBalance",
        params: ["DdWG5ooDR84VfkM7nK5yTx9FnWNMQWk7NzTsTYQzBZmU"] // Fee Collector
      })
    });
    
    const data = await response.json();
    const balance = data.result.value;
    
    // Actualizar Firestore
    await firestore.doc("public/statistics").update({
      totalVolume: balance,
      lastUpdated: admin.firestore.Timestamp.now()
    });
    
    return null;
  });
```

---

## 📊 Monitorear en Cloud Console

### Firestore Logs:
1. **Firestore** → **Data**
2. Ver cambios en tiempo real

### Logs de Functions:
1. **Functions** → **Logs**
2. Ver errores y outputs

### Billing:
1. **Project Settings** → **Billing**
2. Ver consumo y estimados

---

## 🔍 Ejemplo: Leer datos en tu app Next.js

### Opción 1: Desde Client (sin backend)

```typescript
// components/Stats.tsx
'use client';

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadStats() {
      const docRef = doc(db, "public", "statistics");
      const docSnap = await getDoc(docRef);
      setStats(docSnap.data());
    }
    loadStats();
  }, []);

  return <div>Volume: {stats?.totalVolume}</div>;
}
```

### Opción 2: Desde API Route (más seguro)

```typescript
// app/api/stats/route.ts
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, cert } from 'firebase-admin/app';

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const db = getFirestore(app);

export async function GET() {
  const doc = await db.collection("public").doc("statistics").get();
  return Response.json(doc.data());
}
```

---

## 🚨 Troubleshooting

### Error: "Permission denied" en Firestore

**Causa**: Security Rules demasiado restrictivas
**Solución**: 
1. Verifica que usas `request.auth.uid` correcto
2. En desarrollo, usa test mode temporalmente
3. Agrega logs: `console.log(request.auth)`

### Cloud Function timeout

**Error**: `Function execution took 60001ms, exceeding the 60000ms timeout`

**Solución**:
1. Aumenta timeout (máx 540 segundos)
2. Optimiza tu código
3. Usa Cloud Tasks para tareas largas

### Billing spike

**Error**: Cobros inesperados

**Solución**:
1. Ve a Billing → Budget alerts
2. Habilita alertas
3. Revisa Security Rules (pueden tener reads/writes innecesarios)

---

## ✅ Checklist

- [ ] Proyecto Firebase creado
- [ ] Firestore Database habilitada (us-central1)
- [ ] Firebase Storage habilitado
- [ ] Credenciales (public + admin SDK) obtenidas
- [ ] Variables en Vercel configuradas
- [ ] Security Rules actualizadas
- [ ] Estructura de Firestore definida
- [ ] Datos de prueba cargados
- [ ] Cloud Functions (opcional) deployada

---

## 📚 Referencias

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Cloud Functions](https://firebase.google.com/docs/functions)
- [Security Rules](https://firebase.google.com/docs/rules)

---

**🎉 Tu backend escalable está listo!**

Próximos pasos:
1. Conectar Vercel (ver [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md))
2. Configurar variables de entorno
3. Crear primeras Cloud Functions si necesitas

🚀
