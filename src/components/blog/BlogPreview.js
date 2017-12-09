import React from 'react';
import PropTypes from 'prop-types';

const BlogPreview = (props) => { // eslint-disable-line no-unused-vars
  return (
    <div>
      <h2><span>{props.title}</span></h2>
      <p>
        {props.content}
      </p>
    </div>
  );
}
BlogPreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default BlogPreview;
