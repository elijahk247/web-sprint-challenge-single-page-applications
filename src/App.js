// imports for forms
import React, { useEffect, useState } from "react";
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema'

import { Link, Route, Switch } from 'react-router-dom'

// Pages
import PizzaForm from './PizzaForm'
import Home from './Home'

const initialFormValues = {
  ///// DROPDOWN /////
  size: '', 
  ///// RADIO BUTTONS ///// 
  sauce: '', 
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    mushroom: false,
    olives: false,
    onions: false,
  },
  subsitute: false,
  ///// TEXT INPUTS /////
  specialInstructions: '',
  name: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
  name: '', 
}



const initialOrders = [];
const initialDisabled = true;

const App = () => {
  ///// STATES ///// 
  const [order, setOrder] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  ///// FORM ACTIONS /////
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })  
  }

  const checkBoxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newPizza = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings).filter(h => h),
      specialInstructions: formValues.specialInstructions.trim(),
      name: formValues.name.trim(),
    }
    postNewPizza(newPizza)
  }

  const getOrder = () => {
    console.log(order)
  }

  const postNewPizza = newPizza => {
    setOrder([...order, newPizza])
    setFormValues(initialFormValues)
  }

  ///// SIDE EFFECTS ///// 
  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='app'>
      <header>
        <Link to ='/'>Home</Link>
      </header>

      <Route exact path='/'>
        <Home />
      </Route>
      <Switch>
        <Route path='/Pizza'>
          <PizzaForm values={formValues} errors={formErrors} disabled={disabled} inputChange={inputChange} checkBoxChange={checkBoxChange} submit={submit} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
