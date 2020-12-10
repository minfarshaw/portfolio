const React = require('react');
const Layout = require('../Layouts/Layout.jsx')

class About extends React.Component {
  render(){
    return (
      <Layout
      stylesheet="/css/show.css"
      >
        <div class="header-container">
      <h1>
        About Me
      </h1>
      </div>
      <div class="about-content">
      <p>I am a web developer and marketing wizard with over a decade of experience in marketing, business administration, content curation, web design, and writing, and I am always hungry for more knowledge to propel me further both personally and professionally. I am also always hungry in general. I am a lightning fast learner and a natural leader. I’m typically the first to take charge in a group and I love to strategize with others and share knowledge, as long as we always end up choosing my ideas because they are objectively the best.
      <br />
      <br />
      I am currently a web developer and digital communications specialist for a local news website, making hand over fist in profits. Some of my best projects include redesigning and implementing a new digital ad sales initiative, creating a large-scale marketing campaign to celebrate their 50th anniversary, and keeping our community invested in quality local journalism with integrity. Don't laugh.
      <br />
      <br />
      Also I'm resourceful. Do you have a new piece of software or technology I need to use? Give me a couple hours in front of my computer and I'll learn it and get to work. You could call me a jack of all trades, but I am also a master of many, so please don't. I don't like that.
      <br />
      <br />
      In 2009, my husband and I opened our own business, offering technology solutions including web development and maintenance, computer repair and networking. I helped build our small business from the ground up; turning it into a competitive force in the local market. I handled every aspect of marketing, including print and online ad campaigns, brick and mortar signage and materials, social media and customer relations, as well as all bookkeeping and administrative work. I helped design and develop the website and have experience in HTML, CSS, and various content management systems, including WordPress.
      <br />
      <br />
      Managing my own business and having complete creative control is the best feeling. I feel in my element when I have flexibility and freedom in my job and have the trust of those around me. You can trust me. With anything. I am insufferably trust-worthy; ask anyone!
      <br />
      <br />
      Interested? Hit me up by US mail, walkie-talkie, carrier pigeon, 18th century messenger boy, the bat signal, morse code, telegraph, or email, I guess.</p>
      </div>
      </Layout>
    )
  }
}

module.exports = About;