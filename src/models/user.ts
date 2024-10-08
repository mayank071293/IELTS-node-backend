import mongoose, { Document, Schema, model, ObjectId } from "mongoose";

enum ExamTypes {
    LISTENING = "LISTENING",
    READING = "READING",
    WRITING = "WRITING",
    SPEAKING = "SPEAKING"
}
interface Score {
  exam_id: ObjectId;
  exam_type: ExamTypes;
  responses: (string | string[])[]; //sometimes there are multiple responses to a single question
  feedback: string[]; //specific for writing/speaking exam
  score: number;
}
const ScoreSchema = new Schema<Score>({
    exam_id: { type: mongoose.Types.ObjectId, required: true,unique:true },
    exam_type: { type: String, enum: Object.values(ExamTypes) as string[], required: true },
    responses: { type: [Schema.Types.Mixed], required: true },
    feedback: { type: [String] },
    score: { type: Number, required: true }
  });
// Define a TypeScript interface for the User document
interface User extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  scores: Score[];
}

// Create a Mongoose schema based on the User interface
const UserSchema = new Schema<User>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scores: { type: [ScoreSchema], required: true }
});

// Create a Mongoose model based on the schema
const User = model<User>("User", UserSchema);

export default User;
