import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import S from './BlogPostContentItem.styles';
import animations from './BlogPostContentItem.animations';

const BlogPostContentItem = ({ content }) => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      variants={animations.contentItemVariants}
      animate={animation}
      initial="initial"
    >
      {content}
    </S.Wrapper>
  );
};

BlogPostContentItem.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default BlogPostContentItem;
