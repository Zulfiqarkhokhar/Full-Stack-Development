import { useParams } from "react-router-dom"

const Student = () => {

    const {id} = useParams();

  return (
    <div>Student Id {id}</div>
  )
}

export default Student