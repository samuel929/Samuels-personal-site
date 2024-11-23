import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  useSubmit,
  useActionData,
  useNavigation,
} from "@remix-run/react";
import { action } from "~/models/resumebuilder";
import { cn } from "@/lib/utils";

const AddResume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (actionData?.success) {
      closeModal();
      setResumeTitle("");
      // You might want to show a success message or redirect here
    }
  }, [actionData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const uuid = uuidv4();
    const formData = new FormData(event.currentTarget);
    formData.append("resumeId", uuid);
    formData.append("userEmail", "sstest.com"); // You might want to get this dynamically
    formData.append("username", "Samss"); // You might want to get this dynamically
    submit(formData, { method: "post" });
  };

  return (
    <div>
      <div
        className='p-14 py-24 border items-center flex justify-center bg-gray-600 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
        onClick={openModal}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openModal();
        }}
      >
        <PlusSquare />
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
          ref={modalRef}
        >
          <Form
            method='post'
            className='bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg max-w-lg w-full p-6 relative'
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <h2
              id='modal-title'
              className='text-lg font-semibold text-black dark:text-white'
            >
              Create New Resume
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-2 mb-4'>
              Add Title for your new resume
              <Input
                name='title'
                placeholder='E.g Law Resume'
                value={resumeTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setResumeTitle(e.target.value)
                }
                className='mt-2 w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 rounded-lg p-2 outline-none'
              />
            </p>

            {actionData?.error && (
              <p className='text-red-500 mb-4'>{actionData.error}</p>
            )}

            <div className='flex justify-end space-x-2'>
              <Button
                type='button'
                variant='ghost'
                onClick={closeModal}
                className='bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg px-4 py-2'
              >
                Cancel
              </Button>
              <Button
                type='submit'
                disabled={!resumeTitle || navigation.state === "submitting"}
                className={cn(
                  "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg px-4 py-2",
                  !resumeTitle ? "bg-red-300 hover:bg-red-300 " : ""
                )}
              >
                {navigation.state === "submitting" ? "Creating..." : "Create"}
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AddResume;
