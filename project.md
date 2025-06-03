---
layout: page
title: Projects
permalink: /project/
---

<!-- Blurry line with sharp, centered text -->
<div style="
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 150px;
  margin: 0;
  overflow: hidden;
">
  <!-- Blurry background -->
  <div style="
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw;
    height: 100%;
    background: rgba(148, 148, 148, 0.19);
    filter: blur(8px);
    z-index: 1;
    pointer-events: none;
  "></div>
  <!-- Centered, sharp text -->
  <div style="
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <h1 style="color: white; text-shadow: 0 2px 8px #000; margin: 0; text-align: center;">
      Favorite Featured Projects
    </h1>
  </div>
</div>

<!-- Bootstrap Carousel -->
<div id="projectCarousel" class="carousel slide" data-bs-ride="carousel" style="width: 100vw; margin: 0px 0 0 0; z-index:2; position:relative; left: 50%; transform: translateX(-50%);">
  <div class="carousel-inner rounded shadow">
    <!-- Slide 1 -->
    <div class="carousel-item active">
      <img src="/assets/MythicalCanines.png" class="d-block w-100" alt="Project 1" style="max-height:550px; object-fit: 100% 100%;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(0, 0, 0, 0.55); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Fantasy Dog Website Application</h2>
          <p>Made using C#, ASP .Net Core and HTML</p>
          <div style="height: 10px;"></div>
        </div>
      </div>
    </div>
    <!-- Slide 2 -->
    <div class="carousel-item">
      <img src="/assets/messageapp.png" class="d-block w-100" alt="Project 2" style="max-height:550px; object-fit:cover; object-position: center top;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(7, 0, 0, 0.66); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Message Application</h2>
          <p>Made using TypeScript, React and Java</p>
          <div style="height: 10px;"></div>
        </div>
      </div>
    </div>
    <!-- Slide 3 -->
    <div class="carousel-item">
<img src="/assets/Flarebot.png" class="d-block w-100" alt="Project 3" style="max-height:550px; object-fit:cover; object-position: bottom;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(7, 0, 0, 0.55); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Discord Bot</h2>
          <p>Made using Javascript and NPM plugins</p>
          <div style="height: 10px;"></div>
        </div>
      </div>
    </div>
  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
</div>

<div style="height: 40px;"></div>

<h1 class="text-center">Projects I've made over the years</h1>

<div style="height: 40px;"></div>

<!-- Cards Section -->
<div class="container my-4">
<div class="d-flex flex-wrap justify-content-center gap-4">
<!-- <div class="container my-4" style="padding-left:0; padding-right:0;">
<div class="d-flex flex-wrap justify-content-center gap-4"> -->

<!-- MessageApp Card -->
<div class="card" style="width: 500px;">
    <div style="width:100%; height:400px; position:relative; background:black;">
    <img 
        src="{{ '/assets/messageapp.png' | relative_url }}" 
        alt="MessageApp"
        style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:2;"
    >
    </div>
    <div class="card-body">
    <h5 class="card-title">Message App</h5>
    <p class="card-text">Real time messaging app to other users.</p>
    <div>
    <span class="badge rounded-pill bg-danger">Java</span>
    <span class="badge rounded-pill bg-success">React</span>
    <span class="badge rounded-pill bg-info">TypeScript</span>
    <span class="badge rounded-pill bg-warning text-dark">SQL</span>
    </div>
    <div style="height: 10px;"></div>
    <div class="d-flex justify-content-between align-items-center mt-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#messageappModal">
        Details
    </button>
    <span style="color: #bbb; font-size: 0.95em;">June 2025</span>
        </div>
    </div>
</div>

<!-- Trivia Maze Card -->
<div class="card" style="width: 500px;">
    <div style="width:100%; height:400px; position:relative; background:black;">
    <img 
        src="{{ '/assets/TriviaMaze.png' | relative_url }}" 
        alt="Trivia"
        style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:2;"
    >
    </div>
    <div class="card-body">
    <h5 class="card-title">Trivia Maze</h5>
    <p class="card-text">Maze game with questions to answer.</p>
    <div>
    <span class="badge rounded-pill bg-danger">Java</span>
    </div>
    <div style="height: 10px;"></div>
    <div class="d-flex justify-content-between align-items-center mt-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#triviaModal">
        Details
    </button>
    <span style="color: #bbb; font-size: 0.95em;">June 2024</span>
        </div>
    </div>
</div>

