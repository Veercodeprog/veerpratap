import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainHeader from './components/layout.tsx/header';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>

<MainHeader />
<section className="my-10 post-content project max-w-2xl mx-auto">
        <Link href="https://github.com/Veercodeprog?tab=repositories"  className="octocat hover:text-green-600" >
         
 <div className="flex flex-col items-center">
             <FontAwesomeIcon icon={faSquareGithub} className='w-1/3 h-1/3' />
            <div className="text-lg mt-3">View all of my projects on GitHub!</div>
          </div>
        </Link>
        <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">IBM Cloud Project: NLU, Cloudant &amp; CI/CD Pipeline</h2>
        <div className="project-meta text-gray-500 text-sm mb-4">
          <div className="context font-bold">Analyze and modify Cloudant and toolchains for CI/CD</div>
        </div>
        <div className="badges mb-4">
          <Link href="" className="fa fa-github" />
        </div>
        <div className="project-description text-justify">
          <p>
            <Link href="" className="text-green-600 font-bold">IBM Cloud Project: NLU, Cloudant &amp; CI/CD Pipeline</Link> This project involves creating instances of the Cloudant and Natural Language Understanding (NLU) services on IBM Cloud. It also includes setting up a CI/CD pipeline using a toolchain and delivery pipeline. The pipeline is configured to use a GitHub repository, with a build stage that uses input from a forked repository, and a deploy stage. The final step is to deploy the Node JS application from the Git repository to CE using IBM Cloud Code Engine CLI in the lab environment. Environment variables for the Cloudant service and NLU are collected and used in the Node application. Once deployed, the web application can be accessed using the deployment URL.
          </p>
        </div>
      </section>


</>
  )
}
