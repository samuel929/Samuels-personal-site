import { Link } from "@remix-run/react";
import { NotebookIcon } from "lucide-react";
import { Resume } from "~/utils/interface";

interface IProps {
  resume: Resume;
}

const ResumeItem = ({ resume }: IProps) => {
  return (
    <Link to={`resume/${resume.resumeId}`}>
      <div
        className='p-14 bg-slate-500 h-[280px]
        flex items-center justify-center border border-red-600
        rounded-lg hover:scale-105 transition-all shadow-md
    '
      >
        <NotebookIcon />
      </div>
      <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  );
};

export default ResumeItem;