<!-- Tetris Card -->
<div class="card" style="width: 500px;">
    <div style="width:100%; height:400px; position:relative; background:black;">
    <img 
        src="{{ '/assets/TetrisGame.png' | relative_url }}" 
        alt="Tetris"
        style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:2;"
    >
    </div>
    <div class="card-body">
    <h5 class="card-title">Tetris Game</h5>
    <p class="card-text">Tetris Game where you clear lines using different shapes.</p>
    <div>
    <span class="badge rounded-pill bg-danger">Java</span>
    </div>
    <div style="height: 10px;"></div>
    <div class="d-flex justify-content-between align-items-center mt-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tetrisModal">
        Details
    </button>
    <span style="color: #bbb; font-size: 0.95em;">March 2023</span>
        </div>
    </div>
</div>

<!-- Mythical Canines Card -->
<div class="card" style="width: 500px;">
    <div style="width:100%; height:400px; position:relative; background:black;">
    <img 
        src="{{ '/assets/MedicK9.gif' | relative_url }}" 
        alt="Mk9"
        style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:2;"
    >
    </div>
    <div class="card-body">
    <h5 class="card-title">Fantasy Dog Web App</h5>
    <p class="card-text">A fictional mobile game turned into a website.</p>
    <div>
    <span class="badge rounded-pill bg-primary">C#</span>
    <span class="badge rounded-pill bg-success">JavaScript</span>
    <span class="badge rounded-pill bg-secondary">ASP .NET Core</span>
    <span class="badge rounded-pill bg-warning text-dark">HTML</span>
    </div>
    <div style="height: 10px;"></div>
    <div class="d-flex justify-content-between align-items-center mt-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mk9Modal">
        Details
    </button>
    <span style="color: #bbb; font-size: 0.95em;">June 2020</span>
        </div>
    </div>
</div>
<!-- MessageApp Modal -->
<div class="modal fade" id="messageappModal" aria-labelledby="messagemappModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="messagemappModalLabel">Message App</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="{{ '/assets/SqlMessage.png' | relative_url }}" alt="MessageApp" style="max-width: 100%; height: 500px; object-fit:cover; margin-bottom: 1rem;">
        <p>This message application was made in Visual studios code with Java, React, Typescript and SQL. It does real time messaging to other users and uses a database to make/create new users to interact with! </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="https://github.com/JustSumToast/tcss455project" target="_blank" rel="noopener" class="btn btn-primary">Go to Github Project</a>
      </div>
    </div>
  </div>
</div>

<!-- Trivia Modal -->
<div class="modal fade" id="triviaModal" aria-labelledby="messagemappModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="messagemappModalLabel">Trivia Maze</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="{{ '/assets/TriviaQuestions.png' | relative_url }}" alt="Trivia" style="max-width: 100%; height: 500px; object-fit:cover; margin-bottom: 1rem;">
        <p>This application was made in IntelliJ with Java. It is a Trivia Maze that makes you answer True/False, Short Answers and Multiple choice questions!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="https://github.com/ATimko/TriviaMaze" target="_blank" rel="noopener" class="btn btn-primary">Go to Github Project</a>
      </div>
    </div>
  </div>
</div>

<!-- Tetris Modal -->
<div class="modal fade" id="tetrisModal" aria-labelledby="TetrisModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TetrisModalLabel">Tetris Game</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="{{ '/assets/TetrisCode.png' | relative_url }}" alt="Tetris" style="max-width: 100%; height: 500px; object-fit:cover; margin-bottom: 1rem;">
        <p>This application was made in IntelliJ with Java. Tetris is a game in which the player moves and rotates dropping pieces to form solid lines. Lines that are completely cleared gives points to the player.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Mythical Canine Modal -->
<div class="modal fade" id="mk9Modal" aria-labelledby="mk9ModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mk9Label">Fantasy Dog Website Application</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="{{ '/assets/MythicalK9sWebsite.png' | relative_url }}" alt="Tetris" style="max-width: 100%; height: 500px; object-fit:cover; margin-bottom: 1rem;">
        <p>This application was made in Visual Studios using ASP .NET Core, C#, JavaScript and HTML, it also uses Bootstrap and used to be on Microsoft Azure for hosting. The website is called Mythical Canines where it's a Fantasy Mobile based game. This website includes game updates, animations, game explanations and more!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="https://github.com/ATimko/MythicalCanines" target="_blank" rel="noopener" class="btn btn-primary">Go to Github Project</a>
      </div>
    </div>
  </div>
</div>

<!-- Auto scroll to the modal windows -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
      modal.addEventListener('shown.bs.modal', function () {
        setTimeout(() => {
          modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      });
    });
  });
</script>

<div style="height: 40px;"></div>