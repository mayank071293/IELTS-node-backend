import { AnswerKey, Answer } from "../models/answerKey";
import User from "../models/user";
const _ = require("lodash");

const postAnswerKey = async (
  exam_id: string,
  answers: Answer[]
): Promise<boolean | null> => {
  try {
    //validate to post answers in alphabetical order
    await AnswerKey.create({ exam_id, answers });
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Could not create answer key for Exam ID ${exam_id}: ${error?.message}`
      );
    } else {
      throw new Error(
        `Could not create answer key for Exam ID ${exam_id}: An unknown error occurred`
      );
    }
  }
};
const getScore = async (
  user: User,
  exam_id: string,
  exam_type: string,
  responses: (string | string[])[]
) => {
  try {
    const answerKey = await AnswerKey.findOne({ exam_id: exam_id });
    let score = 0;
    console.log(answerKey);

    answerKey?.answers.forEach((answer) => {
      if (
        typeof responses[parseInt(answer.question_number) - 1] == "string" &&
        responses[parseInt(answer.question_number) - 1] == answer.options[0]
      ) {
        score++;
      }
      //response is array
      else if (
        _.isEqual(
          responses[parseInt(answer.question_number) - 1],
          answer.options
        )
      ) {
        score++;
      }
    });

    await User.updateOne(
      { email: user.email },
      { $push: { scores: { exam_id, exam_type, responses, score } } }
    );

    return score;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Could not score Exam ID ${exam_id}: ${error?.message}`);
    } else {
      throw new Error(
        `Could not score Exam ID ${exam_id}: An unknown error occurred`
      );
    }
  }
};

export default { postAnswerKey, getScore };
