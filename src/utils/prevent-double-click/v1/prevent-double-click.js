import debounce from 'lodash.debounce';

const DEBOUNCE_MS = 600;

/**
 * @summary Wraps a function to prevent accidental double-clicks from executing it too often.
 * @param {Function} func - The onClick function to return, debounced
 * @returns {undefined}
 */
const preventDoubleClick = (func) =>
  debounce(func, DEBOUNCE_MS, {
    leading: true,
    trailing: false,
  });

export default preventDoubleClick;
