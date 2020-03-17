/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


/*** 
  squotesRay and oquotesRay are arrays of quotes from 
  ts Always Sunny in Philadelphia and The Office 
  (two fantastic television shows)
***/

let squotesRay=[
  ["I'll just regress, because I feel I've made myself perfectly redundant.",
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 5',
  '8'],
 ['Just get a job? Why don’t I strap on my job helmet, and squeeze down into a job cannon, AND FIRE OFF INTO JOBLAND, WHERE JOBS GROW ON JOBBIES?!!!',
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 3',
  '7'],
 ['Do wasps make honey?',
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 5',
  '5'],
 ['I eat stickers all the time dude!',
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 5',
  '2'],
 ["Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I'm hot... Taxes, they'll be lower. Son. The Democratic vote for me is right thing to do Philadelphia. So do.",
  'Dennis Reynolds',
  "It's Always Sunny in Philadelphia",
  'Season 2',
  '8'],
 ["Parenting is pretending you know what you're talking about, then jamming it down their throat!",
  'Mac',
  "It's Always Sunny in Philadelphia",
  'Season 6',
  '12'],
 ["Yeah, well, we won't get got though. We gonna get. See, Dee, people like us, we don't get got. We go get.",
  'Dennis Reynolds',
  "It's Always Sunny in Philadelphia",
  'Season 9',
  '4'],
 ["Dude, it's amazing. Look at this. Bro, you could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 3',
  '1'],
 ["If animals have taught me anything, it's that you can easily die and very quickly under a bus and on the side of the road.",
  'Charlie Kelly',
  "It's Always Sunny in Philadelphia",
  'Season 6',
  '11'],
 ['I do not appreciate being paraphrased. I choose my words very deliberately.',
  "Mac",
  "It's Always Sunny in Philadelphia",
  'Season 5',
  '6']
]

