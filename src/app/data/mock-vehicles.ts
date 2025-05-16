export interface Vehicle {
  id: number;
  name: string;
  year: number;
  type: string;
  engine: string;
  description: string;
  image: string;
}

const VEHICLES_KEY = 'vehicles';

const initialVehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Ford Ka',
    year: 2020,
    type: 'Hatch',
    engine: 'Motor 1.0',
    description: 'Compacto, econômico e ideal para a cidade. O Ford Ka é perfeito para quem procura agilidade e baixo consumo.',
    image: 'assets/images/ka.jpg'
  },
  {
    id: 2,
    name: 'Ford Ranger',
    year: 2021,
    type: 'Pickup',
    engine: 'Motor 3.2 Diesel',
    description: 'Robusta e potente, a Ranger é ideal para trabalho pesado e aventuras off-road, oferecendo conforto e desempenho.',
    image: 'assets/images/ranger.jpg'
  },
  {
    id: 3,
    name: 'Ford EcoSport',
    year: 2019,
    type: 'SUV',
    engine: 'Motor 1.5',
    description: 'SUV urbano com boa altura do solo e design aventureiro. Combina eficiência e versatilidade para uso diário.',
    image: 'assets/images/ecosport.jpg'
  },
  {
    id: 4,
    name: 'Ford Mustang',
    year: 2022,
    type: 'Esportivo',
    engine: 'Motor V8 5.0',
    description: 'Ícone dos esportivos, o Mustang entrega potência, design agressivo e uma experiência de direção emocionante.',
    image: 'assets/images/mustang.jpg'
  },
  {
    id: 5,
    name: 'Ford Fusion',
    year: 2020,
    type: 'Sedan',
    engine: 'Motor 2.0 Turbo',
    description: 'Elegante e confortável, o Fusion combina tecnologia, segurança e desempenho premium para longas viagens.',
    image: 'assets/images/fusion.jpg'
  },
  {
    id: 6,
    name: 'Ford Edge',
    year: 2021,
    type: 'SUV',
    engine: 'Motor V6 2.7 EcoBoost',
    description: 'SUV de luxo com espaço generoso, acabamento refinado e excelente desempenho em estrada.',
    image: 'assets/images/edge.jpg'
  }
];

// ✅ Inicializa localStorage se ainda não houver veículos
export function initializeLocalStorage(): void {
  const stored = localStorage.getItem(VEHICLES_KEY);
  if (!stored) {
    localStorage.setItem(VEHICLES_KEY, JSON.stringify(initialVehicles));
  }
}

// ✅ Retorna todos os veículos
export function getAllCars(): Vehicle[] {
  return JSON.parse(localStorage.getItem(VEHICLES_KEY) || '[]');
}
