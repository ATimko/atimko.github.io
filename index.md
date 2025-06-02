---
layout: page
title: Home
---

<!-- Cover image at the top -->
<!--<div style="width: 100vw; height: 500px; overflow: hidden; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;">
  <img 
    src="{{ '/assets/cover.png' | relative_url }}" 
    alt="Cover Image" 
    style="width: 300vw; height: 400px; object-fit: cover; display: block; margin: 0; padding: 0;"
  >
</div> -->
<!-- Cover banner (fills directly below navbar) -->
<div class="banner-top" style="width: 100vw; height: 450px; overflow: hidden; position: relative; left: 50%; margin-left: -50vw; margin-right: -50vw;">
  <img 
    src="{{ '/assets/cover.png' | relative_url }}" 
    alt="Cover Image" 
    style="width: 100vw; height: 450px; object-fit: cover; display: block; margin: 0; padding: 0;"
  >
  <!-- Blurry line across the center -->
  <div style="
    position: absolute;
    left: 0;
    top: 50%;
    width: 100vw;
    height: 150px;
    transform: translateY(-50%);
    background: rgba(148, 148, 148, 0.19);
    filter: blur(8px);
    z-index: 1;
    pointer-events: none;
  "></div>
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-shadow: 0 2px 8px #000; width: 100vw;" class="text-center">
    <h2>Ashley Timko's Portfolio</h2>
    <p>Hello, my name is Ashley Timko<br>
    I'm currently finishing up my bachelor's degree in Computer Science. I'm also minoring in Business Data Analytics.
    </p>
  </div>
</div>
<!-- ...rest of your content... -->

<!--<div class="container my-4">
  <div class="btn-group" role="group" aria-label="Navigation Buttons">
    <a class="btn btn-primary" href="{{ '/' | relative_url }}">Home</a>
    <a class="btn btn-primary" href="{{ '/about/' | relative_url }}">About Me</a>
  </div>
</div> -->
<div style="height: 40px;"></div>

<!-- Mini About Me -->
<div class="text-center my-4" style="max-width: 1200px; margin: 0 auto;">
  <div style="
    background: rgba(30,30,30,0.92);
    color: #fff;
    padding: 2rem 2rem 1.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 32px rgba(0,0,0,0.25);
    display: inline-block;
    width: 100%;
  ">
  <h1 class="text-center">Introduction</h1>
  <div style="height: 40px;"></div>
      <p>I'm currently attending University of Washington-Tacoma Campus, pursuing a degree in Computer Science and minoring in Business Data Analytics. I'm graduating in June 13, 2025, and have prior programming knowledge before coming to University of Washington Tacoma. I went to 2 colleges (Clover Park for core technology classes done and Pierce College with some computer science plus some general education classes out of the way) to expand on my degree, I also have some hobbies in drawing and graphic design.</p>
  </div>
</div>

<div style="height: 40px;"></div>

<!-- Cards Section -->
<div class="container my-4">
  <div class="d-flex flex-wrap justify-content-center gap-4">

  <!-- About Me Card -->
  <div class="card" style="width: 500px;">
    <div class="blur-img-wrapper" style="width:500px; height:400px; position:relative; background:black;">
      <img 
        src="{{ '/assets/Aboutmecard.png' | relative_url }}" 
        class="blur-bg"
        alt="About"
        style="position:absolute; top:0; left:0; width:100%; height:100%; filter: blur(12px); z-index:1; object-fit:contain;"
      >
      <img 
        src="{{ '/assets/Aboutmecard.png' | relative_url }}" 
        class="card-img-top"
        alt="About"
        style="position:relative; width:100%; height:100%; object-fit:contain; z-index:2;"
      >
    </div>
    <div class="card-body">
      <h5 class="card-title">About Me</h5>
      <p class="card-text">More in-depth information about me!</p>
      <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">Go to About Me Page</a>
    </div>
  </div>

  <!-- Experience Card -->
  <div class="card" style="width: 500px;">
    <div class="blur-img-wrapper" style="width:500px; height:400px; position:relative; background:black;">
      <img 
        src="{{ '/assets/coding.png' | relative_url }}" 
        class="blur-bg"
        alt="Experience"
        style="position:absolute; top:0; left:0; width:100%; height:100%; filter: blur(12px); z-index:1; object-fit:contain;"
      >
      <img 
        src="{{ '/assets/coding.png' | relative_url }}" 
        class="card-img-top"
        alt="Experience"
        style="position:relative; width:100%; height:100%; object-fit:contain; z-index:2;"
      >
    </div>
    <div class="card-body">
      <h5 class="card-title">Experience</h5>
      <p class="card-text">What did I learn over the years</p>
      <a href="{{ '/experience/' | relative_url }}" class="btn btn-primary">Go to Experience Page</a>
    </div>
  </div>

  <!-- Projects Card -->
  <div class="card" style="width: 500px;">
    <div class="blur-img-wrapper" style="width:500px; height:400px; position:relative; background:black;">
      <img 
        src="{{ '/assets/lunchapp.png' | relative_url }}" 
        class="blur-bg"
        alt="Projects"
        style="position:absolute; top:0; left:0; width:100%; height:100%; filter: blur(12px); z-index:1; object-fit:contain;"
      >
    <img 
      src="{{ '/assets/lunchapp.png' | relative_url }}" 
      class="card-img-top"
      alt="Projects"
      style="position:relative; width:100%; height:400px; object-fit:contain; z-index:1;"
    >
    </div>
    <div class="card-body">
      <h5 class="card-title">Projects</h5>
      <p class="card-text">Projects I've done through out the years</p>
      <a href="{{ '/project/' | relative_url }}" class="btn btn-primary">Go to Projects Page</a>
    </div>
  </div>

  </div>
</div>

<div style="height: 40px;"></div>