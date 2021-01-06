import React from "react"
import {Link} from "gatsby"
import ReactCompareImage from 'react-compare-image';

import Layout from "../components/layout"
import Image from "../components/image"
import heroPic from "../images/hero-pic.jpg"

const layouts = {
  light: {
    src: heroPic,
    href: ''
  },
  dark: {
    src: heroPic,
    href: ''
  },
  lightCt: {
    src: heroPic,
    href: ''
  },
  darkCt: {
    src: heroPic,
    href: ''
  }
}

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

const IndexPage = () => (
  <Layout>
    <div>
      <div id="main-hero">
        <div id="main-header">
          <div className={'bg-tile'}></div>
          {/*        <div className="wave-bg">
          <div className="anim-circle anim-xxxlarge anim-shade05"></div>
          <div className="anim-circle anim-xxlarge anim-shade1"></div>
          <div className="anim-circle anim-xlarge anim-shade2"></div>
          <div className="anim-circle anim-large anim-shade3"></div>
          <div className="anim-circle anim-medium anim-shade4"></div>
          <div className="anim-circle anim-small anim-shade5"></div>
        </div>*/}
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
                        <button className={'bx--btn btn-hero bt-def'} style={{marginRight: 15}}>Live Demo</button>
                        <button className={'bx--btn btn-hero bt-alt'}>Purchase Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'col-xl-6 h-100'}>
                <div className="app-row app-row-all-center h-100">
                  <img className={'hero-img'} src={heroPic}/>
                  {/*<VideoItem vidSrc={MainVideo} domId={'main-video'} preloadSrc={videoPreload}/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'container'}>

        <div className={'row'} style={{marginTop: 80, marginBottom: 80}}>
          <div className={'col-xl-4'}>
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
          <div className={'tile-component'}>
            <div className={'text-1 mb-3'}>Light theme</div>
            <a href={layouts.light.href} target={'_blank'}>
              <img src={layouts.light.src} className={'img-fluid'}/>
            </a>

          </div>
          <div className={'tile-component'}>
            <div className={'text-1 mb-3'}>Dark theme</div>
            <a href={layouts.dark.href} target={'_blank'}>
              <img src={layouts.dark.src} className={'img-fluid'}/>
            </a>

          </div>
        </div>
        <div className={'tile-holder'}>
          <div className={'tile-component'}>
            <div className={'text-1 mb-3'}>Light contrast</div>
            <a href={layouts.lightCt.href} target={'_blank'}>
              <img src={layouts.lightCt.src} className={'img-fluid'}/>
            </a>

          </div>
          <div className={'tile-component'}>
            <div className={'text-1 mb-3'}>Dark contrast</div>
            <a href={layouts.darkCt.href} target={'_blank'}>
              <img src={layouts.darkCt.src} className={'img-fluid'}/>
            </a>

          </div>
        </div>

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

        <div className={'row mt-4 mb-4'}>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>

          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>

          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
          <div className={'col-xl-4 mb-4'}>
            <div className={'text-3 mb-2'}>Angular</div>
            <div className={'paragraph'}>
              Built with Angular and Angular Material components.
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default IndexPage
