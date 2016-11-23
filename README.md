## README FOR ATLAS-CV
#### IMPORTANT INFORMATION

#### Installation
  * NodeJS - please ensure [NodeJS](https://nodejs.org/en/) is installed on your system

  ```
  //navigate to root directory

  // npm install all app dependencies
  npm install

  // to start the dev build
  npm run start

  // default port localhost:3000

  // In the web browser, to go localhost:3000

  // Create .gitignore inside root directory
  touch .gitignore

    // add the following in the .gitignore file
      *.swp
      node_modules
      dist
      .tmp

  //
  ```
##### APP ARCHITECTURE
###### DO NOT TOUCH ANY OTHER FOLDERS EXCEPT app
  ```

  |-  app
  |   |-  actions                                 // do NOT touch - handling redux
  |   |-  admin                                   // components to rendering admin data points Gareth requested
  |   |-  components                              // contains all the components for the app
  |   |   |-  common                              // contains helper component
  |   |   |-  forms
  |   |   |   |-  applicant                       // contains form related component for the applicant profile
  |   |   |   |-  employer                        // contains form related component for the employer profile
  |   |   |-  jobs                                // contains job related components
  |   |   |   |-  archived_jobs.js                // component to render archived job details
  |   |   |   |-  job.js                          // component to render each job detail for both applicant and employer
  |   |   |   |-  list_jobs.js                    // component to list jobs
  |   |   |   |-  post_job.js                     // component to post a job

  |   |   |-  menus                               // contains the component for main_menu(top menu bar), footer, terms_and_condition, error (handling 404)
  |   |   |-  match                               // contains all the components for matching
  |   |   |   |-  list_applicants_applied.js      // component to render matched applicant based on applicant id
  |   |   |   |-  list_match.js                   // component to render list all matched jobs for applicant
  |   |   |   |-  list_matched_applicants.js      // component to render list all matched applicants for employer
  |   |   |   |-  list_matched_employers.js       // component to render matched employer based on employer id
  |   |   |   |-  matched_applicant_profile.js    // component to render render matched applicant profile based on id
  |   |   |   |-  matched_employer_profile.js     // component to render render matched employer profile based on id
  |   |   |-  profiles
  |   |   |   |-  applicant                       // contains the component for the applicant profile
  |   |   |   |-  employer                        // contains the component for the employer profile
  |   |   |-  user_auth                           // contains all the components for login / signup for both applicant and employers
  |   |-  config                                  // do NOT touch - part of backend config
  |   |-  containers
  |   |   |-  App.js                              // Main Component for the app
  |   |   |-  Main.js                             // landing page for the app
  |   |   |-
  |   |-  images                                  // contains all images for the app
  |   |-  js                                      // contains all the jquery javascripts
  |   |-  middleware                              // do NOT touch - part of backend config
  |   |-  reducers                                // do NOT touch - handling redux
  |   |-  routes                                  // contains all the routes for the app
  |   |-  semantic                                // do NOT touch - handling semantic-ui framework for stylings
  |   |-  server                                  // do NOT touch - contain all the backend NodeJS
  |   |   |-  Views
  |   |   |   |-  index.ejs                       // contains the HTML for the entire app
  |   |-  store                                   // do NOT touch - handling redux
  |   |-  styles
  |   |-  utils                                   // do NOT touch - helper functions
  |   |-  app.js                                  // do NOT touch - root app
  |   |-  rootReducer.js                          // do NOT touch - part of redux

  ```
