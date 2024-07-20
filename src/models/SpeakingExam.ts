import { Document, Schema, model } from "mongoose";

// Define a TypeScript interface for the SpeakingExam document
interface SpeakingExam extends Document {
  question_sets: [String];
}

// Create a Mongoose schema based on the SpeakingExam interface
const SpeakingExamSchema = new Schema<SpeakingExam>({
  question_sets: { type: [String], required: true },
});

// Create a Mongoose model based on the schema
const SpeakingExam = model<SpeakingExam>("SpeakingExam", SpeakingExamSchema);

export default SpeakingExam;
