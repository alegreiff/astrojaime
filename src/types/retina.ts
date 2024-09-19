export interface Retina {
  peliculas: Pelicula[];
}

export interface Pelicula {
  nombre: string;
  id:     number;
  datos:  Datos;
}

export interface Datos {
  activa:     boolean;
  pais:       string;
  epis:       number[];
  temporadas: number;
  year:       string;
}