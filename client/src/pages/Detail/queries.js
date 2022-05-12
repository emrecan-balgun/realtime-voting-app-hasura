import { gql } from '@apollo/client';

export const QUESTION_DETAIL_SUBSCRIPTION = gql`
    subscription questionDetail($id: Int!) {
    questions_by_pk(id: $id) {
        id
        title
        options {
        id
        title
        votes_aggregate {
            aggregate {
            count
            }
        }
        }
    }
    }
`;