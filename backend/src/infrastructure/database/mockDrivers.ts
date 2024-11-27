import { IDriver } from "../../application/interfaces/Driver";

export const newdrivers: Omit<IDriver, "id">[] = [
  {
    name: "Homer Simpson",
    description:
      "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
    vehicle: "Plymouth Valiant 1973 rosa e enferrujado",
    reviews: [
      {
        rating: 2,
        comment:
          "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
      },
    ],
    ratePerKm: 2.5,
    minKm: 1,
  },
  {
    name: "Dominic Toretto",
    description:
      "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
    vehicle: "Dodge Charger R/T 1970 modificado",
    reviews: [
      {
        rating: 4,
        comment:
          "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
      },
    ],
    ratePerKm: 5.0,
    minKm: 5,
  },
  {
    name: "James Bond",
    description:
      "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
    vehicle: "Aston Martin DB5 clássico",
    reviews: [
      {
        rating: 5,
        comment:
          "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
      },
    ],
    ratePerKm: 10.0,
    minKm: 10,
  },
  {
    name: "Mario Bros",
    description:
      "It's-a me, Mario! Vamos lá! Entro no meu kart e te levo onde você precisar, com velocidade e diversão!",
    vehicle: "Mario Kart com turbo",
    reviews: [
      {
        rating: 4,
        comment:
          "Uma viagem super animada! O motorista é divertido, mas cuidado com as bananas no caminho.",
      },
    ],
    ratePerKm: 3.0,
    minKm: 2,
  },
  {
    name: "Sherlock Holmes",
    description:
      "Saudações, sou Sherlock Holmes. Minha dedução é que você precisa chegar ao destino com precisão e eficiência. Suba a bordo.",
    vehicle: "Land Rover Defender 110 preto",
    reviews: [
      {
        rating: 4.5,
        comment:
          "Um motorista meticuloso e observador. A viagem foi tão precisa quanto uma investigação bem-sucedida.",
      },
    ],
    ratePerKm: 4.5,
    minKm: 3,
  },
  {
    name: "Tony Stark",
    description:
      "Olá, aqui é o Tony Stark. Meu carro está equipado com o que há de mais avançado em tecnologia. Relaxe, vou cuidar de tudo.",
    vehicle: "Audi R8 personalizado pela Stark Industries",
    reviews: [
      {
        rating: 5,
        comment:
          "Tecnologia de ponta e estilo! Uma viagem confortável e rápida, com direito a piadas do motorista.",
      },
    ],
    ratePerKm: 8.0,
    minKm: 7,
  },
  {
    name: "Forrest Gump",
    description:
      "Oi, sou o Forrest. Vou te levar até o seu destino, rápido ou devagar, do jeito que você preferir. Como minha mãe dizia: 'A vida é como uma viagem de carro.'",
    vehicle: "Ford F-150 antigo, mas confiável",
    reviews: [
      {
        rating: 3.5,
        comment:
          "Viagem tranquila, mas o motorista gosta de contar histórias. Prepare-se para ouvir sobre a vida dele.",
      },
    ],
    ratePerKm: 2.0,
    minKm: 1,
  },
  {
    name: "Lara Croft",
    description:
      "Olá, sou a Lara Croft. Adoro aventuras, mas prometo uma viagem segura e cheia de estilo. Vamos explorar juntos?",
    vehicle: "Jeep Wrangler preto com equipamentos de exploração",
    reviews: [
      {
        rating: 4.8,
        comment:
          "Uma motorista ousada, mas muito habilidosa. O carro parece pronto para enfrentar qualquer terreno.",
      },
    ],
    ratePerKm: 6.0,
    minKm: 4,
  },
  {
    name: "Walter White",
    description:
      "Meu nome é Walter White. Estou aqui para te levar ao seu destino. Não pergunte o que tem no porta-malas.",
    vehicle: "RV Fleetwood Bounder 1986",
    reviews: [
      {
        rating: 3.7,
        comment:
          "Motorista competente, mas um pouco misterioso. O carro é diferente, mas funcional.",
      },
    ],
    ratePerKm: 3.0,
    minKm: 3,
  },
  {
    name: "Buzz Lightyear",
    description:
      "Para o infinito e além! Sou Buzz Lightyear, e minha missão é te levar em segurança até o seu destino.",
    vehicle: "Carro temático espacial",
    reviews: [
      {
        rating: 4.5,
        comment:
          "Viagem cheia de entusiasmo! O motorista é super carismático e o veículo é único.",
      },
    ],
    ratePerKm: 4.0,
    minKm: 3,
  },
];
