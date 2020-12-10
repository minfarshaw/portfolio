const React = require('react');
const Layout = require('./Layouts/Layout.jsx')

class Index extends React.Component{
    render() {
        return (
            <Layout
            stylesheet="/css/index.css"
            >
                <div class="header-container">
                    <h1>My Latest Projects</h1>
                    <h2>These are some of the web projects I have made using HTML, CSS, Javascript and PHP.</h2>
                    <p>Click on the images below to learn more about each project and get a link to see it in action!</p>
                </div>
                <ul>
                    {
                        this.props.project.map((project, i) => {
                            return (
                                <div class="project-container">
                                <li>{project.name}</li>
                                <a href={`/project/${project._id}`} target="_blank"><img src={ project.image }/></a>
                                <br />
                                <a href={`/project/${project._id}/edit`}>Edit {this.props.project.name}</a>
                                <form method="POST" action={`/project/${project._id}?_method=DELETE`}>
                                        <input type="submit" value={"DELETE"}/>
                                    </form>
                                </div>
                            )
                        })
                    }
                   
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;