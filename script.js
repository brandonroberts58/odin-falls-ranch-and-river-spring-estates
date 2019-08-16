function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var myGallery = [{
    title: "Image 1",
    description: "Description 1",
    src: "1.jpg"
},{
    title: "Image 2",
    description: "Description 2",
    src: "2.jpg"
},{
    title: "Image 3",
    description: "Description 3",
    src: "3.jpg"
}];

Spotlight.show(myGallery);

Spotlight.show(myGallery,{
  animation: "slide",
  control: ["autofit", "zoom"],
  autohide: true,
  fullscreen: true,
  zoom: true,
  zoomin: true,
  zoomout: true,
  reset: true,
  theme: true,
  player: true,
  infinite: true,
  theme: "white",
  page: true,
  preloader: true,
  prefetch: true
});
Spotlight.close();
Spotlight.next();
Spotlight.prev();
Spotlight.goto(3);
Spotlight.zoom(1.5);
Spotlight.theme();
Spotlight.theme("white");
Spotlight.theme("dark");
Spotlight.fullscreen();
Spotlight.fullscreen(true);
Spotlight.fullscreen(false);
Spotlight.autofit();
Spotlight.autofit(true);
Spotlight.autofit(false);
Spotlight.menu();
Spotlight.menu(true);
Spotlight.menu(false);