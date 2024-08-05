import {AnswerKey,Answer} from "../models/answerKey";
const postAnswerKey  = async (exam_id: string, answers:Answer[]) : Promise <boolean | null> => {

    try {
        await AnswerKey.create({exam_id,answers})
        return true;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Could not create answer key for Exam ID ${exam_id}: ${error?.message}`);
        } else {
          throw new Error(
            `Could not create answer key for Exam ID ${exam_id}: An unknown error occurred`
          );
        }
      }
}

export default {postAnswerKey};