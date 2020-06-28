import PropTypes from 'prop-types';
import { withBreakpoints } from 'react-breakpoints';

const Hidden = ({ children, sm, md, lg, xl, currentBreakpoint }) => {
  if (currentBreakpoint === 'undefined')
    console.error('Please wrap the application with the breakpoints provider');

  let visible = true;

  switch (currentBreakpoint) {
    case 'sm':
      visible = !sm;
      break;
    case 'md':
      visible = !md;
      break;
    case 'lg':
      visible = !lg;
      break;
    case 'xl':
      visible = !xl;
      break;
    default:
      visible = true;
  }

  if (!visible) {
    return null;
  }
  return children;
};

Hidden.propTypes = {
  /**
    Element(s) display in the title
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
    Hidden at & below `sm` breakpoints
  */
  sm: PropTypes.bool,
  /**
    Hidden at & below `md` breakpoints
  */
  md: PropTypes.bool,
  /**
    Hidden at & below `lg` breakpoints
  */
  lg: PropTypes.bool,
  /**
    Hidden at & below `xl` breakpoints
  */
  xl: PropTypes.bool,
  /**
    @ignore
    Visible at & above `xl` breakpoints
  */
  currentBreakpoint: PropTypes.string,
};

Hidden.defaultProps = {
  sm: false,
  md: false,
  lg: false,
  xl: false,
  currentBreakpoint: 'undefined',
};

export default withBreakpoints(Hidden);
