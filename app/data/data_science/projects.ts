import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Automated Fact-Checking Pipeline via LLM Fine-Tuning & RAG",
    description: [
      "Architected a robust fact-checking system combining Fine-Tuned SLMs (Small Language Models) with Retrieval-Augmented Generation (RAG).",
      "Fine-tuned the Mistral Nemo 12B model using Unsloth (QLoRA) to optimize computational efficiency, achieving a training loss of 0.92.",
      "Engineered a high-quality synthetic training dataset via Knowledge Distillation, utilizing Gemini 2.5 Pro to generate reasoning traces for claim verification.",
      "Deployed a retrieval pipeline using LangChain and ChromaDB to ground model outputs in verified sources (PolitiFact, Snopes), successfully mitigating hallucinations in claim extraction and verification tasks."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "RAG",
      "LangChain",
      "ChromaDB",
      "QLoRA",
      "Unsloth",
      "FastAPI"
    ],
    imageUrl: "",
    url: "https://github.com/abdrahmanES1/fact-checking-slm",
    category: "Data_Science",
  },
  {
    title: "Distributed Multi-Agent Anomaly Detection System",
    description: [
      "Built a fault-tolerant multi-agent system that detects anomalies in distributed sensor networks, with 20+ autonomous agents coordinating over XMPP messaging.",
      "Implemented online (streaming) machine learning with River’s HalfSpaceTrees, so agents learn incrementally and adapt to concept drift without batch retraining.",
      "Designed a self-healing network topology: agents exchange heartbeats, automatically prune unresponsive peers, and maintain trust/reputation scores to isolate unreliable nodes.",
      "Added trust-based consensus so agents collaboratively validate anomalies and cut false positives, reaching agreement in under 200ms.",
      "Built a Streamlit ‘War Room’ dashboard for live topology visualization, fleet health, and chaos-engineering tests — maintaining full operation under 30% node loss."
    ],
    technologies: [
      "Python",
      "Multi-agent Systems",
      "XMPP",
      "River",
      "HalfSpaceTrees",
      "Streamlit"
    ],
    imageUrl: "",
    url: "https://github.com/abdrahmanES1/Distributed-Anomaly-Detection-MAS",
    category: "Data_Science",
  },
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
