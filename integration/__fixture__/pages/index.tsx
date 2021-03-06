import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const QUERY = gql`
  {
    hire {
      id
      name
    }
  }
`;

const Index = () => (
  <Query query={QUERY}>
    {({ loading, data }: any) => {
      if (loading || !data) {
        return <p>loading</p>;
      }

      return <p>{data.hire.name}</p>;
    }}
  </Query>
);

export default Index;
