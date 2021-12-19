import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
      <div>
        <br/>
        <br/>
          <center>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName"><b>First Name</b></label>{' '}
        <Field name="firstName" component="input" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="lastName"><b>Last Name</b></label>{' '}
        <Field name="lastName" component="input" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="email"><b>Email</b></label>{' '}
        <Field name="email" component="input" type="email" />
      </div>
      <br/>
      <div>
        <label htmlFor="points"><b>Points</b></label>{' '}
        <Field name="points"  component="input" value='1' type="radio" />1
        <Field name="points"  component="input" value='2' type="radio" />2
        <Field name="points"  component="input" value='3' type="radio" />3
        <Field name="points"  component="input" value='4' type="radio" />4
        <Field name="points"  component="input" value='5' type="radio" />5
      </div>
      <br/>
      <div>
        <label htmlFor="textarea"><b>Comments</b></label>{' '}
        <Field name="textarea" component="input" type="textarea" />
      </div>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </center>
    </div>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm