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


export interface DatoRetina {
  status: string;
  datos:  Dato[];
}

export interface Dato {
  id:              number;
  wpid:            number;
  pais:            Pais;
  formato:         Formato;
  titulo:          string;
  genero:          Genero;
  estrenooriginal: Date;
  estreno:         Date;
  salida:          string;
  year:            number;
  duracion:        number;
  visitas:         { [key: string]: { [key: string]: number | null } };
}

export enum Formato {
  Cortos = "Cortos",
  Largos = "Largos",
}

export enum Genero {
  Documental = "Documental",
  Experimental = "Experimental",
  Ficción = "Ficción",
}

export enum Pais {
  Alemania = "Alemania",
  Argentina = "Argentina",
  Australia = "Australia",
  Bolivia = "Bolivia",
  Brasil = "Brasil",
  Bélgica = "Bélgica",
  Canadá = "Canadá",
  Chile = "Chile",
  Colombia = "Colombia",
  CostaRica = "Costa Rica",
  Cuba = "Cuba",
  Ecuador = "Ecuador",
  ElSalvador = "El Salvador",
  España = "España",
  EstadosUnidos = "Estados Unidos",
  Francia = "Francia",
  Guatemala = "Guatemala",
  Haití = "Haití",
  Honduras = "Honduras",
  India = "India",
  Italia = "Italia",
  Líbano = "Líbano",
  México = "México",
  Nicaragua = "Nicaragua",
  Panamá = "Panamá",
  Paraguay = "Paraguay",
  Perú = "Perú",
  Polonia = "Polonia",
  Portugal = "Portugal",
  PuertoRico = "Puerto Rico",
  ReinoUnido = "Reino Unido",
  RepúblicaDominicana = "República Dominicana",
  Rumania = "Rumania",
  Rusia = "Rusia",
  Suiza = "Suiza",
  Ucrania = "Ucrania",
  Uruguay = "Uruguay",
  Venezuela = "Venezuela",
}
