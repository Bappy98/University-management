
import Slider from '../../component/slider/Slider'
import SpeechByPrincipal from '../../component/speechByPrincipal/SpeechByPrincipal'
import Activities from '../../component/recentActivities/Activities'
import Faculty from '../../component/faculty/Faculty'

import Clubs from '../../component/clubs/Clubs'

function Home() {
  return (
    <>
   
    <Slider/>
    <SpeechByPrincipal/>
    <Activities/>
    <Faculty/>
    <Clubs/>
    </>
  )
}

export default Home