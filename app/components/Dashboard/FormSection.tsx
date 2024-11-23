import { Button } from "@/components/ui/button";
import PersonalDetail from "../Forms/PersonalDetail";
import { ArrowLeft, ArrowRight, LayoutGridIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button
          variant='outline'
          className='bg-red-600 outline text-white flex gap-2'
        >
          <LayoutGridIcon />
          Theme
        </Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button
              className='bg-red-600 text-white'
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className={cn(
              "flex gap-2 bg-red-600 outline text-white",
              !enableNext ? "bg-red-300" : ""
            )}
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetail enableNext={(v: boolean) => setEnableNext(v)} />
      ) : null}
    </div>
  );
};

export default FormSection;
