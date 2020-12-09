const React = require('react');
const Layout = require('./Layouts/Layout.jsx')

class Index extends React.Component{
    render() {
        return (
            <Layout title="Portfolio Index Page"
            stylesheet="/css/index.css"
            >
                <ul>
                    {
                        this.props.project.map((project, i) => {
                            return (
                                <a href={`/project/${project._id}`}><li>{project.name}</li></a>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;