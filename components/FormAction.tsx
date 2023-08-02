import React from "react";

interface FormActionProps {
    handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
    type?: 'Button';
    action?: 'submit';
    text: string;
}

export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}: FormActionProps){
    return(
        <div>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#389f8e] hover:bg-[#206e61] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onClick={handleSubmit}
            >

                {text}
            </button>
            :
            ""
        }
        </div>
    )
}