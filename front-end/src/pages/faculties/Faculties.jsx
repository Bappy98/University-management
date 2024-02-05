import Title from '../../util/Tilte/Title'
import SpeechByPrincipal from '../../component/speechByPrincipal/SpeechByPrincipal'
import Teachers from '../../component/teacher/Teachers'
import FacultyNews from '../../component/faculty news/FacultyNews'
import Achievement from '../../component/achievement/Achievement'

function Faculties() {
  return (
    <div className='bg-slate-400 py-16'>
        <Title>Cse</Title>
        <SpeechByPrincipal/>
        <Teachers/>
        <FacultyNews/>
        <Achievement/>

    </div>
  )
}

export default Faculties