import LineChart from './components/LineChart/LineChart'
import NavBer from './components/NavBar/NavBer'
import Phons from './components/Phons/Phons'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      <NavBer></NavBer>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-5xl bg-red-500 mt-10 text-center'>Assalamualikum</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phons></Phons>
    </>
  )
}

export default App
