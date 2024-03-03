

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#212731] text-[#B6BDC3]">
        <nav>
          <h6 className=" uppercase mb-4 text-[16px]">Categories</h6>
          <a className="link text-[13px] mb-3 link-hover ">Web Builder</a>
          <a className="link text-[13px] link-hover mb-3">Hosting</a>
          <a className="link mb-3 text-[13px] link-hover">Data Center</a>
          <a className="link mb-3 text-[13px] link-hover">Robotic-Automation</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;