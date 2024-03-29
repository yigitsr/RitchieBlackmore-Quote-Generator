var quotes = [
    "I'm not into that Keith Richard trip of having all those guitars in different tunings. I never liked the Rolling Stones much anyway.",
    "I don't put myself on Jeff Beck's level, but I can relate to him when he says he'd rather be working on his car collection than playing the guitar.",
    "Pete Townshend used to crash chords and let the guitar feed back. He's overrated.",   
    "Playing a Fender is an art itself. They're always going out of tune.",   
    "I have never met one person who likes Grand Funk.",   
    "I can imagine that Rod Stewart likes giving autographs because he's pure showbusiness.",   
    "Learning to play with a big amplifier is like trying to control an elephant.",   
    "When you're around someone good, your own standards are raised.",   
    "I was impressed by Hendrix. Not so much by his playing, as his attitude - he wasn't a great player, but everything else about him was brilliant.",
    "I found the blues too limiting, and classical was too disciplined.",
    "Stevie Ray Vaughan was very intense. Maybe that's what caught everybody's attention. As a player, he didn't do anything amazing.",
    "The only way you can get good, unless you're a genius, is to copy. That's the best thing. Just steal.",
    "I don't see myself as such an important guitarist. ",
    "If you can play well in the studio, you can play well on stage.",
    "Jimi... He was the gov'nor and that's it. He was brilliant, wasn't he?",
    "Session work makes you more strict. You can't hit notes all over the place. You've got to make each one really count.",
    "When you're recording, if you're not really clean in your playing, it sounds like a mess.  ",
    "I can do the old hand vibrato just fine, but I like attacking the strings.",
    "I've always played every amp I've ever had full up, because rock and roll is supposed to be played loud. Also, that's how you get your sustain.",
    "I can never remember what I do even in the studio.",
    "I like leaping around on stage as long as it's done with class. None of this jumping up in the air and doing the splits.",
    "I can turn on some jazz guitarist, and he won't do a thing for me, if he's not playing electrically. But Jeff Beck's great to listen to.   ",
    "What's the point of re-releasing an album? The original sounded good, why change something about it?",
    "If a ballet dancer falls over, it's knowing how to get out looking clumsy that counts.",
    "When you've toured for about 10 years like me, you end up feeling like you're always waiting for somebody or something. The whole day is a drag.",
    "I feel like I own the stage.",
    "Simplicity is the key.",
    "When something is not good, it's bad. Period.",
    "Those record companies don't know what's happening at all.",
    "I'm not good enough, technically, to be a classic musician. I lack discipline.",
    "I criticize my own work pretty harshly.",
    "Everything I do is usually totally spontaneous.",
    "When I was 20, I didn't give a damn about song construction. I just wanted to make as much noise and play as fast and as loud as possible.",
    "Johnny Winter is one of the best blues players in the world. He's very underrated.",
    "I however don't go to clubs to show off and to be seen, and certainly not to make statements. I just want to be able to quietly watch a band.",
    "The cello is such a melancholy instrument, such an isolated, miserable instrument.",
    "But you have to give your whole life to a cello. When I realized that, I went back to the guitar and just turned the volume up a bit louder.",    
    "I was impressed by Hendrix. His attitude was brilliant. Even the way he walked was amazing.",
    "I'm very moved by Renaissance music, but I still love to play hard rock - though only if it's sophisticated and has some thought behind it.",
    "I never work out my leads. Everything I do is usually totally spontaneous. If someone says, 'That was good; play that again,' I'm not able to do it.",
    "I had given up the guitar between '75 and '78. I completely lost interest. I was sick of hearing other guitar players and I was tired of my tunes.",
    "I was always stuck in a musical no man's land.",
    "I think a lot about death more than life, because we're going towards death.",
    "Ian Gillan, Roger Glover and I wanted to be a hard rock band - we wanted to play rock and roll only.",
    "In my early days, I never used finger vibrato at all. I originally carved my reputation as one of the 'fast' guitar players.",
    "They used to complain at school that I looked out of the window for long periods of time - that sums up my life. I like to look out the window, do nothing, daydream.",
    "I don't use the twang bar anymore. It's become too popular.",
    "Hendrix inspired me, but I was still more into Wes Montgomery. I was also into the Allman Brothers around the time of those albums.",
    "Combing my hair doesn't make me a better musician.",

]

const _twBtn = document.getElementById('tweet-button')

function getQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML =  " * "+ quotes[randomNumber] + " * ";
}

const _author = 'Ritchie Blackmore'

function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${newQuoteSection.textContent} - ${_author} `
    window.open(twitterURL, '_blank')
}

_twBtn.addEventListener('click',tweetQuote)