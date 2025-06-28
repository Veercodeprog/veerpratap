import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faBitbucket } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function MainHeader() {
  return (
    <header
      className=" py-5 site-header bg-white border-b-2 shadow-sm border-gray-200 inline-block w-full"
      style="margin-left: 8px"
    >
      <div className="branding">
        <Link href="/">
          <img
            alt="Avatar"
            className="avatar h-16 w-16 float-left mt-3 mr-4 rounded-md"
            src="/assets/veer-pratap.jpeg"
          />
        </Link>
      </div>
      <nav className="site-nav mt-4 clearfix">
        <h1 className="site-title font-bold text-base leading-6">
          <Link href="/">Veer Pratap Singh Tomar</Link>
        </h1>
        <ul className="list-none inline-block text-base leading-6 text-left float-left">
          <li className="inline-block mr-4">
            <Link
              className="page-link text-black hover:text-teal-500"
              href="/about"
            >
              About
            </Link>
          </li>
          {/* <li className="inline-block mr-4"><Link className="page-link text-black hover:text-teal-500" href="/research/">Research</Link></li> */}
          <li className="inline-block mr-4">
            <Link
              className="page-link text-black hover:text-teal-500"
              href="opensource.html"
            >
              OpenSource
            </Link>
          </li>
          {/* <li className="inline-block mr-4"><Link className="page-link text-black hover:text-teal-500" href="/photography/">Photography</Link></li> */}
          {/* <li className="inline-block mr-4"><Link className="page-link text-black hover:text-teal-500" href="/cv/">CV</Link></li> */}
          <li className="inline-block mr-4">
            <Link
              className="page-link text-black hover:text-teal-500"
              href="/blog/"
            >
              Blog
            </Link>
          </li>

          <li className="inline-block mr-4">
            <Link target="_blank" href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>

          <li className="inline-block mr-4">
            <Link target="_blank" href="">
              <FontAwesomeIcon icon={faRss} className="w-5 h-5" />
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link
              href="https://github.com/Veercodeprog"
              title="Follow on GitHub"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="w-5 h-5" />
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="" title="Follow on Bitbucket">
              <FontAwesomeIcon icon={faBitbucket} className="w-5 h-5" />
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="" title="Follow on Facebook">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/" title="Follow on LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="" title="Follow on Twitter">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
