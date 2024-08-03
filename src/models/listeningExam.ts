import { Document, Schema, model } from "mongoose";

interface ListeningQuestion {
  question_number: string;
  statement: string;
  options: string[];
}

const ListeningQuestionSchema = new Schema<ListeningQuestion>({
  question_number: { type: String, required: true },
  statement: { type: String, required: true },
  options: { type: [String], required: true },
});

interface ListeningQuestionSet {
  audio: string; //url
  paragraph: string;
  question_range: string; // "1-5"
  questions: ListeningQuestion[];
}

const ListeningQuestionSetSchema = new Schema<ListeningQuestionSet>({
  audio: { type: String },
  paragraph: { type: String, required: true },
  question_range: { type: String, required: true },
  questions: { type: [ListeningQuestionSchema], required: true },
});

// Define a TypeScript interface for the ListeningExam document
interface ListeningExam extends Document {
  question_sets: ListeningQuestionSet[];
}

// Create a Mongoose schema based on the ListeningExam interface
const ListeningExamSchema = new Schema<ListeningExam>({
  question_sets: { type: [ListeningQuestionSetSchema], required: true },
});

// Create a Mongoose model based on the schema
const ListeningExam = model<ListeningExam>(
  "ListeningExam",
  ListeningExamSchema
);

export default ListeningExam;
