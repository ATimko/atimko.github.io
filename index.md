---
layout: page
title: Home
---

<main id="main">
  <section class="portfolio-hero" aria-labelledby="hero-title">
    <div class="portfolio-hero-content">
      <p class="portfolio-eyebrow">Computer Science · Business Data Analytics</p>
      <h1 id="hero-title">Ashley<br>Timko</h1>
      <h2>UX/UI Designer and Data Analyst</h2>
      <p class="portfolio-hero-copy">
        I’m a University of Washington Tacoma graduate with a degree in Computer Science
        and a minor in Business Data Analytics. I enjoy building software, designing
        thoughtful interfaces, and turning ideas into practical projects.
      </p>
      <div class="portfolio-actions">
        <a class="portfolio-button portfolio-button-primary" href="{{ '/project/' | relative_url }}">Explore my projects</a>
        <a class="portfolio-button portfolio-button-blue" href="{{ '/about/' | relative_url }}">More about me</a>
      </div>
    </div>
    <div class="portfolio-portrait-wrap">
      <img class="portfolio-portrait" src="{{ '/assets/aboutme.png' | relative_url }}" alt="Portrait of Ashley Timko">
    </div>
  </section>

  <section class="portfolio-stats" aria-label="Education and certifications">
    <div class="portfolio-stat">
      <strong>2025</strong>
      <span>UW Tacoma graduate</span>
    </div>
    <div class="portfolio-stat">
      <strong>B.S.</strong>
      <span>Computer Science</span>
    </div>
    <div class="portfolio-stat">
      <strong>Minor</strong>
      <span>Business Data Analytics</span>
    </div>
    <div class="portfolio-stat">
      <strong>2</strong>
      <span>Professional certifications</span>
    </div>
  </section>

  <section class="portfolio-section" aria-labelledby="projects-title">
    <div class="portfolio-section-heading">
      <p class="portfolio-section-kicker">Selected work</p>
      <h2 id="projects-title">Projects built with curiosity</h2>
      <p>A few examples of the software and creative projects I’ve worked on over the years.</p>
    </div>

    <div class="portfolio-project-grid">
      <article class="portfolio-project-card">
        <img class="portfolio-project-image" src="{{ '/assets/messageapp.png' | relative_url }}" alt="Screenshot of the Message App" loading="lazy">
        <div class="portfolio-project-body">
          <h3>Message App</h3>
          <p>A real-time messaging application for connecting with other users.</p>
          <div class="portfolio-tags" aria-label="Technologies">
            <span class="portfolio-tag">Java</span>
            <span class="portfolio-tag">React</span>
            <span class="portfolio-tag">TypeScript</span>
            <span class="portfolio-tag">SQL</span>
          </div>
          <a class="portfolio-card-link" href="{{ '/project/' | relative_url }}">View project details &rarr;</a>
        </div>
      </article>

      <article class="portfolio-project-card">
        <img class="portfolio-project-image" src="{{ '/assets/MythicalCanines.png' | relative_url }}" alt="Preview of the Fantasy Dog website" loading="lazy">
        <div class="portfolio-project-body">
          <h3>Fantasy Dog Web App</h3>
          <p>A fictional mobile game brought to life as a C# and ASP.NET Core website.</p>
          <div class="portfolio-tags" aria-label="Technologies">
            <span class="portfolio-tag">C#</span>
            <span class="portfolio-tag">ASP.NET Core</span>
            <span class="portfolio-tag">JavaScript</span>
          </div>
          <a class="portfolio-card-link" href="{{ '/project/' | relative_url }}">View project details &rarr;</a>
        </div>
      </article>

      <article class="portfolio-project-card">
        <img class="portfolio-project-image" src="{{ '/assets/TriviaMaze.png' | relative_url }}" alt="Screenshot of the Trivia Maze game" loading="lazy">
        <div class="portfolio-project-body">
          <h3>Trivia Maze</h3>
          <p>A Java maze game that combines navigation with trivia questions.</p>
          <div class="portfolio-tags" aria-label="Technologies">
            <span class="portfolio-tag">Java</span>
          </div>
          <a class="portfolio-card-link" href="{{ '/project/' | relative_url }}">View project details &rarr;</a>
        </div>
      </article>
    </div>
  </section>

  <section class="portfolio-section" aria-labelledby="about-title">
    <div class="portfolio-section-heading">
      <p class="portfolio-section-kicker">A little about me</p>
      <h2 id="about-title">Code, creativity, and continuous learning</h2>
    </div>
    <div class="portfolio-about-panel">
      <p class="portfolio-about-copy">
        My interest in programming started with game design and grew into a love of
        building projects from the ground up. I’ve explored both frontend and backend
        development, and I bring the same curiosity to drawing, animation, and graphic
        design. My studies in data analytics also strengthened my SQL and database skills.
      </p>
      <div class="portfolio-tags" aria-label="Areas of interest">
        <span class="portfolio-tag">Software development</span>
        <span class="portfolio-tag">UI/UX</span>
        <span class="portfolio-tag">Data analytics</span>
        <span class="portfolio-tag">Drawing &amp; animation</span>
      </div>
      <div class="portfolio-actions">
        <a class="portfolio-button portfolio-button-blue" href="{{ '/about/' | relative_url }}">Read more about me</a>
        <a class="portfolio-button portfolio-button-blue" href="{{ '/experience/' | relative_url }}">Education &amp; certifications</a>
      </div>
    </div>
  </section>

  <section class="portfolio-contact-panel" aria-labelledby="contact-title">
    <div>
      <p class="portfolio-section-kicker">Get in touch</p>
      <h2 id="contact-title">Let’s connect</h2>
      <p>Interested in my work? Find me on GitHub or send me an email.</p>
    </div>
    <div class="portfolio-actions">
      <a class="portfolio-button portfolio-button-primary" href="mailto:{{ site.email }}">Email me</a>
      <a class="portfolio-button portfolio-button-blue" href="https://github.com/ATimko" target="_blank" rel="noopener noreferrer">GitHub profile</a>
    </div>
  </section>
</main>
