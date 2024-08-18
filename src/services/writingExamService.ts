import User from "../models/user";
import WritingExam from "../models/writingExam";
const getWritingExam = async (id: string): Promise<WritingExam | null> => {
  try {
    const writingExam = (await WritingExam.findById(id)) as WritingExam;
    return writingExam;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Could not fetch WritingExam with ID ${id}: ${error?.message}`
      );
    } else {
      throw new Error(
        `Could not fetch WritingExam with ID ${id}: An unknown error occurred`
      );
    }
  }
};

const postWritingExamResponse = async (
  user: User,
  exam_id: string,
  exam_type: string,
  responses: string[]
): Promise<boolean | null> => {
  try {
    let score = {
      exam_id,
      exam_type,
      responses,
      feedback: [],
      score: 0,
    };
    await User.findOneAndUpdate(
      { email: user.email },
      { $push: { scores: score } }
    );
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Could not post WritingExamResponse with ID ${exam_id}: ${error?.message}`
      );
    } else {
      throw new Error(
        `Could not post WritingExamResponse with ID ${exam_id}: An unknown error occurred`
      );
    }
  }
};
export default {
  getWritingExam,
  postWritingExamResponse,
};
