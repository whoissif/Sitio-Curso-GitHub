# Matemáticas para la Economía I

Mini curso interactivo de la Hoja 1 (Tema 1: desigualdades, relaciones de orden y funciones), con teoría descargable en Word, guías paso a paso para los 17 ejercicios, vídeos de repaso y un banco de exámenes de convocatorias anteriores.

## Estructura del sitio

Es un sitio estático de varias páginas enlazadas entre sí, pensado para publicarse con **GitHub Pages**:

```
index.html          ← página de inicio: hero, progreso conjunto y tarjetas de los 3 bloques + exámenes
modulo-1.html        ← Bloque 1 · Desigualdades y valor absoluto (ejercicios 1-4)
modulo-2.html        ← Bloque 2 · Relaciones de orden y orden de Pareto (ejercicios 5-6)
modulo-3.html        ← Bloque 3 · Funciones (ejercicios 7-17)
examenes.html        ← banco de exámenes de convocatorias anteriores (2019-2026)
assets/
  style.css          ← estilos compartidos (tema claro/oscuro automático)
  course.js          ← motor de renderizado de ejercicios y seguimiento de progreso
  data-bloque1.js     ← contenido (enunciados, pistas, soluciones) del Bloque 1
  data-bloque2.js     ← contenido del Bloque 2
  data-bloque3.js     ← contenido del Bloque 3
recursos/
  Teoria_Bloque1_Hoja1_Desigualdades_ValorAbsoluto.docx
  Teoria_Bloque2_Hoja1_RelacionesOrden.docx
  Teoria_Bloque3_Hoja1_Funciones.docx
examenes/
  2019-enero-enunciado.pdf, 2019-enero-solucion.pdf, ... (20 PDFs, ver examenes.html)
```

Cada página de módulo tiene: un repaso teórico rápido desplegable, una sección de vídeos de repaso del canal de YouTube [Matemáticas profe Alex](https://www.youtube.com/@MatematicasprofeAlex), pestañas por ejercicio, tarjetas por apartado con botón de pista (método teórico) y botón de solución completa paso a paso, una casilla para marcar cada apartado como resuelto, y navegación al bloque anterior/siguiente. La página de inicio agrega el progreso de los tres bloques.

Los vídeos de repaso son enlaces a un canal externo de YouTube (no son material propio de la asignatura); se han elegido por su relación temática con cada bloque. En el Bloque 2 no hay vídeo para el ejercicio 6 (orden de Pareto), porque es un contenido específico de Matemáticas para la Economía que no aparece en ese canal generalista; en el Bloque 3 tampoco hay vídeo específico sobre monotonía de composiciones ni sobre periodicidad general de funciones, más allá del gráfico de seno y coseno.

El banco de exámenes (`examenes.html`) recoge 20 documentos de convocatorias de Enero y Junio de 2019 a 2026, con su solución cuando se conserva. Algunas convocatorias solo tienen enunciado o solo solución, y algunos años tienen variantes (turnos distintos o convocatoria online); está anotado en cada caso.

El progreso se guarda con `localStorage` en el navegador de quien lo usa: es personal y local, no se sincroniza entre dispositivos ni se envía a ningún sitio.

## Cómo publicarlo en GitHub Pages

1. Crea el repositorio en GitHub (por ejemplo, `matematicas-para-la-economia-1`) y sube todo el contenido de esta carpeta a la rama `main`, manteniendo `index.html` en la raíz del repositorio.
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub publicará el sitio en una URL del tipo `https://<tu-usuario>.github.io/<nombre-del-repositorio>/` en uno o dos minutos.

También puedes abrir `index.html` directamente con doble clic en tu ordenador: el sitio funciona igual sin conexión a internet (salvo para cargar las tipografías de Google Fonts), aunque los enlaces entre páginas funcionan mejor si abres la carpeta con un servidor local o la sirves desde GitHub Pages.

## Origen

Basado en las transparencias de teoría del Tema 1 (Introducción: desigualdades, relaciones de orden y funciones) y en la Hoja 1 de ejercicios de Matemáticas I 
