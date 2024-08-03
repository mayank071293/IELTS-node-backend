import ListeningExam from "../models/listeningExam";
const getListeningExam = async (id: string): Promise<ListeningExam | null> => {
    try {
      const listeningExam = (await ListeningExam.findById(id)) as ListeningExam;
      return listeningExam;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Could not fetch ListeningExam with ID ${id}: ${error?.message}`);
      } else {
        throw new Error(
          `Could not fetch ListeningExam with ID ${id}: An unknown error occurred`
        );
      }
    }
  };
  
  export default {
    getListeningExam,
  };