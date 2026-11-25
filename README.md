# gimnasio

Proyecto académico de Taller de Programación para consultar planes y administrar miembros de un gimnasio. La interfaz está pensada para móviles y conserva su ancho al abrirla en una computadora.

## Tecnologías

Next.js con App Router, React, TypeScript, CSS, Fetch API, MockAPI, Git y GitHub.

## Funcionalidades

- Consulta de planes activos y acceso al listado con el plan seleccionado.
- Lista en dos columnas con búsqueda por nombre o celular y filtros combinables por estado, plan y horario.
- Registro y edición con el mismo formulario, validación y selección de planes de MockAPI.
- Eliminación con confirmación y actualización del listado.
- Foto opcional mediante una URL de imagen. El campo Horario acepta texto y su valor aparece entre los filtros del listado.
- SMS, WhatsApp, Renew Plan, Message, Block, Dashboard, Collection, Gym y Today Report aparecen deshabilitados. Call abre el marcador del dispositivo cuando el celular admite un enlace telefónico.

## Instalación

Con una versión de Node.js compatible con Next.js (20.9 o posterior):

```bash
git clone https://github.com/JimmyYana/gimnasio.git
cd gimnasio
npm install
npm run dev
```

Abre [localhost:3000](http://localhost:3000). Se requiere acceso a MockAPI para cargar y guardar datos. `npm run lint` revisa el código y `npm run build` genera la compilación de producción.

## APIs

- Miembros: `https://6aff34e87fc363ccff08fc1b.mockapi.io/miembros`
- Planes: `https://6aff34de7fc363ccff08fc04.mockapi.io/api/v1/planes`

`planId` guarda el identificador del plan. El formulario toma las fechas nuevas del selector nativo y conserva las cadenas de fecha existentes cuando quedan intactas. La tarjeta muestra la duración numérica devuelta por la API.

## Carpetas y Atomic Design

```text
app/          Pantallas y sus operaciones fetch
components/
  atoms/      Controles básicos, iconos e imágenes
  molecules/  Grupos pequeños de controles y datos
  organisms/  Cabecera, navegación, tarjetas, listados y formulario
  templates/  Composición de las pantallas
types/        Interfaces de los recursos de MockAPI
public/       Logotipo
docs/         Detalle de la composición
```

Cada página carga los datos, guarda el estado y pasa los resultados y funciones por props a su template. Consulta [Atomic Design](docs/atomic-design.md).

## Ramas

| Rama | Función |
| --- | --- |
| `main` | Versión principal |
| `develop` | Integración de funcionalidades |
| `feature/atomic-design` | Estructura, tipos y átomos |
| `feature/plans` | Consulta y selección de planes |
| `feature/members-list` | Listado y tarjetas |
| `feature/members-search` | Búsqueda por nombre o celular |
| `feature/members-filters` | Filtros combinables |
| `feature/add-member` | Formulario y registro |
| `feature/edit-member` | Carga y actualización de un miembro |
| `feature/delete-member` | Eliminación con confirmación |
| `feature/navigation` | Navegación entre pantallas |
| `feature/responsive-design` | Ajustes de diseño móvil y documentación |
