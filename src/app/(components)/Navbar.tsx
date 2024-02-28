

const Navbar = () => {
  return (
    <nav className='bg-slate-800 w-full h-10 flex justify-center'>
      <div className='w-6/12 flex justify-left items-center p-4'>
        <span>Brawlhalla Stats</span>
      </div>
      <div className='w-6/12 flex justify-center items-center'>
        <ul className='w-full flex justify-end items-center p-4 gap-x-5'>
          <li>1v1</li>
          <li>2v2</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar