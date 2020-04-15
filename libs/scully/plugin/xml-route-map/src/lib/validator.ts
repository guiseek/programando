import {yellow} from '@scullyio/scully/utils/log';

// Omitted code ...

export const validator = async options => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `my-custom-plugin numberOfPages should be a number, not a ${yellow(typeof options.numberOfPages)}`
    );
  }

  return errors;
};