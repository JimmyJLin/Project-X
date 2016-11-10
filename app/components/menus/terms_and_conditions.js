import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class TermsAndConditions extends Component {

  componentDidMount(){

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)
    }

    window.setInterval(changeLoaded, 500)

    function changeLoaded(){
      localStorage.setItem('isLoaded', 'no');
    }

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  render(){
    return(

      <div id="terms_and_conditions">
        <div className="top" id="top"></div>
        <div className="ui segment">
          <div className="main_content">
            <h1>Terms and Conditions</h1>
            <h2>Welcome to AtlasCV!</h2>
            <h2>Thank you for choosing us to find your dream job.</h2>
            <p>We are a curated matchmaking platform for Employers & Job Applicants</p>
            <p>Our mission is to efficiently match applicants with positions that are directly compatible with their experience & skillsets, in their desired industry & city of choice.</p>
            <p>AtlasCV is an applicant based matchmaking platform. Basic usage of the site is, and always will be, free for applicants. Additional services, such as premium level add-ons and features, may be subject to additional fees.</p>
            <p>AtlasCV will initially be launched as a free service platform to employers. Although, this is subject to change 6 months after the initial product launch, November 2016. Employers and Recruiting Agencies will be notified in this event.</p>
            <p>The following terms of use are a legally binding agreement between AtlasCV. By accessing or utilizing our service, registering an applicant or employer profile, or by viewing, uploading, downloading, or otherwise rendering any information from this site, you hereby agree that you:</p>
            <p>Have read, understand, and agree to these terms of use. Your recognize that you are legally bound by this agreement.</p>
            <p>Affirm that you are of legal age to utilize our service.</p>
            <p>Are entitled to enter into this agreement on behalf of yourself, or the company which you represent. By agreeing to these terms of use, you recognize that the company or entity being represented is also bound by these terms of use.</p>
            <p>In the event that you do not agree with the site terms of use, you are under no undue influence to proceed and should discontinue use of the site.</p>
            <p>By agreeing to our terms of use, and by subsequently using our service, you hereby agree to comply with our privacy policy.</p>
            <ol start="1">
              <li> Definitions
                <ol type="a">
                  <li> missing a
                    <ol type="i">
                    <li>The definitions set forth in the agreement constitute an integral, essential and substantial part of this Agreement.</li>
                    </ol>
                  </li>
                  <li> In this Agreement, unless the context require otherwise:
                    <ol type="i">
                    <li>references to “day” or “days” refers to calendar days, with the sole exception of Saturday and Sunday and any other day on which New York Stock Exchange (NYSE) is closed in the state of New York</li>
                    <li>“user” may refer to any individual or entity utilizing our website. This may be inclusive of applicants and/or employers.</li>
                  </ol>
                  </li>
                </ol>
              </li>
              <li>In addition to terms elsewhere defined in this Agreement and unless differently provided hereby, the following terms and expressions shall have the following meanings:
                <ol type="a">
                  <li>“Site” shall refer to www.AtlasCV.com and any of its derivative pages</li>
                  <li>“Service” shall collectively refer any services or site functionality provided by AtlasCV</li>
                  <li>“candidate”, “applicant” or “user” shall refer to any user of our Service (registered on the Site) for the purpose of being recruited by an “employer” through AtlasCV</li>
                  <li>“employer” “recruiter”  shall refer to any company / employer that is using our Service for the purpose of recruiting candidate(s)</li>
                  <li>“MatchMaker(s)” shall refer to any employee designated as such and responsible for the day-to-day management of the candidate status</li>
                  <li>“Content” shall refer to any piece of information (including but not limited to text, images, video or audio) uploaded, transmitted or submitted through our Site or Service</li>
                  <li>“Menu(s)” shall refer to the periodic list of candidates that we send to employers, in order to facilitate and expedite the Engagement between the candidate and the employer</li>
                  <li>“Engagement” shall refer to any interaction between the employer and the application, including email notification, profile view, or direct application</li>
                  <li>“Invitation” shall refer to the non-binding offer by an employer to a candidate to attend an interview</li>
                  <li>“Job Offer” shall refer to an offer of employment by the employer to the candidate consisting of the terms of engagement and scope of role, remuneration and conditions of employment</li>
                  <li>“Internship Offer” shall refer to an opportunity for a candidate to work as an intern, whether as a current college student or a fresh graduate (within 6 months from graduation date)</li>
                  <li>“Acceptance of Employment” shall refer to a notification signed by the employer and the candidate, stating that the candidate accepted a Job Offer, including details of engagement and scope of role, remuneration and conditions of employment</li>
                </ol>
              </li>
              <li>Site Registration</li>
              <li>By registering on the site, www.AtlasCV.com, you agree:
                <ol type="a">
                  <li>to provide true, accurate, current, and complete information about yourself and / or the company you represent as requested during the registration process (“Applicant Signup”). The applicant realizes that any legal disputes resulting from falsified information are the responsibility of the applicant, and hereby waives and legal liability on behalf of AtlasCV. The company, AtlasCV, will be exempt from legal liability in the event of falsified applicant information</li>
                  <li>to maintain / update Signup Information in order to keep such information true, accurate, current, and complete</li>
                  <li>that you shall not create an account using a false identity or information, or on behalf of any individual other than yourself</li>
                  <li>that you shall not create more than one account</li>
                  <li>that you are responsible for all activities that occur under your account whether or not authorized by you</li>
                  <li>to grant AtlasCV the right to suspend or terminate your account in case there is ground to suspect that uploaded information is untrue, inaccurate, not current, or incomplete</li>
                  <li>that you will not create an account or use the Site or Service if you have been previously removed by AtlasCV, or if you have been previously banned from the Site or Service</li>
                  <li>that you are solely responsible for confidentiality & security of your credentials (username and password)</li>
                  <li>that you shall not copy or reproduce any Content found on or through our Site and / or Service and that you are responsible for the confidentiality of all such information</li>
                </ol>
              </li>
              <li> AtlasCV holds the right:
                <ol type="a">
                  <li>to request further clarification or documentation regarding uploaded information, before approving any given user of the Service. In doing this, we reserve the right to use a third party service such as LinkedIn, Facebook or Twitter to validate your information and / or confirm your registration</li>
                  <li>to accept or decline any employer or candidate that does not have a complete profile or does not meet one or more of the requirements specified by us at any point in time</li>

                </ol>
              </li>
              <li>Site Functionality</li>
              <li>AtlasCV is an online recruitment matchmaking platform. We are an intermediary between applicants and employers, who are the sole parties involved in any contract of employment. AtlasCV is not bound by any contractual agreement arising between candidates and employers, whether or not AtlasCV receives some form of remuneration in connection with the transaction</li>
              <li>No contractual obligations are created for either the candidate or the employer through the use of the Service. The candidate has no obligation to accept any Interview Request or Job Offer. No step within the Engagement shall be considered legally binding</li>
              <li>Any information uploaded by candidates on the Site will be stored by AtlasCV in our database & systems</li>
              <li>Once registered on the Site, Applicants may be matched by employers at any given point, under which circumstance their profile information will be visible to any employer or recruiter utilizing the site</li>
              <li>During the Matchmaking phase, candidates’ information uploaded will be visible and accessible by employers in the form of a “menu” or “applicant list view”</li>
              <li>Candidates’ information will remain visible to employers once they click to match with positions</li>
              <li>When applicants are in the matchmaking phase, the parties can begin the Engagement. Employers can also ask for additional information on any of the profiles included in the current applicant portfolio.</li>
              <li>The Engagement between the parties may result in employers extending one or more Job Offers to candidates. In the event that a Job Offer is signed, the employer is subject to success fee payment as described in Section 6</li>
              <li> In agreeing to use our Service, both candidates and employers agree and undertake:
                <ol type="a">
                  <li>Only to contact any other site user in reference to a relevant employment position, and not to solicit any arrangement or sale other than the advertised position;</li>
                </ol>
              </li>
              <li>Candidates also agree to notify us as soon as a Job Offer is received, including details on beginning of employment, duration and compensation</li>
              <li>User responsibilities</li>
              <li>You must, at all times, abide by the terms and conditions of the current Privacy Policy, Terms of Use, and other policies of AtlasCV. This includes respecting all intellectual property rights that may belong to third parties, such as trademarks or copyrights. You must not upload or otherwise disseminate any information that may infringe on the rights of others or which may be deemed to be injurious, violent, offensive, racist, or xenophobic, or which may otherwise violate the purpose and spirit of AtlasCV and its community of Users. You agree also to act with decency towards any other User and not to spam, hack or phish us and / or any User.</li>
              <li>You will not aggregate, repurpose, republish or otherwise make use of any Content in any medium, including without limitation by any automated or non-automated “scraping”</li>
              <li>You must not make use of any services, automated or otherwise, including but not limited to bots, botnets, scripts, apps, plugins, extensions or other automated means to boost the level of activity of your profile beyond what a human could reasonably produce under the same constraints. This includes also attempting to interfere with and compromise system integrity and security</li>
              <li>1)	You will not upload invalid or illegal data, viruses, malware, worms or other software agents through the Service.</li>
              <li>You will not collect, disperse, or otherwise utilize any personally identifiable information, from the Service. You will also not use our Site to post false or fraudulent information about a company or individual</li>
              <li>You will not engage in any form of unauthorized commercial solicitation by using Content acquired by accessing our Service. Similarly, you will not engage in any commercial activity linked to giving access to third parties to your Service access.</li>
              <li>You agree not to violate any requirements, procedures, policies or regulations of any networks, organizations, entities or affiliates connected to AtlasCV</li>
              <li>You agree to not violate any law or regulation, and you solely are responsible for such violations. AtlasCV claims exemption in such scenarios</li>
              <li>You agree not to cause, or aid in, the destruction, manipulation, removal, disabling, or impairment of any portion of our Site, including the de-indexing or de-caching of any portion of our Site from a third party’s website, such as by requesting its removal from a search engine</li>
              <li>You will not upload any Content to our Site that includes any third party intellectual property unless you have permission from the owner to use it in the specific manner that you used it</li>
              <li>Our limitations on liability
                <ol type="a">
                  <li>We are not liable for any contractual obligation arising between the candidate and the employer who use our Site and Service</li>
                  <li>We are not liable for the Content that is posted on our Site. AtlasCV is not liable to third parties for any Content that has been posted or viewed on the Site or Service</li>
                  <li>We do not investigate into candidate’s profiles and backgrounds beyond the level of information that we are provided by the candidates. We retain the right to conduct screenings using public information, available either online or through public records, but we shall never be considered liable for inaccurate information, provided by either employers or applicants.</li>
                  <li>We are not required to screen any of the information that is uploaded or goes through our Site. We retain the right to remove, screen or edit any Content at any time and for any reason without any notice to you or any party affected</li>
                  <li>We shall not be liable, in any event, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, arising under or in connection with the Agreement for any indirect, incidental, special, exemplary, or consequential damages, including without limitation any loss of profits, sales, business, investment or revenue, loss or corruption of data, information or software, loss of business opportunity, loss of anticipated savings and loss of goodwill</li>
                  <li>We shall have no liability to you for any breach of these terms caused by any event or circumstance beyond our reasonable control including, but not limited to, strikes, lock-outs or other industrial disputes; breakdown of systems or network access; or flood, fire, explosion or accident</li>
                </ol>
              </li>
              <li>Intellectual Property Rights</li>
              <li>All copyright, trademarks, design rights, patents and other intellectual property rights therein (registered and unregistered) are owned by or licensed to AtlasCV, subject to copyright and other intellectual property rights under United States and foreign laws and international conventions. AtlasCV reserves all of its rights in and to the Service and Site. Nothing in the Agreement grants you a right or license to use any trademark, design right or copyright owned or controlled by AtlasCV</li>
              <li>U.S. Copyright Infringement. The Digital Millennium Copyright Act of 1998 (the “DMCA“) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials hosted by AtlasCV infringe your copyright, you (or your agent) may send us a notice requesting that the material be removed, or access to it blocked. The notice must include the following information as required by 17 USC. § 512(c)(3)(A): (a) a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (b) identification of the copyrighted work claimed to have been infringed (or if multiple copyrighted works located on the site are covered by a single notification, a representative list of such works); (c) identification of the material that is claimed to be infringing or the subject of infringing activity, and information reasonably sufficient to allow AtlasCV to locate the material on the site; (d) the name, address, telephone number, and email address (if available) of the complaining party; (e) a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (f) a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. If you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send AtlasCV a counter-notice. Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA; see http://www.loc.gov/copyright/ for details.</li>
              <li>Licensing
                <ol type="a">
                  <li>You hereby grant to AtlasCV a license to store, use and reuse all or any part of your Content (“Your Content”) and anything we may create with Your Content through AtlasCV or any other medium currently in existence or invented in the future. We reserve the right to display advertisements in connection with Your Content. While we try to make sure that the Site is secure, we cannot guarantee the security of any information that you supply to us and therefore we cannot guarantee that it will be kept confidential. We may, at our sole discretion, remove any information that you uploaded on or through the Service. By submitting any Content to us, you hereby represent that all content is factually accurate, and warrant that you own all rights to Your Content or, alternatively, that you have the right to give us the license described above. Finally, you represent and warrant that Your Content does not infringe on the intellectual property rights, privacy rights, publicity rights, or other legal rights of any third party. You understand that when using the Site and / or the Service you will be exposed to Content from a variety of sources, and that AtlasCV is not responsible for the accuracy, usefulness, safety, or intellectual property rights of or relating to such Content, and that such Content is not the responsibility of AtlasCV. You further understand and acknowledge that you may be exposed to Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against AtlasCV with respect thereto, and agree to indemnify and hold AtlasCV harmless to the fullest extent allowed by law regarding all matters related to your use of the Site.</li>
                </ol>
              </li>
              <li>Disclaimer of Warranties
                <ol type="a">
                  <li>The materials on AtlasCV’s website are provided "as is". AtlasCV makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, AtlasCV does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.</li>
                  <li>AtlasCV, its employees, and any 3rd party affiliates make no warranty, representation or condition that:
                    <ol type="i">
                      <li>the Site or Service is accurate, up-to-date and free of bugs at all times. Also, we cannot guarantee that the Site or Service will meet your requirements</li>
                      <li>your use of the Site or Service will be uninterrupted, timely, secure or error-free</li>
                      <li>the results that may be obtained from use of the Site or Service will be accurate or reliable</li>
                      <li>any errors in the Site or Service will be corrected</li>
                    </ol>
                  </li>
                  <li>a)	You agree that you are solely responsible for all of your communications and interactions with other users of the Site and Service</li>
                </ol>
              </li>
              <li> 1)	Indemnity
                <ol type="a">
                  <li>You undertake to fully indemnify and hold harmless, us from, against and in respect to any loss, damage, claim, obligation, liability, cost, expense (including, without limitation, attorneys’ and other professional’s fees, costs and expenses, court costs, settlements and disbursement) arising from:
                    <ol type="i">
                      <li>your use of and access to the Site and Service</li>
                      <li>your violation of any term of this Agreement</li>
                      <li>your violation of any law and regulation</li>
                      <li>your violation of any third party right, including without limitation any copyright, property, or privacy right; or</li>
                      <li>any claim that any of Your Content caused damage to a third party. This defense and indemnification obligation will survive this Agreement and your use of the Site and/or Service</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Communications Decency Act
                <ol type="a">
                  <li>We are aware that Content uploaded on our Site or Service is user generated and provided by third parties. Since third parties independently upload their Content to our Site and our Service, we are not liable for any defamatory Content posted on our Site if published by a third party. Although we may choose to edit or delete any clearly defamatory Content, we are not required to, and we reserve all defenses for such speech made available to us by Section 230 of the Communications Decency Act, applicable statutes, the common law, and the First Amendment to the Constitution of the United States of America</li>
                  <li>If you believe that Content residing or accessible on or through the Site or Service infringes a copyright, please send a notice of copyright infringement containing the following information</li>
                </ol>
              </li>
              <li>Applicable Law
                <ol type="a">
                  <li>This Agreement shall be governed in all respects, including validity, interpretation and effect, without regard to principles of conflicts of law, by the laws of the State of New York</li>
                </ol>
              </li>
              <li>Dispute Resolution
                <ol type="a">
                  <li>All disputes between AtlasCV and you arising out of or in relation to this Agreement (including any disputes related to the validity, interpretation or enforceability of this arbitration clause) shall be settled by arbitration under the rules of the State of New York (the “Arbitration Rules”). AtlasCV reserves the right to the selection of an arbitrating official</li>
                  <li>The seat of the arbitration will be New York and will be conducted in the English language. The arbitral tribunal shall decide on the merits of the dispute with the substantive laws of the State of New York, without regard to conflicts of law rules.</li>
                </ol>
              </li>
              <li>Force Majeure
                <ol type="a">
                  <li>You agree that we are not responsible to you for anything that we may otherwise be responsible for, if it is the result of events beyond our control, including, but not limited to, acts of God, war, insurrection, riots, terrorism, crime, labor shortages (including lawful and unlawful strikes), embargoes, postal disruption, communication disruption, failure or shortage of infrastructure, shortage of materials, or any other event beyond our control</li>
                </ol>
              </li>
              <li>Severability
                <ol type="a">
                  <li>If any provision of this Agreement is held to be invalid or unenforceable, it shall not invalidate any of the remaining provisions of this Agreement. If two or more provisions of this Agreement are deemed to conflict with each other’s operation, AtlasCV shall have the sole right to elect which provision remains in force.</li>
                </ol>
              </li>
              <li>Termination
                <ol type="a">
                  <li>i)	AtlasCV may terminate or suspend your access to or ability to use any and all Services immediately, without prior notice or liability, for any reason or no reason, including but not limited to any breach of the terms or conditions of this Agreement. In particular, AtlasCV may immediately terminate or suspend accounts that have been flagged for repeat copyright infringement.</li>
                  <li>If you wish to terminate this Agreement, you may do so by notifying AtlasCV at any time and closing your account for the Service. Your notice should be sent in writing, in accordance with Section 21 below. Termination of the Agreement may result in the immediate deletion of any Content that you have submitted to AtlasCV. AtlasCV will not have any liability whatsoever to you for any suspension or termination, including for deletion of Your Content. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, success fee provisions, warranty disclaimers, indemnity and limitations of liability</li>
                </ol>
              </li>
              <li>Notice
                <ol type="a">
                  <li>Where AtlasCV requires that you provide an e-mail address, you are responsible for providing AtlasCV with your most current e-mail address. In the event that the last e-mail address you provided to AtlasCV is not valid, or for any reason is not capable of delivering to you any notices required or permitted by this Agreement, AtlasCV’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice</li>
                </ol>
              </li>
              <li>Entire Agreement
                <ol type="a">
                  <li>Without prejudice to the provisions expressly set forth herein, this Agreement is the final, complete and exclusive agreement between the parties with respect to the subject matter hereof and replaces any previous understanding, discussion and/or letter of intent executed by the Parties in relation to such subject matter.</li>
                </ol>
              </li>
              <li>User Data
                <ol type="a">
                  <li>Agreement / Basic Terms
                    <ol type="i">
                      <li>By using or accessing AtlasCV’s website, or any portion of the website, you agree to AtlasCV’s terms of use as outlined in this statement. These terms govern your access to and use of the services. You are entitled to access and use AtlasCV’s services only if you accept and comply with these terms. If you do not want to register an account with AtlasCV, do not enter into this agreement.</li>
                    </ol>
                  </li>
                  <li>Where your Data is Made Available
                    <ol type="i">
                      <li>Your privacy is treated with the utmost importance. Your profile and resume / CV are available to the staff and employers of AtlasCV, as well as to relevant employers. AtlasCV will not disclose your resume/CV and other private information unless you have given your consent.</li>
                      <li>By accessing our website, you agree and consent that your resume and personal information can be made available to any employer, recruiter, or entity utilizing the site.</li>
                    </ol>
                  </li>
                  <li>Removing your Personal Data
                    <ol type="i">
                      <li>AtlasCV makes every effort to ensure that the information available on the site is current and accurate. AtlasCV is not, however, responsible for the accuracy and integrity of data entered by, or referring to, third parties. This includes, but is not limited to, search assignment postings, search leads, external weblinks, resources, articles or secondary information.</li>
                    </ol>
                  </li>
                  <li>Changes in Privacy Statement and Terms and Conditions
                    <ol type="i">
                      <li>AtlasCV reserves the right to modify or amend the Privacy Statement and Terms and Conditions at any time or for any reason. If this Privacy Statement is amended for any reason, AtlasCV will post it clearly on the site so that you will always know what information we collect, use, and, under what circumstances, if any, we disclose it. If you have any queries about this Privacy Statement please contact us.</li>
                    </ol>
                  </li>
                  <li>How your Personal Details are Safeguarded
                    <ol type="i">
                      <li>AtlasCV has taken reasonable precautions to prevent unauthorized access to AtlasCV.com services, including, but not limited to, the use of firewalls, and controlled distributions of passwords, etc. Despite our reasonable efforts, no security measures are perfect or impenetrable. Please protect your own username and password from unauthorized use.</li>
                    </ol>
                  </li>
                  <li>Uploading/Downloading Files
                    <ol type="i">
                      <li>AtlasCV does not accept responsibility for any damage incurred as a result of a registered user’s decision to upload or download an attached document from the site. Documents include, but are not limited to, job descriptions and articles.</li>
                    </ol>
                  </li>
                  <li>Cookies 
                    <ol type="i">
                      <li>AtlasCV may occasionally utilize “Cookies” to maximize the efficiency of your experience online. A cookie is a text file that is placed on your hard drive by a Web page server. Cookies are uniquely assigned to your computer and can be read only by a Web server in the domain that issued the cookie to you. A cookie informs the Web server that you have returned to a specific page. It ensures that your experience is personalized and that certain pieces of data are retained in order to make your experience as personalized and efficient as possible.</li>
                    </ol>
                  </li>
                  <li>What is Required by You
                    <ol type="i">
                      <li>You must, at all times, abide by the terms and conditions of the current Privacy Policy, User Agreement, and other policies of AtlasCV. This includes respecting all intellectual property rights that may belong to third parties, such as trademarks or copyrights. You must not upload or otherwise disseminate any information that may infringe on the rights of others or which may be deemed to be injurious, violent, offensive, racist, or xenophobic, or which may otherwise violate the purpose and spirit of AtlasCV and its community of Members. You must keep your username and password confidential and not share it with others. AtlasCV is not liable in the event that your account is hacked or in any way accessed without your consent</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
            <h3>By proceeding and agreeing to these terms of use, you agree that all terms above are valid, reasonable, and enforceable in perpetuity.</h3>
          </div>
        </div>

      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TermsAndConditions);
