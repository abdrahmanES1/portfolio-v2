import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Automated Fact-Checking Pipeline via LLM Fine-Tuning",
    description: [
      "Engineered a synthetic training dataset via knowledge distillation (using Gemini 2.5 Pro) and fine-tuned the Mistral-Nemo 12B model using Unsloth (QLoRA) to achieve a 0.92 training loss.",
      "Designed a RAG retrieval pipeline using LangChain and ChromaDB to ground the model’s outputs in verified data from Politifact and Snopes, ensuring zero hallucinations on extraction tasks."
    ],
    technologies: [
      "Python",
      "LLM Fine-Tuning",
      "Unsloth (QLoRA)",
      "LangChain",
      "ChromaDB",
      "Mistral-Nemo 12B",
      "Gemini 2.5 Pro"
    ],
    imageUrl: "", // Placeholder or leave empty if no image available yet
    url: "", // Add URL if available, otherwise can be empty or link to GitHub profile
    category: "Data_Science",
  },
  {
    title: "Brain Tumor Detection Using Deep Learning",
    description: [
      "Built a classification model using VGG16 with transfer learning to identify four classes in MRI images: glioma, meningioma, pituitary, and no tumor.",
      "Used VGG16(include_top=False, weights='imagenet'), froze base layers, and fine-tuned the last three layers.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "PIL",
      "Scikit-learn",
      "Flask",
      "Docker"
    ],
    imageUrl: "",
    url: "https://github.com/abdrahmanES1/Brain-Tumour-Detcetction-using-deep-learning",
    category: "Data_Science",
  },
  {
    title: "Movie Recommendation System",
    description: [
      "Built a KNN-based content recommendation system using scikit-learn.",
      "Deployed with Streamlit for user interaction.",
      "Used pandas for data handling.",
    ],
    technologies: ["Scikit-learn", "Pandas", "KNN", "Streamlit"],
    imageUrl: "https://res.cloudinary.com/abdrahmanes/image/upload/c_fit,q_auto:eco,w_539/v1760030179/Portfolio-v2/movie_recommendation_sys.png",
    url: "https://github.com/abdrahmanES1/Movie-Recommender-System/blob/master/requirements.txt",
    category: "Data_Science",
  },
  {
    title: "House Price Prediction Using Linear Regression",
    description: [
      "Developed a Linear Regression model for predicting house prices.",
      "Performed data preprocessing and feature engineering.",
      "Achieved strong performance metrics.",
    ],

    technologies: [
      "Feature Engineering",
      "Linear Regression",
      "Data Analysis",
      "Exploratory Data Analysis",
      "Scikit-learn",
      "Pandas",
      "FastAPI",
      "Docker"
    ],
    imageUrl:
      "https://res.cloudinary.com/abdrahmanes/image/upload/c_fit,q_auto:eco,w_539/v1760025675/Portfolio-v2/house_predection_project.png",
    url: "https://github.com/abdrahmanES1/house_price_prediction",
    category: "Data_Science",
  },

];
