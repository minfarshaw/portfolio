const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
          <a href="/project">Go Back</a>
            <h1>Add a Project</h1>
            <form action="/project/:id" method="POST">
                Name: <input type="text" name="name"/><br/>
                Description: <input type="text" name="description" /><br/>
                Image: <input type="text" name="image" /><br/>
                Link: <input type="text" name="link" /><br/>
                <input type="submit" name="" value="Submit Project"/>
             </form>
        </div>);
  }
}

module.exports = New;
