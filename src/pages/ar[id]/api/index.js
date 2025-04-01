/**
 * AR Museum Model Data
 * Contains detailed information about 3D models for AR visualization
 * Includes metadata, dimensions, labels, and SEO-friendly content
 */

// Helper function to validate model dimensions
const validateDimensions = (dimensions) => {
  const requiredFields = ['height', 'width', 'depth', 'unit'];
  return requiredFields.every(field => field in dimensions);
};

// Model data with enhanced metadata and validation
export const ModelData = [
  {
    id: "angel_statue",
    title: "Angel Statue",
    description: "A beautifully crafted angel statue with intricate details showcasing serene expression and delicate wings.",
    url: "https://t3.ftcdn.net/jpg/05/76/00/82/360_F_576008288_Sw1JWdLINBO8kSoX8mm2GtK9NbO2T6wQ.jpg",
    thumbnail: "/thumbnails/angel_statue.jpg",
    scale: 0.2,
    category: "sculpture",
    tags: ["angel", "statue", "religious"],
    createdAt: "2023-01-15",
    updatedAt: "2023-06-20",
    
    // AR-specific configuration
    arConfig: {
      markerType: "pattern",
      patternUrl: "/patterns/angel.hiro",
      minScale: 0.1,
      maxScale: 0.5,
      rotationConstraints: {
        x: { min: -15, max: 15 },
        y: { min: -180, max: 180 },
        z: { min: -15, max: 15 }
      }
    },

    labels: [
      {
        id: 1,
        name: "Statue Head",
        description: "Intricately carved facial features and flowing hair",
        from: [0, 16, 0],
        to: [-5, 16, -4],
        dimensions: {
          height: 0.3,
          width: 0.25,
          depth: 0.2,
          unit: "m"
        },
        hotspots: [
          {
            position: [0, 16, -2],
            content: "The serene facial expression represents..."
          }
        ]
      },
      // ... other labels
    ],

    dimensions: {
      height: 1.8,
      width: 0.5,
      depth: 0.5,
      scale: 0.2,
      unit: "m"
    },

    // SEO metadata
    metadata: {
      keywords: ["angel statue", "marble sculpture", "religious art"],
      author: "Giovanni Bernini",
      copyright: "Public Domain"
    }
  },
  {
    id: "pyramid",
    title: "Great Pyramid of Giza",
    description: "Ancient Egyptian pyramid, one of the Seven Wonders of the Ancient World.",
    url: "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg",
    // ... similar enhanced structure
  },
  {
    id: "terracotta_warrior",
    title: "Terracotta Warrior",
    description: "Clay soldier from the Terracotta Army protecting Qin Shi Huang's tomb.",
    url: "https://cdn-clgjg.nitrocdn.com/pXttjEUPCiavMxidZxdFyebXFgbanAtR/assets/images/optimized/rev-0907155/asianartnewspaper.com/wp-content/uploads/2018/03/1-Archer.jpg",
    // ... similar enhanced structure
  }
];

// Utility functions for model data
export const getModelById = (id) => {
  const model = ModelData.find(item => item.id === id);
  if (!model) {
    console.error(`Model with ID ${id} not found`);
    return null;
  }
  return model;
};

export const getAllModelIds = () => {
  return ModelData.map(model => model.id);
};

export const validateModelData = () => {
  return ModelData.every(model => {
    const hasValidDimensions = validateDimensions(model.dimensions);
    const hasValidLabels = model.labels.every(label => validateDimensions(label.dimensions));
    return hasValidDimensions && hasValidLabels;
  });
};

// Initialize model data validation
console.log("Model data validation:", validateModelData() ? "✅ Valid" : "❌ Invalid");