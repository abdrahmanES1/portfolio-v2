import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "February 2026 – June 2026",
    position: "AI/ML Engineer — Master's Thesis",
    place: "Université Cadi Ayyad",
    description: [
      "Designed and built an agentic RAG system answering Moroccan public-service questions in four languages (MSA, Darija, Arabizi, French), running locally on a single consumer GPU with a 4B open-weights generator.",
      "Architected an 11-stage pipeline: hybrid retrieval (BM25 + BGE-M3 dense, fused with Reciprocal Rank Fusion) with cross-encoder reranking, a single-call LLM router producing six routing signals, and a plan-execute-reflect-synthesise agent loop with five deterministic tools for multi-hop and legal questions.",
      "Built a Natural Language Inference verification stage that scores each claim against retrieved evidence and injects per-claim citations, reducing hallucination in a government-accuracy setting.",
      "Benchmarked against six published RAG methods on a hand-curated 124-item test set: 0.66 multi-hop success rate, 0.289 Arabizi-normalised F1 (next-best 0.034), and 0.667 abstain F1.",
      "Shipped a REST API and web interface for querying in any of the four languages with inline citations."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "RAG",
      "LangChain",
      "BM25",
      "BGE-M3",
      "NLI",
      "FastAPI"
    ],
    category: "Data_Science",
  },
];
