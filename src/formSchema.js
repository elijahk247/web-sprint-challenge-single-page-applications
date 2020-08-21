import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 3 characters long')
    .required('Name is Required'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'You must select a size')
    .required('You must select a size'),
  sauce: yup
    .string()
    .oneOf(['original red', 'garlic ranch'], 'You must select a sauce')
    .required('You must select a sauce'),
  specialInstructions: yup
    .string()
})

export default formSchema
