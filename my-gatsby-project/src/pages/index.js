import React from "react"
import {Link} from "gatsby"
import ReactCompareImage from 'react-compare-image';

import Scrollchor from 'react-scrollchor'

import Layout from "../components/layout"
import Image from "../components/image"
import heroPic from "../images/hero-pic.jpg"

import mainPic from '../images/mainpic.png'
import dark from '../images/dark.png'
import fullLight from '../images/full-light.png'
import darkContrast from '../images/dark-contrast.png'
import corporate from '../images/corporate.png'
import trendy from '../images/trendy.png'

const layouts = [
  {
    src: mainPic,
    name: 'Classic Light',
    href: 'https://youpez.flatedgethemes.com'
  },
  {
    src: dark,
    name: 'Classic Dark',
    href: 'https://youpez.flatedgethemes.com/app/dashboard/default?theme=dark'
  },
  {
    src: fullLight,
    name: 'Simple white',
    href: 'https://youpez.flatedgethemes.com/app/dashboard/default?theme=light&sidebar=white&header=white'
  },
  {
    src: darkContrast,
    name: 'Dark contrast',
    href: 'https://youpez.flatedgethemes.com/app/dashboard/default?theme=dark&sidebar=white&header=white'
  },
  {
    src: corporate,
    name: 'Corporate',
    href: 'https://youpez.flatedgethemes.com/app/dashboard/default?theme=light&sidebar=white&header=dark-blue'
  },
  {
    src: trendy,
    name: 'Trendy',
    href: 'https://youpez.flatedgethemes.com/app/dashboard/default?theme=light&sidebar=gradient&header=dark-blue'
  }
]

const pages = [
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Analytics app',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Stocks/Crypto app',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'SCRUM board',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Tasks',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'File manager',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Mail',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Messages',
    href: '',
    hrefAlt: ''
  },
  {
    pic: heroPic,
    picAlt: heroPic,
    name: 'Book a demo',
    href: '',
    hrefAlt: ''
  }
]

const renderDemoPages = (pages) => {

  return pages.map((page, index) => {

    return <div className={'tile-component'} key={index}>
      <div className={'text-1 mb-3'}>{page.name}</div>
      <div className={'mb-3'}>
        {/*<img src={page.pic} className={'img-fluid'}/>*/}
        <ReactCompareImage
          sliderLineColor="blue"
          sliderLineWidth={4}
          leftImage={page.pic} rightImage={page.pic}/>
      </div>
      <div className={'text-center'}>
        <a href={page.href} target={'_blank'} className={'bx--btn btn-basic bt-alt mr-2'}>Light</a>
        <a href={page.hrefAlt} target={'_blank'} className={'bx--btn btn-basic bt-alt'}>Dark</a>
      </div>
    </div>
  })

}

const renderLayouts = (layouts) => {

  return layouts.map((layout, index) => {

    return <div className={'tile-component'} key={index}>
      <div className={'text-1 mb-3'}>{layout.name}</div>
      <a href={layout.href} target={'_blank'}>
        <img src={layout.src} className={'img-fluid img-border'}/>
      </a>
      <div className={'mt-3'}>
        <div className={'text-center'}>
          <a href={layout.href} target={'_blank'} className={'bx--btn btn-basic bt-alt mr-2'}>Open</a>
        </div>
      </div>
    </div>
  })
}

