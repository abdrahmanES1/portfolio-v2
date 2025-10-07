import { Project } from "@/types";

export const projects: Project[] = [
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
    imageUrl: "",

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
    ],
    imageUrl:
      "",
    url: "",
    category: "Data_Science",
  },
  
];
