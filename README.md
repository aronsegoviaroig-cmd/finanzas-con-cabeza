# Finanzas con Cabeza

Sitio estático en español para GitHub Pages, con guías educativas, una calculadora de capacidad de ahorro y páginas legales iniciales.

## Publicar gratis en GitHub Pages

1. Crea un repositorio público llamado, por ejemplo, `finanzas-con-cabeza`.
2. Sube el contenido de esta carpeta a la raíz del repositorio (no subas solo el ZIP).
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/(root)`, y guarda.
5. Cuando GitHub publique el sitio, abre la URL que aparece en Settings → Pages.

## Personalización obligatoria

Busca y sustituye `TU-USUARIO` y `TU-REPOSITORIO` por los valores reales de GitHub en todos los archivos HTML, `robots.txt` y `sitemap.xml`. Si el repositorio se llama `usuario.github.io`, la URL será distinta: ajusta todas las URL canónicas y del sitemap.

Antes de publicar:
- Completa responsable, correo, datos legales y fechas.
- Revisa las páginas legales con arreglo a tu situación y normativa aplicable.
- Lee y corrige los artículos, añade fuentes primarias fiables cuando hagas afirmaciones específicas y mantén un calendario editorial real.
- Comprueba todos los enlaces y que el sitio funcione desde móvil.
- No inventes autoría, experiencia profesional, fuentes ni datos.
- No copies textos de otras webs.

## Google AdSense

Esta plantilla **no está aprobada por AdSense**. Los espacios publicitarios son marcadores visuales; no muestran anuncios ni generan ingresos. No hay ningún ID publicitario inventado.

Para solicitar revisión:
1. Asegúrate de que el sitio esté publicado y accesible.
2. Completa y revisa la información del titular, contacto y páginas legales.
3. Publica contenido original, útil y revisado; no existe un número mágico de artículos que garantice la aprobación.
4. Crea o utiliza una cuenta de AdSense que cumpla los requisitos de edad y titularidad.
5. Añade el sitio desde AdSense y sigue las instrucciones de verificación que Google muestre para tu cuenta.
6. Solo cuando corresponda, incorpora el código oficial de AdSense y configura el consentimiento para los usuarios afectados. Si Google solicita un archivo `ads.txt`, sigue las instrucciones de tu cuenta y coloca el archivo correcto en la raíz del sitio.
7. Revisa las políticas de contenido, tráfico y anuncios de Google. La aprobación depende de la evaluación de Google y no puede garantizarse.

## Notas técnicas

- No requiere servidor, base de datos, Node ni compilación.
- La calculadora funciona localmente en el navegador.
- El aviso de cookies usa `localStorage` como recordatorio sencillo; **no es una CMP certificada** ni garantiza cumplimiento legal. Antes de mostrar anuncios, implementa una solución de consentimiento adecuada para los usuarios y servicios aplicables.
- El sitio carga DM Sans y Manrope desde Google Fonts. Puedes quitar el `@import` de `assets/styles.css` si prefieres no depender de un proveedor externo.
- Los datos de contacto no se envían a ningún sitio; la página de contacto es informativa y debe completarse con un correo real.
- Las páginas legales son plantillas de partida, no asesoramiento jurídico.

## Estructura

- `index.html`: inicio y calculadora.
- `articulos/`: seis artículos iniciales.
- `assets/styles.css`: diseño adaptable.
- `assets/site.js`: menú, calculadora, año y aviso de almacenamiento local.
- `privacidad.html`, `cookies.html`, `aviso-legal.html`: plantillas configurables.
- `robots.txt`, `sitemap.xml`: SEO técnico inicial.
