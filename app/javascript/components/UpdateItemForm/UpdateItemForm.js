import React from 'react';
import { Mutation } from 'react-apollo';
import { UpdateItemMutation } from './operations.graphql';

import ProcessItemForm from '../ProcessItemForm/ProcessItemForm';

import cs from './styles';

const UpdateItemForm = ({
  id,
  initialTitle,
  initialDescription,
  initialImageUrl,
  onClose
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <Mutation mutation={UpdateItemMutation}>
        {(updateItem, { loading }) => (
          <ProcessItemForm
            initialImageUrl={initialImageUrl}
            initialTitle={initialTitle}
            initialDescription={initialDescription}
            buttonText='Update Item'
            loading={loading}
            onProcessItem={({ title, description, imageUrl }) => {
              updateItem({
                variables: {
                  id,
                  title,
                  description,
                  imageUrl
                },
                // add optimistic update to update items before server response
                optimisticResponse: {
                  __typename: 'Mutation',
                  updateItem: {
                    __typename: 'UpdateItemMutationPayload',
                    item: {
                      id,
                      __typename: 'Item',
                      title,
                      description,
                      imageUrl
                    }
                  }
                }
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button className={cs.close} onClick={onClose}>
        Close
      </button>
    </div>
  </div>
)

export default UpdateItemForm;
