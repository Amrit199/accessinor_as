import { BiCheckSquare } from 'react-icons/bi'
import { TbTargetArrow, TbScanEye } from 'react-icons/tb'
import { MdOutlineRecommend, MdOutlineMonitorHeart, MdOutlineIntegrationInstructions } from 'react-icons/md'
import featureimg from '../../public/assets/page-quality.png'
import resimg from '../../public/assets/responsive-website.png'
import secimg from '../../public/assets/server.png'
import img from '../../public/assets/Untitled design.png'

import Image from 'next/image';
const features = [
  {
    name: "Comprehensive Accessibility Checks",
    description:
      "Our AI-powered tool conducts thorough scans of your website to identify accessibility issues and provides detailed reports.",
    icon: BiCheckSquare,
  },
  {
    name: "Efficiency and Accuracy",
    description:
      "With advanced algorithms and machine learning, our checker delivers swift and precise results, saving you valuable time and effort.",
    icon: TbTargetArrow,
  },
  {
    name: "Customizable Scans",
    description:
      "Tailor the accessibility checks to match your specific needs, ensuring compliance with the latest accessibility standards.",
    icon: TbScanEye,
  },
  {
    name: "Actionable Recommendations",
    description:
      "Receive clear and actionable recommendations to fix accessibility issues and improve the user experience for all visitors.",
    icon: MdOutlineRecommend,
  },
  {
    name: "Real-time Monitoring",
    description:
      "Stay informed about the accessibility status of your website with automated, regular scans and alerts for any new issues that arise.",
    icon: MdOutlineMonitorHeart,
  },
  {
    name: "Integration and Compatibility",
    description:
      "Seamlessly integrate our accessibility checker into your existing development workflow and ensure compatibility with popular content management systems.",
    icon: MdOutlineIntegrationInstructions,
  },
];

export default function Demo() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Features
              </h2>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <div
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </div> */}
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='w-full xs:hiddden lg:visible self-center justify-self-center relative'>
          <Image src={featureimg} alt="Product screenshot"
            className="w-[15rem] lg:absolute lg:-top-24 max-w-none rounded-xl shadow-xl shadow-slate-600 ring-1 ring-gray-400/10"
            width={400}
            height={400} />
            <Image src={resimg} alt="Product screenshot"
            className="w-[15rem] lg:absolute -top-24 right-0 max-w-none rounded-xl shadow-xl shadow-slate-600 ring-1 ring-gray-400/10"
            width={400}
            height={400} />
            <Image src={secimg} alt="Product screenshot"
            className="w-[15rem] absolute top-20 left-44 max-w-none rounded-xl shadow-2xl shadow-slate-800 ring-1 ring-gray-400/10"
            width={400}
            height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}