

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 md:pt-10 md:px-24 md:pb-24  bg-[#212731] ">
        <nav>
          <h6 className=" uppercase mb-4 text-white text-[16px]">Categories</h6>
          <a className="link text-[13px] text-[#B6BDC3] mb-3 link-hover ">
            Web Builder
          </a>
          <a className="link text-[#B6BDC3] text-[13px] link-hover mb-3">
            Hosting
          </a>
          <a className="link text-[#B6BDC3] mb-3 text-[13px] link-hover">
            Data Center
          </a>
          <a className="link text-[#B6BDC3] mb-3 text-[13px] link-hover">
            Robotic-Automation
          </a>
        </nav>
        <nav>
          <h6 className="  uppercase mb-4 text-white text-[16px]">Contact</h6>
          <a className="link link-hover mb-3 text-[14px]  text-[#B6BDC3]">
            Contact
          </a>
          <a className="link link-hover mb-3 text-[14px]  text-[#B6BDC3]">
            Privacy Policy
          </a>
          <a className="link link-hover mb-3 text-[14px]  text-[#B6BDC3]">
            Terms Of Service
          </a>
          <a className="link link-hover mb-3 text-[14px]  text-[#B6BDC3]">
            Categories
          </a>
          <a className="link link-hover mb-3 text-[14px]  text-[#B6BDC3]">
            About
          </a>
        </nav>
        <nav>
          <div className="md:mt-20">
            <div className="flex">
              <div className="text-[#D1D6DA] mr-2 text-[13px]">
                United States
              </div>
              <div>
                <svg
                  width="15px"
                  height="9px"
                  className="h-2 w-2 fill-current text-[#D1D6DA] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;