oquotesRay=["Make friends first, make sales second, make love third. In no particular order.","Michael Scott (Steve Carell)","The Office","Season 6","The Delivery (2)","Well, it\'s love at first sight. Actually, it was... No, it was when I heard her voice. It was love at first see with my ears.","Michael Scott (Steve Carell)","The Office","Season 4","Goodbye, Toby (1)","No, I\'m not going to tell them about the downsizing. If a patient has cancer, you don\'t tell them.","Michael Scott (Steve Carell)","The Office","Season 1","Pilot (1)","Guess what, I have flaws. What are they? Oh I don\'t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I\'ll hit somebody with my car. So sue me.","Michael Scott (Steve Carell)","The Office","Season 4","Fun Run (1)","Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it\'s not like this compulsive need to be liked, like my need to be praised.","Michael Scott (Steve Carell)","The Office","Season 4","Fun Run (1)","Sometimes I\'ll start a sentence and I don\'t even know where it\'s going. I just hope I find it along the way.","Michael Scott (Steve Carell)","The Office","Season 5","The Duel","Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.","Michael Scott (Steve Carell)","The Office","Season 2","The Fight","I guess I’ve been working so hard, I forgot what it’s like to be hardly working.","Michael Scott (Steve Carell)","The Office","Season 7","Training Day","I love inside jokes. I\'d love to be a part of one someday.","Michael Scott (Steve Carell)","The Office","Season 3","The Convention","I say dance, they say \'How high?\'","Michael Scott (Steve Carell)","The Office","Season 6","St. Patrick\'s Day","I don\'t hate it. I just don\'t like it at all and it\'s terrible.","Michael Scott (Steve Carell)","The Office","Season 4","Launch Party (1)","I\'m not superstitious but I am a little stitious.","Michael Scott (Steve Carell)","The Office","Season 4","Fun Run (1)","The worst thing about prison was the dementors.","Michael Scott (Steve Carell)","The Office","Season 3","The Convict","I am Beyonce, always.","Michael Scott (Steve Carell)","The Office","Season 6","Body Language","Who is Justice Beaver?","Dwight Schrute (Rainn Wilson)","The Office","Season 7","Todd Packer","Fool me once, strike one. Fool me twice, strike three.","Michael Scott (Steve Carell)","The Office","Season 3","Traveling Salesmen","There is no such thing as an appropriate joke, that\'s why it\'s a joke.","B.J. Novak","The Office","Season 2","Sexual Harassment","Powerpoints are the peacocks of the business world; all show, no meat.","Dwight Schrute (Rainn Wilson)","The Office","Season 8","Special Project","I never thought I\'d say this, but I think I ate too much bone marrow.","Dwight Schrute (Rainn Wilson)","The Office","Season 9","Finale","I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers.","Michael Scott (Steve Carell)","The Office","Season 6","Happy Hour","Who says exactly what they’re thinking? What kind of a game is that?","Kelly Kapoor (Mindy Kaling)","The Office","Season 4","Money (2)","Don\'t ever, for any reason, do anything for anyone, for any reason, ever, no matter what. No matter where. Or who, or who you are with, or where you are going or... or where you\'ve been... ever. For any reason, whatsoever.","Michael Scott (Steve Carell)","The Office","Season 5","The Duel","It is St. Patrick\'s Day….It is the closest that the Irish will ever get to Christmas.","Michael Scott (Steve Carell)","The Office","Season 6","The Delivery (1)","I don\'t understand. We have a day honoring Martin Luther King, but he didn\'t even work here.","Michael Scott (Steve Carell)","The Office","Season 3","Grief Counseling","Abraham Lincoln once said that, \'If you\'re a racist, I will attack you with the North.\' And those are the principles that I carry with me in the workplace.","Michael Scott (Steve Carell)","The Office","Season 1","Diversity Day","They say that your wedding day goes by in such a flash that you\'re lucky if you even get a piece of your own cake. I say that\'s crazy. I say let them eat cake. Margaret Thatcher said that about marriage. Smart broad.","Michael Scott (Steve Carell)","The Office","Season 3","Phyllis\' Wedding","I’m an early bird and I’m a night owl. So I’m wise and I have worms.","Michael Scott (Steve Carell)","The Office","Season 2","Office Olympics","I feel like all my kids grew up and then they married each other. It\'s every parents\' dream.","Michael Scott (Steve Carell)","The Office","Season 9","Finale","You\'re a perfectly fine toilet... I\'m just an extraordinary piece of crap.","Dwight Schrute (Rainn Wilson)","The Office","Season 8","Trivia","Two weeks ago, I was in the worst relationship of my life. She treated me poorly, we didn\'t connect, I was miserable. Now, I am in the best relationship of my life, with the same woman. Love is a mystery.","Michael Scott (Steve Carell)","The Office","Season 3","The Job","Life is short. Drive fast and leave a sexy corpse. That\'s one of my mottos.","Stanley Hudson (Leslie David Baker)","The Office","Season 8","Tallahassee","The Civil War history industry has conveniently forgotten about the battle of Schrute Farms. Whatever. I\'m over it. It\'s just grossly irresponsible.","Dwight Schrute (Rainn Wilson)","The Office","Season 8","Gettysburg","I don’t have a lot of experience with vampires, but I have hunted werewolves. I shot one once, but by the time I got to it, it had turned back into my neighbor’s dog.","Dwight Schrute (Rainn Wilson)","The Office","Season 3","Business School","Learn your rules. You better learn your rules. If you don\'t, you\'ll be eaten in your sleep.","Dwight Schrute (Rainn Wilson)","The Office","Season 5","The Duel","I knew exactly what to do. But in a much more real sense, I had no idea what to do.","Michael Scott (Steve Carell)","The Office","Season 5","Stress Relief","Society teaches us that having feelings and crying is bad and wrong. Well, that’s baloney, because grief isn’t wrong. There’s such a thing as good grief. Just ask Charlie Brown.","Michael Scott (Steve Carell)","The Office","Season 3","Grief Counseling","Hi, I\'m Date Mike. Nice to meet me. How do you like your eggs in the morning?","Michael Scott (Steve Carell)","The Office","Season 6","Happy Hour","Ok, too many different words from coming at me from too many different sentences.","Michael Scott (Steve Carell)","The Office","Season 6","Mafia","Sometimes you have to take a break from being the kind of boss that\'s always trying to teach people things. Sometimes you just have to be the boss of dancing.","Michael Scott (Steve Carell)","The Office","Season 2","Booze Cruise","Presents are the best way to show someone how much you care. It\'s like this tangible thing that you can point to and say, ‘Hey, man, I love you this many dollars worth.’","Michael Scott (Steve Carell)","The Office","Season 2","Christmas Party","I would not miss it for the world. But if something else came up I would definitely not go. ","Michael Scott (Steve Carell)","The Office","Season 2","Office Olympics","Toby is in HR which technically means he works for corporate. So he\'s not really a part of our family. Also he\'s divorced... so he\'s not really a part of his family.","Michael Scott (Steve Carell)","The Office","Season 2","Sexual Harassment","If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.","Michael Scott (Steve Carell)","The Office","Season 6","Body Language","Jan is cold. If she was sitting across from you on a train and she wasn\'t moving, you might think she was dead.","Michael Scott (Steve Carell)","The Office","Season 2","The Client","I don\'t come up with this stuff, I just forward it along. You wouldn\'t arrest the guy who was just passing drugs from one guy to another.","Michael Scott (Steve Carell)","The Office","Season 2","Sexual Harassment","Friends joke with one another. \'Hey, you\'re poor.\' \'Hey, your momma\'s dead.\' That\'s what friends do.","Michael Scott (Steve Carell)","The Office","Season 4","The Deposition","It\'s better to be hurt by someone you know accidentally, than by a stranger on purpose.","Dwight Schrute (Rainn Wilson)","The Office","Season 4","Survivor Man","I\'m sinking a few, you know. Swish, swish, swish. Nothing but net. And their jaws just dropped to the floor. African-Americans!","Michael Scott (Steve Carell)","The Office","Season 1","Basketball","Any man who says he totally understands women is a fool. Because they are un-understandable.","Michael Scott (Steve Carell)","The Office","Season 3","Women\'s Appreciation","In the end, the greatest snowball isn\'t a snowball at all. It\'s fear. Merry Christmas.","Dwight Schrute (Rainn Wilson)","The Office","Season 7","Classy Christmas (1)","I have been trying to get on jury duty every year since I was 18 years old. To get and go sit in an air-conditioned room, downtown, judging people, while my lunch was paid for. That is the life.","Stanley Hudson (Leslie David Baker)","The Office","Season 7","Classy Christmas (1)"]

