const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Edit extends React.Component {
  render() {
  const project = this.props.project
    return (
      <Layout>
        <h1>{ project.name } Edit page</h1>
         <form action={`/project/${this.props.project._id}?_method=PUT`} method="POST">
        
        Name:           <input type="text" name="name" value={project.name}/><br/>
        Description:    <input type="text" name="description" value={project.description}/><br/>
        Image:          <input type="text" name="image" value={project.image}/><br/>
        Link:           <input type="text" name="link" value={project.link}/><br/>
        <br/>
        <input type="submit" name="" value="Submit Changes"/>
        </form>
      </Layout>
    )
  }
}
module.exports = Edit;