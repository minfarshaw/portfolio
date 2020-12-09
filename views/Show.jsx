const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Show extends React.Component {
    render(){
        return (
            <Layout
             title={`${this.props.project.name.toUpperCase()} Show Page`}
             stylesheet="/css/main.css"
            >
                <div id="projectDetails">
                <img src={ project.image }/>
                <br />
                <p>{this.props.project.name} was a very clever project by yours truly.</p>
                <a href={'/project'}>Go Back Home</a><br/>
                <a href={'/project/new'}>Create a New Project</a><br/>
                </div>
            </Layout>
        )
    }
}
module.exports = Show;