import classes from "./WorkInfo.module.css"
const FrshrTech = () => {
  return (
    <main className={classes["page-content"]}>
      <div className={classes["container"]}>
        <header className={classes["header"]}>
          <h2>Sanket Koli</h2>
          <h1>Frshr Technologies</h1>
          <p>(Jun 2020 - Aug 2021) • Software Developer • Full-time</p>
        </header>
        <div className={classes["description"]}>
          <p>
            When I joined Frshr Technologies we were a team of only 6-7 people
            back then including myself. My responsibilities included interacting
            with the clients to understand their requirements and build native
            mobile applications for iOS and Android. The clients were based in
            UK and USA. By the time I left Frshr Technologies for higher
            studies, the company grew to ~50 employees. I was leading the mobile
            application development team and also assisted in hiring and
            training new recruits for the front-end development team.
          </p>
          <h2 id="highlights">Highlights</h2>
          <ul>
            <li>
              Developed and delivered two native mobile applications using
              Flutter SDK
            </li>
            <li>
              Integrated over 40 backend REST API{"'"}s and over 10 third-party
              application API{"'"}s to create intuitive user interfaces
            </li>
            <li>
              Performed live demo to clients on weekly basis to demonstarte the
              progress
            </li>
            <li>
              Led the development team to develop and successfully deliver the
              mobile application before deadline
            </li>
            <li>
              Technologies used: Flutter, Dart, Node, VSCode, Postman, Figma,
              Xcode and TestFlight
            </li>
          </ul>
          <h2 id="table-of-contents">Table of Contents</h2>
          <ul className={classes["markdown-toc"]}>
            <li>
              <a href="#highlights">Highlights</a>
            </li>
            <li>
              <a href="#table-of-contents">Table of Contents</a>
            </li>
            <li>
              <a href="#full-time-overview">Full-time Overview</a>
              <ul>
                <li>
                  <a href="#projects-worked-upon">Projects worked upon</a>
                </li>
                <li>
                  <a href="#implementation-productionizing">
                    Implementation & Productionizing
                  </a>
                </li>
                <li>
                  <a href="#work-culture">Work Culture</a>
                </li>
                <li>
                  <a href="#my-progress">
                    How I became lead mobile app developer?
                  </a>
                </li>
                <li>
                  <a href="#what-i-learned">What I Learned</a>
                </li>
              </ul>
            </li>
          </ul>
          <h2 id="full-time-overview">Full-time Overview</h2>
          <p>
            I enjoyed my time at Frshr Technologies. It offered a perfect
            work-life balance. My manager was the CEO of the company. Both my
            manager and the technical lead were supportive and encouraged the
            work I did.
          </p>
          <h3 id="projects-worked-upon">Projects Worked Upon</h3>

          <ul>
            <li>
              Social Identity Verification App: Helped user identify fake follow
              request on Twitter
            </li>
            <li>
              Social Media App: Post images, videos and text with an integration
              of Blockchain and NFT technologies using Hedera Hashgraph
            </li>
          </ul>
          <p>
            The Social Identity Verification app utilized Twitter API to gather
            user account information like follow list and incoming follow
            requests. We used Passbase SDK to verify users social identity in
            the app. Once the user verifies his identity, his social media
            account (Twitter) is assigned a badge making him a genuine user. The
            user can now check the follow requests within the app and identify
            the fake follow requests.
          </p>
          <p>
            Building an entire Social Media Application from scratch was a
            challenge in the initial stage. Integrated over 40 backend API{"'"}s
            and maintained states in multiple pages while ensuring fast and
            intuitive user experience. We also incorporated Blockchain and NFT
            technologies allowing verified users to buy and sell digital assets
            like wallpapers, icons in our app marketplace.
          </p>

          <h3 id="implementation-productionizing">
            Implementation & Productionizing
          </h3>
          <ul>
            <li>
              Offered flexibility to choose between Xamarine and Flutter
              technology for development
            </li>

            <li>
              Collaborated with product owners, team manager and other engineers
              to understand the business requirements and system specifications
            </li>
            <li>
              Accurately transformed provided design styles into functional
              front-end user interface
            </li>
            <li>
              Bundled the app in Xcode for testing purposes creating production
              preview on TestFlight
            </li>
            <p></p>
          </ul>
          <h3 id="my-progress">How I became lead mobile app developer?</h3>
          <p>
            Working at a start-up isn{"'"}t always easy. The environment is
            always fast-paced since a single developer has to perform multiple
            tasks. I faced a lot of problems in the beginning when I was not
            completely familiar with the technology. I spent countless weekends
            working on the tasks and completing them. Once I got a hang of the
            technology, it was a piece of cake to carry out the tasks like
            integrating an API, creating new UI components, maintaining states,
            route management etc.
          </p>
          <p>
            Over time, my work efficiency increased and gained trust in the
            organisation. I was assigned the lead developer role for the
            upcoming new project which was a Social Media Application. Suddenly
            I felt the increased responsibilities and workload, but that only
            pushed me work harder. Hiring and training new recruits was not
            easy. I had to start everything from scratch to explain the
            architecture of the app. I hired few exceptional developers that
            created a huge impact on the new features we built for the mobile
            app.
          </p>

          <h3 id="what-i-learned">What I Learned</h3>
          <ul>
            <li>Widget based components in FLutter (Stateful and Stateless)</li>
            <li>HTTP requests using dio</li>
            <li>Code splitting and optimisation techniques</li>
            <li>Creating production ready applications</li>
          </ul>
          {/* <p>
            I was introduced to the best coding practices during my tenure at
            Collab. My mentor was a highly experienced Front-end Architect and
            he provided me support in every aspect of the work flow. He also
            created a lot of opportunities for me to learn and work upon new
            technologies like PlanetScale, Fork, Cypress, etc. He instilled in
            me the common practices and best guidelines to be followed for
            writing quality code.
          </p> */}
        </div>
      </div>
    </main>
  )
}

export default FrshrTech
