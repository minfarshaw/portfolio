const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Show extends React.Component {
    render(){
        const project = this.props.project;
        return (
            <Layout
             stylesheet="/css/show.css"
            >
                <div class="header-container">Project: {`${project.name.toUpperCase()}`}</div>
                <div id="projectDetails">
                <a href={project.link} target="_blank"><img src={ project.image }/></a>
                
                <br />
                <p>{project.name} is {project.description}</p>
                <a href={project.link} target="_blank">Learn more by clicking here!</a>
                <br />
                <a href={`/project/${project._id}/edit`}>Edit This Project</a>
                </div>
            </Layout>
        )
    }
}
module.exports = Show;