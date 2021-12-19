import React from 'react'
import ContactForm from '../component/Formcomponent'

class ContactPage extends React.Component {
  submit = values => {
    console.log(values.email)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}
export default ContactPage;