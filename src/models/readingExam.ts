import { Document, Schema, model } from "mongoose";

interface ReadingQuestion {
  question_number: string;
  statement: string;
  options: string[];
}

const ReadingQuestionSchema = new Schema<ReadingQuestion>({
  question_number: { type: String, required: true },
  statement: { type: String, required: true },
  options: { type: [String], required: true },
});

interface ReadingQuestionSet {
  image: string; //url
  paragraph: string;
  question_range: string; // "1-5"
  questions: ReadingQuestion[];
}

const ReadingQuestionSetSchema = new Schema<ReadingQuestionSet>({
  image: { type: String },
  paragraph: { type: String, required: true },
  question_range: { type: String, required: true },
  questions: { type: [ReadingQuestionSchema], required: true },
});

// Define a TypeScript interface for the ReadingExam document
interface ReadingExam extends Document {
  question_sets: ReadingQuestionSet[];
}

// Create a Mongoose schema based on the ReadingExam interface
const ReadingExamSchema = new Schema<ReadingExam>({
  question_sets: { type: [ReadingQuestionSetSchema], required: true },
});

// Create a Mongoose model based on the schema
const ReadingExam = model<ReadingExam>("ReadingExam", ReadingExamSchema);

export default ReadingExam;
