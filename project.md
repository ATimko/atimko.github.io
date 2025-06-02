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
    <!-- Slide 1 -->
    <div class="carousel-item active">
      <img src="/assets/coding.png" class="d-block w-100" alt="Project 1" style="max-height:550px; object-fit:cover;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(0,0,0,0.35); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Fantasy Dog Website Application</h2>
          <p>Short description of project one.</p>
          <div style="height: 10px;"></div>
        </div>
      </div>
    </div>
    <!-- Slide 2 -->
    <div class="carousel-item">
      <img src="/assets/coding.png" class="d-block w-100" alt="Project 2" style="max-height:550px; object-fit:cover;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(0,0,0,0.35); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Message Application</h2>
          <p>Short description of project two.</p>
          <div style="height: 10px;"></div>
        </div>
      </div>
    </div>
    <!-- Slide 3 -->
    <div class="carousel-item">
      <img src="/assets/coding.png" class="d-block w-100" alt="Project 3" style="max-height:550px; object-fit:cover;">
      <div style="position:absolute; left:0; right:0; bottom:0; height:150px; background:rgba(0,0,0,0.35); z-index:2; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center" style="position:static; bottom:auto; color:white;">
          <h2>Discord Bot</h2>
          <p>Short description of project three.</p>
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

