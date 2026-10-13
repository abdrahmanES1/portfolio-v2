import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Multilingual Agentic RAG System for Moroccan Public Services",
    description: [
      "End-to-End System Design: Architected an agentic RAG system answering Moroccan public-service questions in four languages (Modern Standard Arabic, Darija, Arabizi, French), running locally on a single consumer GPU with a 4B open-weights generator.",
      "Hybrid Retrieval: Built a retrieval pipeline combining BM25 and BGE-M3 dense rankings with Reciprocal Rank Fusion, followed by cross-encoder reranking for precision.",
      "Agentic Reasoning: Implemented a plan-execute-reflect-synthesise loop with five deterministic tools and a single-call LLM router (six routing signals) to decompose multi-hop and legal questions.",
      "Verification & Grounding: Designed a Natural Language Inference verification stage that scores each claim against retrieved evidence and injects per-claim citations, reducing hallucination in a government-accuracy setting.",
      "Benchmarking: Evaluated against six published RAG methods on a hand-curated 124-item test set: 0.66 multi-hop success rate, 0.289 Arabizi-normalised F1 (next-best 0.034), 0.667 abstain F1.",
    ],
    technologies: [
      "Agentic RAG",
      "BM25",
      "BGE-M3",
      "Reciprocal Rank Fusion",
      "Cross-Encoder Reranking",
      "NLI Verification",
      "Multilingual NLP",
      "Python",
    ],
    imageUrl: "https://res.cloudinary.com/abdrahmanes/image/upload/c_fit,q_auto:eco,w_539/v1791932616/Portfolio-v2/agentic-rag-interface_yjh613.jpg",
    url: "",
    category: "Data_Science",
  },
  {
    title: "Automated Fact-Checking Pipeline via LLM Fine-Tuning & RAG",
    description: [
      "End-to-End Pipeline Engineering: Architected a robust fact-checking system combining Fine-Tuned SLMs (Small Language Models) with Retrieval-Augmented Generation (RAG).",
      "Model Fine-Tuning: Fine-tuned the Mistral-Nemo 12B model using Unsloth (QLoRA) to optimize computational efficiency, achieving a training loss of 0.92.",
      "Synthetic Data Generation: Engineered a high-quality synthetic training dataset via Knowledge Distillation, utilizing Gemini 2.5 Pro to generate reasoning traces for claim verification.",
      "RAG Implementation: Deployed a retrieval pipeline using LangChain and ChromaDB to ground model outputs in verified sources (Politifact, Snopes), successfully mitigating hallucinations in claim extraction and verification tasks.",
    ],
    technologies: [
      "Python",
      "LLM Fine-Tuning",
      "Unsloth (QLoRA)",
      "LangChain",
      "ChromaDB",
      "Mistral-Nemo 12B",
      "Gemini 2.5 Pro",
      "Knowledge Distillation",
    ],
    collaborators: ["Hassan Aabidi", "Hamza Ouarir"],
    imageUrl: "", // Placeholder or leave empty if no image available yet
    url: "", // Add URL if available, otherwise can be empty or link to GitHub profile
    category: "Data_Science",
  },
  {
    title: "Distributed Multi-Agent Anomaly Detection System",
    description: [
      "Built a fault-tolerant multi-agent system that detects anomalies in distributed sensor networks, with 20+ autonomous agents coordinating over XMPP messaging.",
      "Implemented online (streaming) machine learning with River's HalfSpaceTrees, so agents learn incrementally and adapt to concept drift without batch retraining.",
      "Designed a self-healing network topology: agents exchange heartbeats, automatically prune unresponsive peers, and maintain trust/reputation scores to isolate unreliable nodes.",
      "Added trust-based consensus so agents collaboratively validate anomalies and cut false positives, reaching agreement in under 200ms.",
      "Built a Streamlit \"War Room\" dashboard for live topology visualization, fleet health, and chaos-engineering tests, maintaining full operation under 30% node loss.",
    ],
    technologies: [
      "Multi-Agent Systems",
      "XMPP",
      "River",
      "HalfSpaceTrees",
      "Online Learning",
      "Anomaly Detection",
      "Streamlit",
      "Python",
    ],
    collaborators: ["Hamza Ouarir"],
    imageUrl: "",
    url: "",
    category: "Data_Science",
  },
  {
    title: "Brain Tumor Classification & Detection using Deep Learning",
    description: [
      "Deep Learning Architecture: Developed a Convolutional Neural Network (CNN) for medical imaging analysis using TensorFlow and Keras.",
      "Transfer Learning: Leveraged the VGG16 architecture with pre-trained ImageNet weights (frozen base layers, last three layers fine-tuned) to optimize feature extraction and improve classification performance on limited MRI data.",
      "Multi-Class Classification: Successfully trained the model to classify MRI scans into four distinct categories: Glioma, Meningioma, Pituitary tumor, and No Tumor.",
      "Impact: Created a diagnostic support tool capable of assisting in the early detection and categorization of brain anomalies.",
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
    collaborators: ["Hamza Ouarir"],
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
