const React = require('react');
 
class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                 <h1>{this.props.title}</h1>
                 <nav>
                     <ul>
                         <li><a href="/projects">Go To Index Page</a></li>
                         <li><a href="/projects/new">Create A New Project</a></li>
                     </ul>
                 </nav>
                 {this.props.children}
                 {/* <script src={this.props.js}></script> */}
                </body>
            </html>
        )
    }
}
module.exports = Layout;