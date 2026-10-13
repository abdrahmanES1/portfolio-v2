export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "Java"]
    },
    {
        title: "AI / ML",
        skills: [
            "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
            "NLP (Spacy, Transformers)", "RAG", "Agentic RAG", "Hybrid Retrieval (BM25 + BGE-M3)", "Reranking", "Multilingual NLP (Arabic, Darija)", "LLM/SLM", "Deep Learning", "CNN"
        ]
    },
    {
        title: "Web Development",
        skills: [
            "React.js", "Next.js", "Node.js", "Express.js",
            "Django", "Flask", "FastAPI", "Spring Framework", "JEE",
            "Redux Toolkit", "Tailwind CSS"
        ]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Microsoft SQL Server", "Oracle", "ChromaDB"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "Docker", "CI/CD", "Streamlit", "Jupyter Notebook", "LangChain", "Ollama", "Hugging Face"]
    }
];
