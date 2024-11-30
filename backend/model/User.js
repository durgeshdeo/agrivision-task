import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  userName: { type: String, required: true },
  totalScore: { type: Number, required: true },
  rank: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  strongAreas: { type: Number, required: true },
  weakAreas: { type: Number, required: true },
  skippedQuestions: { type: Number, required: true },
  timeTaken: { type: String, required: true },
  topTime: { type: String, required: true },
  timeTakenPerQuestion: { type: String, required: true },
  topTimeTakenPerQuestion: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