/***
  These two for loops run through the two respective arrays 
  and add quote objects that contain the quote, the source (speaker), 
  the show title, the season, and the episode name and or number
***/

  let quotes=[]
  for(x=0; x<squotesRay.length; x+=1){
    quotes.push({quote: squotesRay[x][0], source: squotesRay[x][1], show: squotesRay[x][2], season: squotesRay[x][3], episode: squotesRay[x][4]})
  } ///seems silly --> make the sunny array have objects with these properties
  console.log(quotes)
  for(x=0; x<oquotesRay.length; x+=5){
    quotes.push({quote: oquotesRay[x], source: oquotesRay[x+1], show: oquotesRay[x+2], season: oquotesRay[x+3], episode: oquotesRay[x+4]})
  }
  console.log(quotes)

/***
  `getRandomQuote` selects a random quote object from the `quotes` array
***/

function getRandomQuote(){
  let ran=Math.floor(Math.random()*quotes.length)
  return quotes[ran]
}




/***
  `printQuote` changes the html in the `quoteBox` div of `index.html`
  to show the selected random quote. Conditionals are used to ensure 
  that the proper elements are added
***/

function printQuote(){
  q=getRandomQuote()
  console.log(q.quote)
  htmlstr=''
  htmlstr=`<p class="quote">${q.quote}</p>`
  if(q.source!=null){
    htmlstr=htmlstr.concat(`<p class="source">${q.source}</p>`)
  }
  if(q.show!=null){
    htmlstr=htmlstr.slice(0,-4).concat(`<span class="citation">${q.show}</span></p>`)
  }
  if(q.season!=null && q.episode!=null){
    htmlstr=htmlstr.slice(0,-4).concat(`<span class="year">${q.season}: \"${q.episode}\"</span></p>`)
  }
  document.getElementById("quote-box").innerHTML = htmlstr;
  setButtonColor();
  printQuote();
}




/***
  `setBodyColor` and `setButtonColor` make the body background color random
  (idea borrowed from https://css-tricks.com/snippets/javascript/random-hex-color/)
  `runFuncs` runs both of them whether they are clicked or automatically run after 7 seconds
***/

function setBodyColor(){
  let color='#'+Math.floor(Math.random()*16777216).toString(16)
  console.log(color)
  document.body.style.backgroundColor=color
}

function setButtonColor(){
  let color='#'+Math.floor(Math.random()*16777216).toString(16)
  console.log(color)
  document.getElementById('loadQuote').style.backgroundColor=color
}
function runFuncs(){ //nik: this is an unnecessary function just call the set colors in print quote
  setBodyColor();
  setButtonColor();
  printQuote();
}
document.getElementById('loadQuote').addEventListener("click", runFuncs, false);
setInterval(runFuncs, 9000)


