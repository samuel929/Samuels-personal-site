import { useContext } from "react";
import { ResumeinfoContext } from "~/context/ResumeInfoContext";
import PersonalDetailPreview from "../Preview/PersonalDetailPreview";
import SummaryPreview from "./SummaryPreview";
import ProffesionalExperiance from "./ProffesionalExperiance";
import EducationalPreview from "./EducationalPreview";
import SkillPreview from "./SkillPreview";

const PreviewSection = () => {
  const { resumeinfo, setResumeInfo } = useContext(ResumeinfoContext);
  return (
    <div
      className='shadow-lg h-full p-14 border-t-[20px]'
      style={{
        borderColor: resumeinfo?.themeColor,
      }}
    >
      <PersonalDetailPreview resumeInfo={resumeinfo} />
      <SummaryPreview resumeInfo={resumeinfo} />
      <ProffesionalExperiance resumeInfo={resumeinfo} />
      <EducationalPreview resumeInfo={resumeinfo} />
      <SkillPreview resumeInfo={resumeinfo} />
    </div>
  );
};

export default PreviewSection;
