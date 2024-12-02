# Breaking-Mad

## Deployment:https://alexaspinalldev.github.io/Breaking-Mad/

![An image of our front page](<assets/images/Front Page.PNG>)

## Am I Responsive Image:
### Home Page Check
![Image of Home Page Responsive check](<assets/images/Am I responsive Image.PNG>)
### Quote Page Check
![Image of Quote Page Responsive check](<assets/images/Am I responsive quote page image.PNG>)
## Introduction:
A generator of inspirational images from the twisted mind of Vince Gilligan. We sort to end stress and other negative feelings through our innovative combination of calming inspirational backdrops, and the art of writing found in the Breaking Bad scripts.
We are looking to tap into the entrepreneurship of fictional mob bosses and anti-hero's to inspire the next generation to succeed in all of their endeavours.

## Key objectives:
- Create an array of images that can be sorted through and displayed randomly to the user
- Create a series of legible quotes from the script of Breaking Bad that reminds the user of the importance of art
- Create a functional website that is accessible and simple to use

## User Stories
![Image of quote API user story](<assets/images/Quote API.PNG>)

- We wanted to make sure our users could be greeted with a randomised new source of inspiration from the show in the form of a quote

![Image of our inspirational image user story](<assets/images/Source of Inspiration.PNG>)

- We wanted our users to have access to an array of inspirational, and calming images to offer them relief from stress

![Image of our testing user story](assets/images/Testing.PNG)

- Our website had to pass all necessary tests

![Image of our main page layout user story](<assets/images/Create main page and layout.PNG>)
![image of our main page interactivity user story](<assets/images/Main Page Interactivity.PNG>)

- We knew our website had to be accessible, responsive and legible for all users, including easily recognisable buttons to start the calming process

![Image of our Deploy Site User Story](<assets/images/Deploy Site.PNG>)

- For our website to be accessible to customer's it had to be deployed so they could access it.

![Image of our ReadME User Story](assets/images/Read.ME.PNG)

- This was less for the users but we knew our course facilitators would want to see a lovely ReadME







## WireFrame:

### The wireframe of our home page
![Here is a wireframe of our homepage](/assets/images/homepagewireframe.png)
- We liked the interactivity of a front and center button taking us to our main quotation generator


### The end result
![image of our home Page](<assets/images/Home Page.PNG>)

### The wireframe of our Quotes Page
![Here is a wireframe of our main motivational quotes page](/assets/images/generatequotepage.png)
- We wanted our quote generator to be clear and concise on the page, with nothing to distract from it's calming powers

### The end result
![Image of our Front Page](<assets/images/Front Page.PNG>)



## AI Image Generation

- We used ChatGPT's image generator DALLE, and AI Image Generator to generate our calming images, which through the power of AI computation enables them to be more calming and inspirational.
- Image optimser Squoosh was used where the images weren't optimal
 
- Keywords like 'vivid' 'bright' 'warm' 'serene' were used for the prompts

### Below are some of our images used with examples of prompts:

![AI image of a Forest](<assets/images/bg images/Forest.webp>)
- "A serene redwood forest scene with towering, ancient redwood trees reaching towards the sky. The forest floor is lush with green ferns and soft moss"
  
![AI image of a sunset](<assets/images/bg images/Landscape Sunset.webp>)
-  
![AI image of a beautiful waterfall](<assets/images/bg images/Waterfall.webp>)
- "A breathtaking scene of a lush waterfall cascading down a cliff surrounded by a dense tropical rainforest. The waterfall is framed by vibrant green forest"

![AI image of a mountain range](<assets/images/bg images/Mountain Range.jpg>)
-
![AI image of a nice swingset](<assets/images/bg images/Swingset landscape.jpg>)
-
![AI image of fish underwater](<assets/images/bg images/Underwater Scene.webp>)
- "A vivid underwater scene showcasing a vibrant coral reef teeming with life. The reef features a variety of colorful corals in shades of orange, pink"


## Website Features and Functions

- This website includes two webpages;
one home-page
one quote generator page

- This website includes several interactive buttons
- This website incldues an array of quotes and images, which can all be viewed at random
- This website incldues the power to calm oneself during stressful moments

## Features and Functions

### Javascript

There are three main functions to the site's interactivity. The main quote-retrieving function includes the other functions as children.

### Quote API function
![Image of JS Quote array Function](<assets/images/Quote API Function.PNG>)
- The first function accesses the chosen API, retrieving a random quote from Breaking Bad. The payload is parsed into JSON then formatted into an element on the page. This can be independently triggered for the user to choose their own background if they are satisfied with the quote.

### Image Array Function
![Image of JS Image Array Function](<assets/images/Image Array function.PNG>)
- The second function cycles through an array of AI-generated background images.

### Quote Position Randomiser Function
![Image of JS quote randomiser position function 1](<assets/images/Quote position randomiser function 1.PNG>)
![Image of JS quote randomiser position function 2](<assets/images/Quote position randomiser function 2.PNG>)
-The third function uses a random generator and a pair of switch statements to assemble an array of classes to position the text over the image. The arrays are applied and removed with for...let loops. 

### Technologies used
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- DALLE via ChatGPT

The API was accessed from this site: https://breakingbadquotes.xyz/

#### AI Used:

- DALLE-2: https://openai.com/index/dall-e-2/
- ChatGPT: https://chatgpt.com/
- Squoosh: https://squoosh.app/
- AI Image Generator: https://deepai.org/machine-learning-model/text2img


### Testing:
### HTML Test for home page
![Here is our testing pass certificated from HTML testing verification for our home page](/assets/images/Home%20Page%20Testing.png)
### HTML Test for quote page
![Here is our testing pass certificated from HTML testing verification for our quote page](/assets/images/Quote%20Page%20Testing.png)
### CSS Test
![Here is our testing pass certificated from HTML testing verification for our CSS](/assets/images/CSS%20testing.png)
### JShint Test
![Image of our JSHint test](<assets/images/JSHint testing.PNG>)
- Please note that these 23 warnings are all browser related and the code is fully working without errors
Credits:
- Web Designer Somerset Dromgoole: https://github.com/Samersetred

- Web Designer Ben Williams: https://github.com/BenWilliams89

- Web Designer Alex Aspinall: https://github.com/alexaspinalldev

-
