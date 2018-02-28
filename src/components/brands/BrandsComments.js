import React from 'react';

function BrandsComments({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea" ng-model="vm.newComment.text" placeholder="What do you think of the brand?" onChange={handleChange}
              >
              </textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button button--full">Post</button>
            </p>
          </div>
        </div>
      </article>
    </form>
  );
}

export default BrandsComments;
