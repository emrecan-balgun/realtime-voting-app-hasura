import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useSubscription, useMutation } from '@apollo/client'
import { QUESTION_DETAIL_SUBSCRIPTION, NEW_VOTE_MUTATION } from './queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail() {
    const { id } = useParams();
    const [selectedOptionId, setSelectedOptionId] = useState();

    const { loading, error, data } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
        variables: {
            id
        }
    });

    const [newVote, { loading: loadingVote }] = useMutation(NEW_VOTE_MUTATION);

    const handleClickVote = () => {
        newVote({
            variables: {
                input: {
                    option_id: selectedOptionId,
                },
            },
        });
    };

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
                            onChange={({ target }) => setSelectedOptionId(target.value)}
                        />
                        <span>{option.title}</span>
                    </label>
                ))
            }
            <button disabled={loadingVote} onClick={handleClickVote}>Vote</button>
      </div>
  )
}

export default Detail