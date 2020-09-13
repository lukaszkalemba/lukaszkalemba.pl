const backdrop = {
  variants: {
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    initial: { opacity: 0 },
  },
  initial: 'initial',
  animate: 'animate',
  exit: 'initial',
};

export default { backdrop };
