const React = require('react');
const Layout = require('../Layouts/Layout.jsx')

class Home extends React.Component {
  render(){
    return (   
      <Layout
            stylesheet="/css/main.css">
              <div class="header-container">
                <div id="header-image">
                  <img src="./assets/images/header7.jpg" alt=""/>
                  
              </div>
            </div>
            <div id="greeting">
              <h1>greeting.hello</h1>
                <p>My name is Amanda Hayes and I’m a web developer with a passion for design, writing and media.
                  <br />
                  I design and develop websites for small and large businesses alike.
                  <br />
                  I’m currently a manager of digital communications for a local news organization 
                  <br />
                  and I am excited to use my knowledge and skills on a larger scale.
                </p>
              </div>
                <div class="section-header">
                  <h2>Featured Projects</h2>
                  <p>Click on one of the images below to learn more about the project and see it in action!</p>
                  </div>

                <section class="masonry">

                    <figure class="cell cell--1">
                     <a href="./project/5fd0fde65c65540e604cffa2" target="_blank"> <img
                      src="./assets/images/landscaper.jpg"></img>
                      </a>

                    </figure>
                    <figure class="cell cell--2">
                    <a href="./project/5fd0fde65c65540e604cffa1" target="_blank"><img
                        src="./assets/images/lotr.jpg"></img>
                    </a>

                    </figure>
                    <figure class="cell cell--3">
                    <a href="./project/5fd0fde65c65540e604cff9e" target="_blank"> <img
                        src="./assets/images/david-pumpkins.png"></img>
                    </a>

                    </figure>
                    <figure class="cell cell--4">
                     <a href="./project/5fd0fde65c65540e604cffa3" target="_blank"><img
                        src="./assets/images/cordova.png"></img>
                    </a>
                    </figure>

                    <figure class="cell cell--5">
                    <a href="./project/5fd137c98fff341f260c88f9" target="_blank"><img
                        src="./assets/images/90s-store.jpg"></img>
                    </a>
                    </figure>

                    <figure class="cell cell--6">
                    <a href="./project/5fd13929f476751fd59c94f5" target="_blank">
                      <img
                        src="./assets/images/mandalorian.jpg"></img>
                     </a>
                    </figure>

                    <figure class="cell cell--7">   
                    <a href="./project/5fd0fde65c65540e604cffa0" target="_blank">
                      <img
                        src="./assets/images/pokedex.png"></img>
                        </a>
                    </figure>

                    <figure class="cell cell--8">
                      <a href="./project/5fd0fde65c65540e604cff9c" target="_blank"><img
                        src="./assets/images/tic-tac-toe.png"></img>
                      </a>
                    </figure>
              </section>
           
    </Layout>
      
    )
  }
}

module.exports = Home;