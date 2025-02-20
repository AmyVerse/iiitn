export default function Footer() {
  return (
    <div>
      <footer className="bg-black px-4 font-[Poppins] text-white">
        <div className="-gap-2 mx-auto grid h-auto grid-cols-3 content-center px-5 py-10">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-base font-bold text-gray-400 md:text-lg lg:text-xl">
              Quick Links
            </h3>
            <ul className="md:space-y-1 lg:space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base"
                >
                  Online fees Payment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 md:text-base lg:text-base"
                >
                  Aceademic Calender
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base"
                >
                  Residential Book
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-2 lg:pl-12">
            <h3 className="text-base font-bold text-gray-400 md:text-lg lg:text-xl">
              Other Links
            </h3>
            <ul className="lg:space-x-50 md:space-y-1 lg:space-y-1">
              <li className="text-sm text-gray-500 md:text-base lg:text-base">
                A<a href="#" className="hover:text-[#be6233]"></a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-2 lg:pl-60">
            <h3 className="text-base font-bold text-gray-400 md:text-lg lg:text-xl">
              Contact Us
            </h3>
            <ul className="lg:space-x-50 md:space-y-1 lg:space-y-1">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="text-[13px]">
                  Survey No. 140,141/1 Behind Br. Sheshrao Wankhade Shetkari
                  Sahkari Soot Girni, Village - Waranga, PO -
                  Dongargaon(Butibori), Tahsil- Nagpur (Rural), District Nagpur,
                  Maharashtra- 441108
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#403185] bg-gray-950 py-4 text-center text-sm font-normal">
          <p>
            © {new Date().getFullYear()} IIIT Nagpur.
            <br /> Designed and Developed by{" "}
            <a
              href="#"
              className="relative pb-0.5 text-[#f87e42] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Students at IIITN
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
