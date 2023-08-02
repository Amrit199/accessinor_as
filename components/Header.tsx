import Link from "next/link";
import { RiLoginBoxLine } from 'react-icons/ri'

interface HeaderProps {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

export default function Header({ heading, paragraph, linkName, linkUrl}: HeaderProps) {
    return (
      <div className="mb-10">
      <div className="flex justify-center">
      <RiLoginBoxLine className="h-14 w-14 text-[#389f8e]" aria-hidden="true" />
          {/* <img 
              alt=""
              className="h-14 w-14"
              src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/> */}
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mb-5">
      {paragraph} {' '}
      <Link href={linkUrl} className="font-medium text-[#389f8e] hover:text-[#206e61]">
          {linkName}
      </Link>
      </p>
  </div>
    )
}