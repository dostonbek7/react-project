import Form from '../components/Form'
import data from '../data/Data'
import Grid from '../data/Grid'
import Category from './Category'
import Galarey from './Galarey'

function Home() {
  return (
    <div className="flex flex-col gap-6">
    <Form/>
    <h2 className="text-[#fff] text-[32px] font-light">Trending</h2>
    <Galarey data={data} grid={Grid}/>
    <h2 className="text-[#fff] text-[32px] font-light">Recommended for you</h2>
    <Category data ={Grid}/>
    </div>
  )
}

export default Home