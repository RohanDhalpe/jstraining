// 1. Visit any page on the browser, and replace the content
//  of all the p tags with the phrase “How’s the Josh?” using Javascript

// Replace content of all <p> tags with "How's the Josh?"
document.querySelectorAll('p').forEach(p => {
  p.textContent = "How's the Josh?";
});


// 2. Go to youtube. Open any video. Add a button to the page using JS.
//  On click of the button, the video playback speed should change to 10x

const ButtonFor10X = document.createElement("button");
ButtonFor10X.textContent = "10X Speed"
ButtonFor10X.addEventListener('click', ()=>{
  document.getElementsByClassName('html5-main-video')[0].playbackRate = 10;
});
document.getElementsByClassName("ytp-chrome-controls")[0].appendChild(ButtonFor10X)