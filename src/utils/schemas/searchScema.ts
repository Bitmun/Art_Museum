import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  query: yup.string().min(3, 'Search query must be at least 3 characters'),
});
