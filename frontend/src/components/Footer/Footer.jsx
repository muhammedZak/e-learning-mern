import React from 'react';

const Footer = () => {
  return (
    <div className="py-10 px-6 bg-slate-900">
      <div className="md:flex text-white ">
        <div className="w-96">
          <li className="list-none ">
            <a href="" className="text-sm">
              {' '}
              Business
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Become instructor
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Get the App
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              About us
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Contact us
            </a>
          </li>
        </div>
        <div className="w-96">
          <li className="list-none ">
            <a href="" className="text-sm">
              Careers
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Blog
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Help and support
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Affilate
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Investors
            </a>
          </li>
        </div>
        <div className="w-96">
          <li className="list-none ">
            <a href="" className="text-sm">
              Terms
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Privacy policy
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Cookie settings
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Sitemap
            </a>
          </li>
          <li className="list-none ">
            <a href="" className="text-sm">
              Accessibility statement
            </a>
          </li>
        </div>
        <div className="w-96 md:text-end">
          <li className="list-none  py-1">
            <button className="py-2 px-7 border">English</button>
          </li>
        </div>
      </div>
      <div className="pt-10 text-white md:flex items-center justify-between">
        <div>
          <img
            width={100}
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="pt-2">© 2024 Udemy, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
