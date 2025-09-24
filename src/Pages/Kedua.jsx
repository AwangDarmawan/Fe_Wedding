

import Keseluruhan from '../Component/Keseluruhan'
// import Nav from '../Component/Nav'
import { useParams } from 'react-router-dom';
const Kedua = () => {
  const { nama } = useParams();
  return (
    <>
    
      <Keseluruhan nama={nama}/>
     
    </>
  )
}

export default Kedua
