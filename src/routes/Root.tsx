import { Outlet } from 'react-router-dom';

const Root = () => {

  return (
    <>
      <div>
        The Root Baby
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </>
  )
}

export default Root;