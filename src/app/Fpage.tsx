import Fcards from './components/facultyCard'

export default async function Fpage() {
  return (
    <div className='relative m-0 min-h-screen w-full p-0'>
      {/* <div className="absolute -top-40 left-0 h-[80vh] w-full ">
        <Image
          src="/college.jpg"
          fill
          style={{objectFit:"cover", zIndex:-10, objectPosition:"top"}}
          alt="college"
          className="filter blur-sm"
        />
      </div> */}
      <div className='z-10 my-36 flex h-[60%] w-full cursor-pointer flex-col items-center justify-center'>
        <div className='mb-4 bg-transparent font-mono text-3xl font-semibold tracking-[0.5rem] text-iip'>
          <pre>ABOUT US</pre>
        </div>
        <div className='rounded-md border bg-white p-2 text-iip'>Home &gt; About us</div>
      </div>
      <div className='mt-40 flex w-[90%] flex-col items-center justify-center rounded-lg border bg-white p-4 text-black'>
        <header className='text-center text-3xl font-bold text-iip'>HOD</header>
        <Fcards img={'#'} name='Neha Kasture' position='Assistant Professor' />
      </div>
    </div>
  )
}
