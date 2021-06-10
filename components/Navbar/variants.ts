export const navbarVariants = {
  hold: {
    boxShadow: ' 0 0 0px rgba(0,0,0,0)',
  },

  float: {
    boxShadow: ' 0 0 10px rgba(0,0,0,0.5)',
  },
}

export const logoLineVariants = {
  open: {
    transform: 'scaleX(1)',
  },
  closed: {
    transform: 'scaleX(0)',
    transition: {
      restDelta: 6,
    },
  },
}
