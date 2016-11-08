import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {

  render(){
    return(

      <div id="footer">
        <img className="ui centered rounded small image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>

        <div className="ui grid stackable top">
          <div className="eleven wide column">
            <div className="ui equal width grid stackable">
              <div className="column">
              <a href="mailto:info@atlascv.com"><span>Contact Us</span></a>
              </div>

              <div className="column">
              <Link to="/terms_and_conditions#main_content"><span>Terms and Conditions</span></Link>
              </div>

              <div className="column">
              <Link to="/#"><span>Privacy</span></Link>
              </div>
            </div>
          </div>

          <div className="four wide column">
            <div className="column"></div>

              <div id="mc_embed_signup" className="column">
                <form action="//atlascv.us14.list-manage.com/subscribe/post?u=4c0f3944ba25c0897e737248b&amp;id=70cb25bb58" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                  <div id="mc_embed_signup_scroll" className="ui equal width grid stackable">
                    <label id="newsletter_label" htmlFor="mce-EMAIL" >Subscribe to our mailing list</label>
                    <input type="text" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                    <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="ui button medium" />
                    </div>
                  </div>
                </form>
              </div>

            <div className="column"></div>


          </div>

          <div className="column"></div>
        </div>

        <div className="ui equal width grid stackable social_medias">
          <div className="column"></div>
          <div className="column">
            <a href="https://twitter.com/atlas_cv?lang=en"><i className="icon twitter huge black" target="_blank"></i></a>
            <a href="https://www.linkedin.com/company/atlascv?trk=biz-companies-cym" target="_blank"><i className="icon linkedin square huge black"></i></a>
          </div>
          <div className="column"></div>
        </div>

        <div id="copyrights">
          <br/>
          <p>&copy; 2016 AtlasCV.  All rights reserved</p>
        </div>

      </div>

    )
  }

}
