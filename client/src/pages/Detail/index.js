import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useSubscription } from '@apollo/client'
import { QUESTION_DETAIL_SUBSCRIPTION } from './queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail() {
    const { id } = useParams();
    const [selected, setSelected] = useState();

    const { loading, error, data } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
        variables: {
            id
        }
    });

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error message={error.message}/>
    }

    const { questions_by_pk: { options, title }} = data;

  return (
      <div>
            <h2>{title}</h2>
            {
                options.map((option, i) => (
                    <label htmlFor={i} key={i}>
                        <input 
                            type="radio" 
                            name="selected" 
                            value={option.id} 
                            onChange={({ target }) => setSelected(target.value)}
                        />
                        <span>{option.title}</span>
                    </label>
                ))
            }
      </div>
  )
}

export default Detail