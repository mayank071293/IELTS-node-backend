import mongoose, { Document, ObjectId, Schema, model } from "mongoose";
interface Answer {
  question_number: string;
  explanation: string;
  options: string[];
}

const AnswerSchema = new Schema<Answer>({
  question_number: { type: String, required: true },
  explanation: { type: String },
  options: { type: [String], required: true },
});

interface AnswerKey extends Document {
  exam_id: ObjectId;
  answers: Answer[];
}

const AnswerKeySchema = new Schema<AnswerKey>({
  exam_id: { type: mongoose.Types.ObjectId, required: true, unique: true },
  answers: { type: [AnswerSchema], required: true },
});

AnswerKeySchema.index({ exam_id: 1 }, { unique: true });

const AnswerKey = model<AnswerKey>("AnswerKey", AnswerKeySchema);

export { AnswerKey, Answer };