const IndexPage = () => (
  <Layout>
    <div>
      <div id="main-hero">
        <div id="main-header">
          <div className={'bg-tile'}></div>
          <div className={'container h-100'}>
            <div className={'row h-100'} style={{position: 'relative', zIndex: 2}}>
              <div className={'col-xl-6 h-100 relative'}>
                <div className="app-row app-row-all-center h-100 app-hero-main-text app-hero-main-text">
                  <div style={{padding: '30px 0'}}>
                    <div className="main-header-text-wrapper">
                      <h1 className="big-text">
                        Youpez admin <br/>UI platform
                      </h1>
                      <h2 className="main-header-big-text-sub">
                        Create dashboards in 5 minutes
                      </h2>
                      <p className={'text-muted2'} style={{marginTop: 20, fontWeight: 500, maxWidth: 470}}>
                        Admin project for all sizes - The <span className="font-weight-bold">simplest</span> and <span
                        className="font-weight-bold">fastest</span> way to <span
                        className="font-weight-bold">build</span> your next or current web UI dashboard or app
                      </p>
                      <div style={{marginTop: 40}}>
                        <a href={'https://youpez.flatedgethemes.com'} target={'_blank'}
                           className={'bx--btn btn-hero bt-def'} style={{marginRight: 15}}>Live Demo</a>
                        <a className={'bx--btn btn-hero bt-alt'}>Purchase Now</a>
                      </div>
                      <div className={'text-center mt-3 text-muted2'}>
                        <Scrollchor to="#layoutDemos" animate={{offset: -80, duration: 400}}>
                          <span className={'text-white'} style={{fontWeight:700,fontSize:14,marginLeft:-10}}>or explore more demos</span>
                        </Scrollchor>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'col-xl-6 h-100'}>
                <div className="app-row app-row-all-center h-100">
                  <img className={'hero-img'} src={mainPic}/>
                  {/*<VideoItem vidSrc={MainVideo} domId={'main-video'} preloadSrc={videoPreload}/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={'layoutDemos'} className={'container'}>
        <div className={'row'} style={{marginTop: 80, marginBottom: 80}}>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-2'}>Explore Youpez layouts and customization</div>
          </div>
          <div className={'col-xl-6'}>
            <div className={'paragraph'} style={{paddingTop: 7}}>Youpez <span className={'font-weight-bold'}>professionally-designed UI Framework</span> come
              with hundreds of customizable features. Every Layout is just
              a starting point — you can easily create your own with our layouts.
            </div>
          </div>
        </div>

        <div className={'tile-holder'}>
          {renderLayouts(layouts)}
        </div>

        <div className={'text-center mt-4'}>
          <div className={'paragraph'}>
            And much more option available in the demo...
          </div>
        </div>
      </div>
      {/*
        <div className={'row'} style={{marginTop: 80, marginBottom: 80}}>
          <div className={'col-xl-4'}>
            <div className={'text-2'}>Explore Youpez prepared dashboards</div>
          </div>
          <div className={'col-xl-6'}>
            <div className={'paragraph'} style={{paddingTop: 7}}>Youpez <span className={'font-weight-bold'}>professionally-designed UI Framework</span> come
              with hundreds of customizable features. Every Layout is just
              a starting point — you can easily create your own with our layouts.
            </div>
          </div>
        </div>
        <div className={'tile-holder'}>
          {renderDemoPages(pages)}
        </div>
        */}

      <div className={'section-contrast'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xl-4'}>
              <div className={'text-2 mb-4'}>Not just an average boring template</div>
            </div>
            <div className={'col-xl-6'}>
              <div className={'paragraph text-muted2'} style={{paddingTop: 7}}>
                Youpez is a highly customizable, flexible NextGen UI Angular admin template with custom made real life application UI/UX/Layouts.
              </div>
              <div className={'paragraph text-muted2'} style={{paddingTop: 12}}>
                Motivation behind Youpez creating a futuristic and well usable Admin application template which is different from other average templates.
              </div>
              <div style={{marginTop:40}}>
                <a href={'https://youpez.flatedgethemes.com'} target={'_blank'}
                   className={'bx--btn btn-basic2 bt-def'} style={{marginRight: 15}}>Live Demo</a>
                <a className={'bx--btn btn-basic2 bt-alt'}>Purchase Now</a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'row text-center'} style={{marginTop: 80, marginBottom: 80}}>
          <div className={'col-xl-12'}>
            <div className={'text-2 mb-2'} style={{fontWeight: 700}}>Core features</div>
          </div>
          <div className={'col-xl-12'}>
            <div className={'paragraph'} style={{paddingTop: 7, maxWidth: 500, display: 'inline-block'}}>

              In Youpez we collected the best UI solutions/libraries for your next awesome admin project. It contains
              the current and future best practices from the frontend world.
            </div>
          </div>
        </div>

        <div className={'row core-features'}>
          <div className={'col-xl-4 '}>
            <div className={'text-3 mb-2'}>Angular framework</div>
            <div className={'paragraph'}>
              The best enterprise framework & ecosystem without hassle
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Carbon & TailwindCSS</div>
            <div className={'paragraph'}>
              Carbon design system components and carbon inspired custom layout. TailwindCSS for custom components and
              ideas.
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Angular Flex</div>
            <div className={'paragraph'}>
              The best grid and layout system. You can handle responsive behaviour in your code and not in your
              separated css styles.
            </div>
          </div>

          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Unique & usable layouts</div>
            <div className={'paragraph'}>
              Ready to use real life application template and content layouts for building enterprise quality apps and
              pages
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Resizable sidebars & panels</div>
            <div className={'paragraph'}>
              Every sidebar and panel/section are resizable with reusable custom components for better User Experience
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Built-in apps</div>
            <div className={'paragraph'}>
              We created real life inspired ready-to-use applications for development time saving
            </div>
          </div>

          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Dark & Light Modes</div>
            <div className={'paragraph'}>
              All included apps, pages and components come with Light and Dark. + Multiple predefined color-schemes
              for
              the main sidebar and header
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Starters</div>
            <div className={'paragraph'}>
              Useful starters for your next project like json based generated menu list and basic & complex layout
              examples
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>No Dependencies</div>
            <div className={'paragraph'}>
              There are no out-of-the box solutions and Youpez can work with every backend technology
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Learning Source</div>
            <div className={'paragraph'}>
              Learn best practices and angular techniques and application compose tips
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Suggestions & Feedback</div>
            <div className={'paragraph'}>
              We care about our users opinions and ideas. We are working based on your suggestions
            </div>
          </div>
          <div className={'col-xl-4'}>
            <div className={'text-3 mb-2'}>Free Updates & Support</div>
            <div className={'paragraph'}>
              Free lifetime updates including new features and bug fixes. Premium user-oriented support
            </div>
          </div>
        </div>

      </div>

    </div>
  </Layout>
)

export default IndexPage
