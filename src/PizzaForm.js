import React from 'react'

export default function PizzaForm(props) {
    
    const { values, errors, disabled, inputChange, checkBoxChange, submit } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onCheckBoxChange = evt => {
        const { name, checked } = evt.target;
        checkBoxChange(name, checked);
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <div className='form-group inputs'>
                {/* ///// DROPDOWN ///// */}
                <h4>Choice of Size</h4>
                <label>
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>-Select-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                {/* ///// RADIO BUTTONS ///// */}
                <h4>Choice of Sauce</h4>
                <label>Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='original red'
                        checked={values.sauce === 'original red'}
                        onChange={onInputChange} 
                    />

                </label>
                <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlic ranch'
                        checked={values.sauce === 'garlic ranch'}
                        onChange={onInputChange} 
                    />
                </label>

                { /* ///// CHECKBOXES ///// */}
                    <div className='form-group checkboxes'>
                    <h4>Add Toppings</h4>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.toppings.pepperoni}
                            onChange={onCheckBoxChange}
                        />
                    </label>
                    <label>Mushroom
                        <input 
                            type='checkbox'
                            name='mushroom'
                            checked={values.toppings.mushroom}
                            onChange={onCheckBoxChange}
                        />
                    </label>
                    <label>Olives
                        <input 
                            type='checkbox'
                            name='olives'
                            checked={values.toppings.olives}
                            onChange={onCheckBoxChange}
                        />
                    </label>
                    <label>Onions
                        <input 
                            type='checkbox'
                            name='onions'
                            checked={values.toppings.onions}
                            onChange={onCheckBoxChange}
                        />
                    </label>
                    { /*}
                    <h4>Choice of Subsitute</h4>
                    <label>Gluten-free crust 
                        <input 
                            type='checkbox'
                            name='onions'
                            checked={values.toppings.onions}
                            onChange={onCheckBoxChange}
                        />
                    </label> */}
                </div>
              
                {/* ///// TEXT INPUTS */}
                <label>Special Instructions
                    <input 
                        value={values.specialInstructions}
                        onChange={onInputChange}
                        name='specialInstructions'
                        type='text'
                    />
                </label>

                <label>Name for the Order
                    <input 
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

            </div>

            

            <div className='form-group submit'>
                <button disabled={disabled}>Add to Order</button>

                <div className= 'errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.name}</div>
                </div>
                
            </div>
        </form>
    )
}