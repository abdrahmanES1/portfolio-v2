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
            "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy",
            "LLM Fine-Tuning (QLoRA)", "RAG", "LLM/SLM", "Machine Learning",
            "NLP (Spacy, Transformers)", "Computer Vision", "Deep Learning", "CNN", "Unsloth"
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
