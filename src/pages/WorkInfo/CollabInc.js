import classes from "./WorkInfo.module.css"
const CollabInc = () => {
  return (
    <main className={classes["page-content"]}>
      <div className={classes["container"]}>
        <header className={classes["header"]}>
          <h2>Sanket Koli</h2>
          <h1>Collab</h1>
          <p>(May 2021 - Aug 2021) • Engineering Intern • Internship</p>
        </header>
        <div className={classes["description"]}>
          <p>
            Upon joining Collab, I started contributing to their internal
            projects with a goal of enhancing user experience, implementing new
            features and facilitating smooth deployment to production. As a
            somewhat of a content creator myself, it{"'"}s been really exciting
            to have worked so closely to the creator economy.
          </p>
          <h2 id="highlights">Highlights</h2>
          <ul>
            <li>
              Replaced custom SVG icons to Material UI icons reducing tremendous
              amount of code lines
            </li>
            <li>
              Implemented and maintained new features such as date range filter
              dropdown and search bar
            </li>
            <li>
              Used <span>react-query</span> and <span>context API </span>in
              place of redux
            </li>
            <li>
              Automated testing using Cypress and handled front-end deployment
              using Vercel and GitHub Actions
            </li>
            <li>
              Technologies used: Next.js, Vercel, PlanetScale, TypeScript, Ruby
              on Rails and Prisma
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
              <a href="#internship-overview">Internship Overview</a>
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
                  <a href="#presentation">
                    Dr. Squatch - Presentation (~1 week)
                  </a>
                </li>
                <li>
                  <a href="#what-i-learned">What I Learned</a>
                </li>
              </ul>
            </li>
          </ul>
          <h2 id="internship-overview">Internship Overview</h2>
          <p>
            My internship consisted of 3 main parts: front-end enhancement, code
            maintenance and client support
          </p>
          <h3 id="projects-worked-upon">Projects Worked Upon</h3>

          <ul>
            <li>
              VideoLibrary: A video library store for subscribed content
              creators
            </li>
            <li>Scan: Tool for detecting copyright infringement</li>
            <li>Uncle: Video licencing tool</li>
            <li>Dashboard: Dashboard for the organisation employees</li>
          </ul>
          <p>
            I was responsible for maintaining and enhancing the user interfaces
            for all the projects. The project that I liked the most were
            VideoLibrary and Scan because I spent most of the time on these two
            projects understanding the core functionalities, fixing existing
            bugs and adding new features.
          </p>

          <h3 id="implementation-productionizing">
            Implementation & Productionizing
          </h3>
          <ul>
            <li>
              Introduced to the tools and technologies used for software
              development
            </li>
            <li>
              Started with small tasks, gradually understanding every aspect of
              the project
            </li>
            <li>
              Collaborated with cross-functional teams to implement new features
              and improve existing ones
            </li>
            <li>
              Created pull request for code reviews, testing and bug fixing
              followed by deployment to production
            </li>
          </ul>
          <h3 id="presentation">Dr. Squatch - Presentation (~1 week)</h3>
          <p>
            At the end of the internship, all the interns were assigned tasks
            based on the department we were working with. Since I was working
            with the engineering team, I was asked to create a software solution
            for Dr. Squatch{"'"}s new brand using exisiting technologies Collab
            had.
          </p>
          <p>
            I started the presentation explaining how a <span>Dashboard</span>{" "}
            would help Dr.Squatch visualize their product sales, analyze the
            datasets and organize everything in one place. A Video Library tool
            would help Dr. Squatch organize their ads in one place and make it
            accesible anywhere. A clip licensing tool Uncle would help prevent
            copyright infringement.
          </p>

          <h3 id="what-i-learned">What I Learned</h3>
          <ul>
            <li>
              Usage of Material UI, Next.js framework, basics of semantic HTML
              and CSS box-model
            </li>
            <li>Create and use custom React Hooks</li>
            <li>
              Learned why code cleanup is important for application performance
            </li>
            <li>
              Syntactically correct way of creating pull requests on GitHub and
              usage of in-built keywords to reference existing issues in the PR
            </li>
          </ul>
          <p>
            I was introduced to the best coding practices during my tenure at
            Collab. My mentor was a highly experienced Front-end Architect and
            he provided me support in every aspect of the work flow. He also
            created a lot of opportunities for me to learn and work upon new
            technologies like PlanetScale, Fork, Cypress, etc. He instilled in
            me the common practices and best guidelines to be followed for
            writing quality code.
          </p>
        </div>
      </div>
    </main>
  )
}

export default CollabInc
