import ReadingExam from "../models/readingExam";
const getReadingExam = async (id: string): Promise<ReadingExam | null> => {
    try {
      const readingExam = (await ReadingExam.findById(id)) as ReadingExam;
      return readingExam;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Could not fetch ReadingExam with ID ${id}: ${error?.message}`);
      } else {
        throw new Error(
          `Could not fetch ReadingExam with ID ${id}: An unknown error occurred`
        );
      }
    }
  };
  
  export default {
    getReadingExam,
  };