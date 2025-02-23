export function Footer() {
  return (
    <div>
      <footer className='bg-black px-4 font-[Poppins] text-white'>
        <div className='-gap-2 mx-auto grid h-auto grid-cols-3 content-center px-5 py-10'>
          <div className='flex flex-col items-start space-y-2'>
            <h3 className='text-base font-bold text-gray-400 md:text-lg lg:text-xl'>Quick Links</h3>
            <ul className='md:space-y-1 lg:space-y-1'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  Online fees Payment
                </a>
              </li>
              <li>
                <a href='#' className='text-sm text-gray-500 md:text-base lg:text-base'>
                  Aceademic Calender
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  Residential Book
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-start space-y-2 lg:pl-12'>
            <h3 className='text-base font-bold text-gray-400 md:text-lg lg:text-xl'>Other Links</h3>
            <ul className='lg:space-x-50 md:space-y-1 lg:space-y-1'>
              <li className='text-sm text-gray-500 md:text-base lg:text-base'>
                A<a href='#' className='hover:text-[#be6233]'></a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-start space-y-2 lg:pl-60'>
            <h3 className='text-base font-bold text-gray-400 md:text-lg lg:text-xl'>Contact Us</h3>
            <ul className='lg:space-x-50 md:space-y-1 lg:space-y-1'>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1rem'
                  height='1rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-house'
                >
                  <path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'></path>
                  <path d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                </svg>
                <span className='text-[13px]'>
                  Survey No. 140,141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,
                  Village - Waranga, PO - Dongargaon(Butibori), Tahsil- Nagpur (Rural), District
                  Nagpur, Maharashtra- 441108
                </span>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-[#403185] bg-gray-950 py-4 text-center text-sm font-normal'>
          <p>
            © {new Date().getFullYear()} IIIT Nagpur.
            <br /> Designed and Developed by{' '}
            <a
              href='#'
              className='relative pb-0.5 text-[#f87e42] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
            >
              Students at IIITN
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export function Footer2() {
  return (
    <div>
      <footer className='w-full bg-[#0d0827] px-4 font-[Poppins] text-white'>
        <div className='mx-auto grid h-auto w-full grid-cols-[20%,60%,20%] content-center px-5 py-10'>
          {/* logo section */}
          <div className='text-center font-sans text-4xl font-extrabold text-white'>IIIT</div>
          {/* Contact section */}
          <section className='flex flex-col items-start lg:pl-20 lg:pr-40'>
            <ul className='lg:space-x-50 md:space-y-1 lg:space-y-1'>
              <li className='mt-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1rem'
                  height='1rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-house inline-block align-top'
                >
                  <path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'></path>
                  <path d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                </svg>
                <div className='mb-4 inline-block max-w-[50%] border-b border-[#403185] pb-2 pl-3 text-[13px]'>
                  &gt; Survey No. 140,141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot
                  Girni, Village - Waranga, PO - Dongargaon(Butibori), Tahsil- Nagpur (Rural),
                  District Nagpur, Maharashtra- 441108
                </div>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1rem'
                  height='1rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-send inline-block align-top'
                >
                  <line x1='22' y1='2' x2='11' y2='13'></line>
                  <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                </svg>
                <div className='mb-4 inline-block pl-3 text-sm transition-all hover:pl-4 md:text-base lg:text-base'>
                  <a href='#' className='hover:text-gray-400'>
                    How to reach
                  </a>
                </div>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1rem'
                  height='1rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-phone inline-block align-top'
                >
                  <path d='M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1 4.18 2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.57 2 2 0 0 1 1.72 2z'></path>
                </svg>
                <div className='mb-4 inline-block pl-3 text-sm transition-all hover:pl-4 md:text-base lg:text-base'>
                  <a href='#' className='hover:text-gray-400'>
                    Got a Query?
                  </a>
                </div>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1rem'
                  height='1rem'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-mail inline-block align-top'
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                  <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
                <div className='mb-4 inline-block pl-3 text-sm transition-all hover:pl-4 md:text-base lg:text-base'>
                  <a href='#' className='hover:text-gray-400'>
                    Want to Mail
                  </a>
                </div>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </section>
          {/* Quick links section */}
          <section className='flex flex-col items-start'>
            <h3 className='text-base font-bold md:text-lg lg:text-xl'>Quick Links</h3>
            <ul className='lg:space-x-50'>
              <li className='my-4 border-white text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a
                  href='#'
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                >
                  Online Fees Payment
                </a>
              </li>
              <li className='mb-4 text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a
                  href='#'
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                >
                  Academic Calendar
                </a>
              </li>
              <li className='mb-4 text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a
                  href='#'
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                >
                  Internships
                </a>
              </li>
              <li className='mb-4 text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a
                  href='#'
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                >
                  Career
                </a>
              </li>
              <li className='mb-4 text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a
                  href='#'
                  className='relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
                >
                  Accommodation
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* grid over */}

        {/* credits */}
        <div className='border-t border-[#403185] py-4 text-center text-sm font-normal'>
          <p>
            © {new Date().getFullYear()} IIIT Nagpur.
            <br /> Designed and Developed by{' '}
            <a
              href='#'
              className='relative pb-0.5 text-[#f87e42] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#be6233] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
            >
              Students at IIITN
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
