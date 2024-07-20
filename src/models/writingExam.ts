import { Document, Schema, model } from "mongoose";

// Define a TypeScript interface for the WritingExam document
interface WritingExam extends Document {
  question_sets: [string];
}

// Create a Mongoose schema based on the WritingExam interface
const WritingExamSchema = new Schema<WritingExam>({
  question_sets: { type: [String], required: true },
});

// Create a Mongoose model based on the schema
const WritingExam = model<WritingExam>("WritingExam", WritingExamSchema);

export default WritingExam;
