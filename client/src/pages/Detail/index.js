import { useParams } from 'react-router-dom'

function Detail() {
    const { id }= useParams();

  return (
      <div>
            <h1>Detail</h1>
            <p>Question ID: {id}</p>
      </div>
  )
}

export default Detail