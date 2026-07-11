import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Agentic Multilingual RAG — Master’s Thesis",
    description: [
      "Architected an 11-stage agentic RAG system answering Moroccan public-service questions in four languages (MSA, Darija, Arabizi, French), running locally on a single consumer GPU with a 4B open-weights generator.",
      "Built a hybrid retrieval pipeline (BM25 + BGE-M3 dense, fused with Reciprocal Rank Fusion) with cross-encoder reranking, and a plan-execute-reflect-synthesise agent loop with five deterministic tools.",
      "Designed a Natural Language Inference verification stage that scores each claim against retrieved evidence and injects per-claim citations, reducing hallucination in a government-accuracy setting.",
      "Fine-tuned Mistral-Nemo 12B using Unsloth (QLoRA) on a synthetic dataset generated via Gemini 2.5 Pro for claim verification.",
      "Evaluated against six published RAG methods on a hand-curated 124-item test set: 0.66 multi-hop success rate, 0.289 Arabizi-normalised F1 (next-best 0.034), 0.667 abstain F1."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "RAG",
      "LangChain",
      "ChromaDB",
      "QLoRA",
      "BGE-M3",
      "FastAPI"
    ],
    imageUrl: "",
    url: "https://github.com/abdrahmanES1/agentic-rag",
    category: "Data_Science",
  },
  {
    title: "Brain Tumor Classification & Detection Using Deep Learning",
    description: [
      "Developed a CNN for medical imaging analysis using TensorFlow and Keras, leveraging VGG16 with pre-trained ImageNet weights for transfer learning.",
      "Trained the model to classify MRI scans into four categories: Glioma, Meningioma, Pituitary tumor, and No Tumor.",
      "Created a diagnostic support tool capable of assisting in early detection and categorization of brain anomalies."
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
