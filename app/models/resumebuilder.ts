import { hygraph } from "~/utils/hygraph.server";

export const createAiResume = async (email: string, title: string, username: string, resumeId: string) => {
  const mutation = `
    mutation MyMutation {
        createAiResume(data: {
            userEmail: "${email}",
            title: "${title}",
            username: "${username}",
            resumeId: "${resumeId}"
        }) {
            id
            userEmail
            title
            username
            resumeId
        }
    }
    `;

  const result = await hygraph.request(mutation);
  return result;
};


export const fetchResumes = async () => {
  const query = `
        query MyQuery {
            aiResume(where: {resumeId: "1adfbe51-91a2-4714-973b-2612b62b1b85"}) {
              userEmail
              id
              resumeId
              username
              title
            }
          }
    `
  const result = await hygraph.request(query);

  return result;

}




export const UpdateResumeDetail = async (data: any) => {
  console.log(data.resumeId)
  const mutation = `
    mutation MyMutation {
        updateAiResume(
          data: {email: "${data.email}", firstName: "${data.firstName}", lastName: "${data.lastName}", jobTitle: "${data.jobTitle}", address: "${data.address}", phone: "${data.phone}"}
          where: {resumeId: "${data.resumeId}"}
        ) {
          address
          email
          firstName
          jobTitle
          lastName
          phone
        }
      }
    `
  const result = await hygraph.request(mutation);
  return result;
}