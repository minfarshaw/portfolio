const React = require('react');
const Layout = require('../Layouts/Layout.jsx')

class ContactUs extends React.Component {
  render(){
    return (
      <Layout
      stylesheet="/css/show.css"
      >
        <div class="header-container">
      <h1>
        Contact Me
      </h1>
      <p>Fill out the form below and I'll get back to you. Thanks for vibing and keeping it tight.</p>
      </div>
      <br />
      <div class="contact-form">
      <form>
                Name: <input type="text" class="inputs" name="name"/><br/>
                Email: <input type="text" class="inputs" name="email" /><br/>
                Message: <input type="text" class="inputs" name="message" /><br/>
                <input type="submit" name="" id="submit-button" value="Submit"/>
             </form>
             </div>
      </Layout>
    )
  }
}

module.exports = ContactUs;