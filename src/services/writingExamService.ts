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

export default {
  getWritingExam,
};
