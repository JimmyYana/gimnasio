export interface Plan {
  id: string;
  name: string;
  precio: number;
  duracion: number;
  beneficios: string[];
  descripcion: string;
  activo: boolean;
}

export interface MemberData {
  nombre: string;
  foto: string;
  celular: string;
  genero: string;
  numeroMiembro: string;
  altura: number;
  peso: number;
  pecho: number;
  cintura: number;
  fechaNacimiento: string;
  direccion: string;
  entrenamiento: string;
  planId: string;
  horario: string;
  fechaIngreso: string;
  fechaFinalizacion: string;
  montoPagado: number;
  montoPendiente: number;
  metodoPago: string;
  activo: boolean;
}

export interface Member extends MemberData {
  id: string;
}
