# IDEA9103_sili0224_individual_work

# **FUNCTIONING PROTOTYPE INSTRUCTION**

## **Instructions on how to interact with the work**

- **<p style="text-align: justify;">Load the page:** Open the webpage using the code provided.</p>
- **<p style="text-align: justify;">Play the music:** Click the Play/Pause button to start playing the music. The animation will start in sync with the music.</p>
- **<p style="text-align: justify;">Mouse interaction:** Slowly move the mouse across the screen. The Y position of the mouse controls the music volume(up and down), while the X position controls the pan (left and right).</p>
- **<p style="text-align: justify;">Animation:** As the music plays, observe how the different rectangles dynamically move and rotate based on the amplitude and frequency data of the audio.</p>

## **Animation Driver: Audio**

<p style="text-align: justify;">I chose to animate the rectangles by the music's audio (amplitude and frequency). The key idea is to create a visual representation of the audio that changes dynamically as the music plays.</p>

## **Animation Properties and Uniqueness**

#### The properties I chose to animate include:

- **<p style="text-align: justify;">Movement and Rotate:** The rectangles are dynamically change the shpaes size and rotate within the canvas before the music has played bu using offset method, after that the movement will determined by the frequency spectrum of the audio.</p>

- **<p style="text-align: justify;">Rotation:** Each rectangle rotates around its centre, with the rotation angle affected by the audio's amplitude.</p>

- **<p style="text-align: justify;">Scale:** The scale of each rectangle changes based on the frequency spectrum data, creating a jumping and shaking effect.</p>

<p style="text-align: justify;">Through discussions with group members, the properties changed before animation mainly focused on the position and movement of some components. In contrast, after animation, that will emphasise the dynamic movement of rectangles and scaling based on component size (the shapes jumped and rotated during the playing song). One of the team members also used the rotation method, but the difference between our focus was that I mainly made the jumps and shakes based on the music nodes, while the other team members achieved the easing effect through mouse control..</p>

## **Inspiration**

<p style="text-align: justify;">The Walter Ruttmann's Lichtspiel Opus IV (1925) as my inspiration, which is an early abstract film demonstrating the dynamic and rotational movement of shapes set to music. The film features a rhythmic of geometric shapes that shift and rotate with the accompanying music. The visual effects in the film influenced my decision to animate the artwork.</p>

[![Watch the video](https://www.johncoulthart.com/feuilleton/wp-content/uploads/2014/12/ruttmann2.jpg)](https://archive.org/details/LichtspielOpusIV) <br>
*Walter Ruttmann's Lichtspiel Opus IV*

## **Technical explanation of the code**

###### <p style="text-align: justify;"> *Note: All the following codes are improved based on the group's work (the parts repeated with the group's code are not shown here)* </p>

***

**<p style="text-align: justify;">Through add audio, mouse control, rotation and other methods to create animations based on the group code.</p>**

- <p style="text-align: justify;">Added audio-related variables, for example numBins, smoothing, etc.

```
let song;
let fft;
let numBins = 128;
let smoothing = 0.8;
let button;
let volume = 1.0;
let pan = 0.0;
let amplitude;
```
- <p style="text-align: justify;">Contains properties and methods for dynamic scaling and rotation based on audio input. The offsetX and offsetY are instance variables that represent the horizontal and vertical offset of the rectangles' movements.</p>

```
class rectangleManager {
display() {
    translate(this.drawX + this.offsetX + this.drawWidth / 2, this.drawY + this.offsetY + this.drawHeight / 2);
    rotate(map(amplitude, 0, 255, 0, TWO_PI));
    rectMode(CENTER);
  }

  setScale(scale) {
    this.scale = scale;
  }

  setScale(scale) {
    this.scale = scale;
  }
  setOffset(offsetX, offsetY) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}
```
- <p style="text-align: justify;">Setup initializing audio analysis objects and creating a play/pause button.</p>
  
```
function setup() {

  fft = new p5.FFT(smoothing, numBins);
  amplitude = new p5.Amplitude();
  song.connect(fft);

  // Button play/pause
  button = createButton("Play/Pause");
  button.mousePressed(play_pause);

  resizeButton();
}
```
- <p style="text-align: justify;">Add animates the rectangles based on audio analysis in draw function.</p>
  
```
function draw() {

  let spectrum = fft.analyze();
  amplitude = fft.getEnergy(20, 20000);

  for (let i = 0; i < allRectsArray.length; i++) {
    let specValue = spectrum[i % numBins];
    let scale = 1 + specValue / 255;

    let offsetX = map(specValue, 0, 255, 0, random(8));
    let offsetY = map(specValue, 255, 0, 0, random(5));

    if (i <= 200){
      offsetX = map(specValue, 0, 255, 0, random(0));
      offsetY = map(specValue, 255, 0, 0, random(0));

    }

    allRectsArray[i].setScale(scale);
    allRectsArray[i].setOffset(offsetX, offsetY);
    allRectsArray[i].calculateDrawSize(windowWidth, windowHeight);
    allRectsArray[i].display();
  }
}
```

- <p style="text-align: justify;">Control the volume and pan through mouse moving</p>
  
```
function mouseMoved() {
  // Map the mouseY to a volume value between 0 and 1
  volume = map(mouseY, 0, height, 1, 0);
  song.setVolume(volume);

  // Map the mouseX to a pan value between -1 and 1
  pan = map(mouseX, 0, width, -1, 1);
  song.pan(pan);
}
```

**<p style="text-align: justify;"> Reference of the technique learned online</p>**

In the following code in CHATGPT help me inspire the functions, and I pick one line that useful for me.

```
  // Through CHATGPT inspiration
  let spectrumValue = spectrum[index % spectrum.length]; 
```

Then, I create the following codes.

```
    let specValue = spectrum[i % numBins];
    let scale = 1 + specValue / 255;
```
**Explanation of the code**

<p style="text-align: justify;"> Setting the specValue from the array using the index [i % numBins] ensures the index goes around and stays within the function. I try to calculate the scale for the rectangles based on the spectrum value to ensure the rectangle shapes will change to fit the window size and soundtrack. The spectrum values range from 0 to 255. Normalize this value to a scale range from 1 to 2 by / 255 and + 1, which ensures that the mini is 1 and the max scale is 2. The scale changes the rectangle dimension by scaling. </p>

[Link to Chatgpt website](https://chatgpt.com/share/d71e7978-f73b-4868-aa05-9117044d1be5 "My chat")


