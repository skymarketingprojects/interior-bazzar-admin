import { useState } from "react";
import { FeedbackService } from "../../../../api/modules/feedback";
import useToast from "../../Toast/useToast";

import { useAppSelector } from "../../../../redux/store/hook";
const useFeedback = () => {
  const questions = [
    "How’s the experience?",
    "How’s the UI-UX?",
    "How’s the Lead Quality?",
    "Customer Support",
  ];
  const { showToast } = useToast();
  const [ratings, setRatings] = useState<number[]>(
    Array(questions.length).fill(0)
  );

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  // when user clicks a star for a specific question
  const handleRating = (questionIndex: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[questionIndex] = value;
    setRatings(newRatings);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const feedbackData = questions.map((q, i) => ({
      question: q,
      rating: ratings[i],
    }));
    try {
      const res = await FeedbackService.submitContactInfo(feedbackData);
      if (!res.response) {
        throw new Error("Error while submittion");
      }
      showToast({
        greeting: "Thank you",
        booldMessage: "Feedback submitted successfully",
        normalMessage: "Our product team will look into it",
        type: "success",
      });
    } catch (e) {
      showToast({
        greeting: "OOps...",
        booldMessage: "Feedback could not be submitted",
        normalMessage: "Please try and fill the form again",
        type: "error",
      });
      alert("Error while submittion");
    }
  };
  return {
    isAuthenticated,
    ratings,
    questions,
    handleRating,
    handleSubmit,
  };
};
export default useFeedback;
