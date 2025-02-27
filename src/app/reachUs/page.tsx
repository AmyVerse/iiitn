export default function Contact() {
  return (
    <div className='z-10 flex flex-col items-center justify-center bg-gray-200'>
      {/* Header Section */}
      <div className='relative h-64 w-full'>
        <img
          src='/flowers.jpg'
          alt='Reach Us'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
          <h1 className='text-4xl font-bold text-white'>Reach Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='mt-16 flex w-full max-w-6xl flex-col p-8 md:flex-row'>
        {/* Left Side - Address */}
        <div className='w-full p-4 md:w-1/2'>
          <h2 className='mb-4 text-2xl font-semibold text-black'>Address</h2>
          <p className='text-lg text-black'>
            Indian Institute of Information Technology, Nagpur
            <br />
            Survey No. 140,141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,
            <br />
            Village - Waranga, PO - Dongargaon (Butibori),
            <br />
            District - Nagpur, Maharashtra - 441108
          </p>
        </div>

        {/* Right Side - Google Map */}
        <div className='w-full p-4 md:w-1/2'>
          <h2 className='mb-4 text-2xl font-semibold text-black'>Location</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0642676915013!2d79.02379451166968!3d20.949934090398948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1740534617351!5m2!1sen!2sin'
            width='100%'
            height='400'
            style={{ border: 1, borderRadius: 8 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      {/* How to Reach Section */}
      <div className='w-full max-w-6xl p-8'>
        <h2 className='mb-4 text-2xl font-semibold text-black'>How to Reach IIITN</h2>
        <ul className='list-inside list-disc text-lg text-black'>
          <li>
            <strong>By Road:</strong> IIITN is well connected by road. You can take a taxi or bus
            from Nagpur city to reach the campus.
          </li>
          <li>
            <strong>By Bus:</strong> Regular bus services are available from Nagpur city to the
            campus. The nearest bus stop is Waranga.
          </li>
          <li>
            <strong>By Train:</strong> The nearest railway station is Nagpur Junction, which is
            well-connected to major cities in India. From the station, you can take a taxi or bus to
            reach the campus.
          </li>
          <li>
            <strong>By Air:</strong> The nearest airport is Dr. Babasaheb Ambedkar International
            Airport, Nagpur. From the airport, you can take a taxi or bus to reach the campus.
          </li>
        </ul>
      </div>
    </div>
  )
}
