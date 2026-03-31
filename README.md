# 💍 Aracelli & Quentin — Sitio web de casamiento

Sitio web para el casamiento de Aracelli y Quentin el **22 de agosto de 2026**.
Desarrollado en HTML, CSS y JavaScript puro. Bilingüe español / francés.
Hosteado en [Netlify](https://netlify.com).

---

## 🌐 URL del sitio

```
https://araceliyquentin.netlify.app
```

---

## 📁 Estructura del proyecto

```
/
├── index.html          # Página principal
├── preview.jpg         # Imagen para compartir en redes / WhatsApp (1200x630px)
├── favicon.png         # Ícono de la solapa del navegador (anillos 💍)
└── README.md           # Este archivo
```

---

## ✨ Secciones de la página

| Sección | Descripción |
|---|---|
| **Hero** | Nombres, frase de bienvenida y fecha |
| **Cuenta regresiva** | Días, horas, minutos y segundos en tiempo real |
| **Su historia** | Línea de tiempo de la pareja |
| **Programa** | Cronograma del día (ceremonia, cocktail, fiesta) |
| **Lugar** | Direcciones con links a Google Maps |
| **RSVP** | Formulario de confirmación vía Google Forms embebido |
| **Regalos** | IBAN y BIC para transferencia |

---

## 🌍 Bilingüe ES / FR

La página tiene un botón **ES / FR** fijo en la esquina superior derecha que cambia todo el contenido al idioma seleccionado, incluyendo el formulario RSVP.

Para agregar el form en francés cuando esté listo, buscá esta línea en `index.html`:

```html
<iframe
  id="google-form-iframe"
  src="URL_FORM_ESPAÑOL"
  data-src-es="URL_FORM_ESPAÑOL"
  data-src-fr="PEGAR_URL_FORM_FRANCES"
```

Y reemplazá `PEGAR_URL_FORM_FRANCES` con la URL de embed del form en francés.

---

## 📋 RSVP — Google Forms + Google Sheets

El formulario de confirmación está embebido desde Google Forms y alimenta automáticamente una Google Sheet.

### Cómo obtener la URL del form

1. Abrí el Google Form
2. Clic en **Enviar** → pestaña **< >** (Insertar HTML)
3. Copiá la URL del atributo `src`
4. Asegurate que termine en `?embedded=true`

### Estructura del Google Form (español)

| # | Pregunta | Tipo |
|---|---|---|
| 1 | Nombre | Respuesta corta — obligatorio |
| 2 | Apellido | Respuesta corta — obligatorio |
| 3 | Email | Respuesta corta — obligatorio |
| 4 | ¿Van a asistir? | Opción múltiple — obligatorio |
| 5 | ¿Solos o en grupo? | Opción múltiple — obligatorio |
| 6 | Nombre del acompañante | Respuesta corta (condicional) |
| 7 | Menú | Opción múltiple |
| 8 | Restricciones alimentarias | Opción múltiple |
| 9 | Detalle de restricciones | Respuesta corta — opcional |
| 10 | Mensaje | Párrafo — opcional |

### Activar notificaciones por email

En Google Forms → **Respuestas** → ⋮ → **Recibir notificaciones de respuestas nuevas**

---

## 🖼️ Open Graph (preview para WhatsApp / redes)

El archivo `preview.jpg` se muestra cuando alguien comparte el link.
Dimensiones: **1200 x 630 px**.

Meta tags incluidos en el `<head>`:

```html
<meta property="og:title" content="Aracelli & Quentin 💍" />
<meta property="og:description" content="Nos casamos el 22 de agosto de 2026." />
<meta property="og:image" content="https://araceliyquentin.netlify.app/preview.jpg" />
<meta property="og:url" content="https://araceliyquentin.netlify.app/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 📅 Fechas clave

| Evento | Fecha |
|---|---|
| Límite RSVP | 2 de mayo de 2026 |
| Ceremonia religiosa | 22 de agosto de 2026 — 16h30 |
| Cocktail & Cena | 22 de agosto de 2026 — 19h00 |
| Fiesta | 22 de agosto de 2026 — 22h00 |

---

## 📍 Lugares

| Evento | Dirección |
|---|---|
| Ceremonia | 2 Rue Hez, Ailly-sur-Somme |
| Fiesta | 138 Av. du Général Leclerc, Albert (Royal Picardie) |

---

## 🚀 Deploy en Netlify

### Opción A — Netlify Drop (sin cuenta)
1. Ir a [netlify.com/drop](https://netlify.com/drop)
2. Arrastrar la carpeta del proyecto
3. Listo — Netlify genera una URL automática

### Opción B — Con GitHub (recomendado para actualizaciones)
```bash
git add .
git commit -m "descripción del cambio"
git push
```
Netlify detecta el push y despliega automáticamente.

---

## ✏️ Cómo editar contenido

| Qué cambiar | Dónde buscarlo en el HTML |
|---|---|
| Nombres / fecha | Sección `<!-- ══ HERO ══ -->` |
| Historia de la pareja | Sección `<!-- ══ HISTORIA ══ -->` |
| Horarios | Sección `<!-- ══ CRONOGRAMA ══ -->` |
| Direcciones | Sección `<!-- ══ LUGAR ══ -->` |
| URL del Google Form | Atributo `src` del `<iframe>` en sección RSVP |
| IBAN / BIC | Sección `<!-- ══ REGALOS ══ -->` |
| Fecha de la cuenta regresiva | `const weddingDate = new Date('2026-08-22T16:30:00')` en el JS |
| Fecha límite RSVP | Texto dentro de `.rsvp-deadline` |

---

## 🛠️ Tecnologías utilizadas

- **HTML5 / CSS3 / JavaScript** — sin frameworks
- **Google Fonts** — Great Vibes + Cormorant Garamond + Jost
- **Google Forms** — formulario RSVP embebido
- **Google Sheets** — base de datos de confirmaciones
- **Netlify** — hosting gratuito con dominio personalizable

---

## 💬 Mensajes de WhatsApp

### Español
> ¡Hola! 👋 ¿Ya pudiste confirmar tu asistencia a nuestro casamiento? 💍
> Recordá que esperamos tu respuesta antes del **2 de mayo de 2026** en: araceliyquentin.netlify.app
> 📍 Ceremonia el 22 de agosto en Ailly-sur-Somme y fiesta en el Royal Picardie, Albert.
> Si no podés venir, avisanos por acá 🙏 ¡Muchas gracias! 🌸 **Ara & Quentin** 🤵🏻‍♂️👰🏻‍♀️

### Français
> Bonjour ! 👋 Avez-vous déjà confirmé votre présence à notre mariage ? 💍
> Pensez à répondre avant le **2 mai 2026** sur : araceliyquentin.netlify.app
> 📍 Cérémonie le 22 août à Ailly-sur-Somme et fête au Royal Picardie, Albert.
> Si vous ne pouvez pas venir, un message ici suffit 🙏 Merci beaucoup ! 🌸 **Ara & Quentin** 🤵🏻‍♂️👰🏻‍♀️

---

*Hecho con 💙 para Aracelli & Quentin — 22 · 08 · 2026*
