export const ModelData = [
  {
    id: "angel_statue",
    title: "Angel Statue",
    description:
      "This is a detailed description of the angel statue. It is a beautiful piece of art located in a serene environment. The statue captures the serene and peaceful essence of an angel, standing gracefully in the garden. The detailed craftsmanship and the use of fine materials make it a significant piece of art. Visitors are often mesmerized by its beauty and tranquility.",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=318",
    scale: 0.2,
    labels: [
      {
        id: 1,
        name: "Statue Head",
        description:
          "This is the head of the angel statue, showcasing intricate details of the angel's face and hair.",
        from: [0, 16, 0],
        to: [5, 16, 4],
        dimensions: {
          height: 0.3,
          width: 0.25,
          depth: 0.2,
          unit: "m",
        },
      },
      {
        id: 2,
        name: "Left Wing",
        description:
          "The left wing of the angel, beautifully crafted to show the feathers and their delicate texture.",
        from: [-1, 15, 0],
        to: [-6, 15, 4],
        dimensions: {
          height: 0.5,
          width: 1.2,
          depth: 0.2,
          unit: "m",
        },
      },
      {
        id: 3,
        name: "Right Wing",
        description:
          "The right wing of the angel, mirroring the left with equal craftsmanship and attention to detail.",
        from: [1, 15, 0],
        to: [6, 15, 4],
        dimensions: {
          height: 0.5,
          width: 1.2,
          depth: 0.2,
          unit: "m",
        },
      },
      {
        id: 4,
        name: "Base of the Statue",
        description:
          "The base on which the angel statue stands, providing stability and a foundation for the statue.",
        from: [0, -1, 0],
        to: [5, -1, 4],
        dimensions: {
          height: 0.1,
          width: 0.6,
          depth: 0.6,
          unit: "m",
        },
      },
      {
        id: 5,
        name: "Statue Hands",
        description:
          "The hands of the angel, posed in a gentle and peaceful manner, adding to the overall serene appearance.",
        from: [0, 12, 0],
        to: [5, 8, 4],
        dimensions: {
          height: 0.2,
          width: 0.1,
          depth: 0.1,
          unit: "m",
        },
      },
      {
        id: 6,
        name: "Statue Feet",
        description:
          "The feet of the angel statue, firmly placed on the base, showing the attention to detail in the sculpture.",
        from: [0, 0, 0],
        to: [5, 0, 4],
        dimensions: {
          height: 0.15,
          width: 0.1,
          depth: 0.2,
          unit: "m",
        },
      },
    ],
    dimensions: {
      height: 1.8,
      width: 0.5,
      depth: 0.5,
      scale: 0.2,
      unit: "m",
    },
  },
  {
    id: "pyramid",
    title: "Pyramid",
    description: "This is a detailed description of the pyramid.",
    url: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    scale: 0.02,
    labels: [
      {
        id: 1,
        name: "Base",
        description:
          "The solid foundation of the pyramid, supporting its weight and structure.",
        from: [-1, 0, -1],
        to: [25, 5, 25],
        dimensions: {
          height: 5,
          width: 6,
          depth: 6,
          unit: "m",
        },
      },
      {
        id: 2,
        name: "Staircase",
        description:
          "A series of steps that allow access to the upper levels of the pyramid.",
        from: [-2, 0, -2],
        to: [15, 6, 25],
        dimensions: {
          height: 5,
          width: 4,
          depth: 4,
          unit: "m",
        },
      },
      {
        id: 3,
        name: "King's Chamber",
        description:
          "The innermost chamber of the pyramid, believed to be the burial place of the pharaoh.",
        from: [-1, 5, -1],
        to: [21, 10, 21],
        dimensions: {
          height: 5,
          width: 2,
          depth: 2,
          unit: "m",
        },
      },
      {
        id: 4,
        name: "Queen's Chamber",
        description:
          "Another chamber within the pyramid, possibly intended for the queen or other members of the royal family.",
        from: [-2, 3, -2],
        to: [12, 5, 32],
        dimensions: {
          height: 2,
          width: 4,
          depth: 4,
          unit: "m",
        },
      },
      {
        id: 5,
        name: "Grand Gallery",
        description:
          "A long corridor leading to the King's Chamber, featuring a steep incline and elaborate construction.",
        from: [-2, 0, -2],
        to: [22, 15, 2],
        dimensions: {
          height: 5,
          width: 4,
          depth: 4,
          unit: "m",
        },
      },
      {
        id: 6,
        name: "Staircase",
        description:
          "A series of steps that allow access to the upper levels of the pyramid.",
        from: [-2, 0, -2],
        to: [16, 25, 2],
        dimensions: {
          height: 5,
          width: 4,
          depth: 4,
          unit: "m",
        },
      },
      {
        id: 7,
        name: "Staircase",
        description:
          "A series of steps that allow access to the upper levels of the pyramid.",
        from: [-2, 0, -2],
        to: [22, 25, 12],
        dimensions: {
          height: 5,
          width: 4,
          depth: 4,
          unit: "m",
        },
      },
    ],
  },
];
