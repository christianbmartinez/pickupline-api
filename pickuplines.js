const pickuplines = [
  'I hope you know CPR, because you just took my breath away!',
  'So, aside from taking my breath away, what do you do for a living?',
  'I ought to complain to Spotify for you not being named this weeks hottest single.',
  'Your eyes are like the ocean; I could swim in them all day.',
  'When I look in your eyes, I see a very kind soul.',
  "If you were a vegetable, you'd be a cute-cumber.",
  'Do you happen to have a Band-Aid? Cause I scraped my knees falling for you.',
  'I never believed in love at first sight, but that was before I saw you.',
  "I didn't know what I wanted in a woman until I saw you.",
  "I was wondering if you could tell me: If you're here, who's running Heaven?",
  'No wonder the sky is gray, all the color is in your eyes.',
  "You're like a fine wine. The more of you I drink in, the better I feel.",
  "You've got a lot of beautiful curves, but your smile is absolutely my favorite.",
  'Are you as beautiful on the inside as you are on the outside?',
  "If being sexy was a crime, you'd be guilty as charged.",
  "I was wondering if you're an artist because you were so good at drawing me in.",
  'Do you have a map? I just got lost in your eyes.',
  "I'd like to take you to the movies, but they don't let you bring in your own snacks.",
  'You know what you would look really beautiful in? My arms.',
  'I would never play hide and seek with you because someone like you is impossible to find.',
  "Are you a magician? It's the strangest thing, but every time I look at you, everyone else disappears.",
  "I think there's something wrong with my phone. Could you try calling it to see if it works?",
  "Hi, I just wanted to thank you for the gift. (pause) I've been wearing this smile ever since you gave it to me.",
  "Are you an electrician? Because you're definitely lighting up my day/night!",
  "I've heard it said that kissing is the language of love. Would you care to have a conversation with me about it sometime?",
  'I always thought happiness started with an h, but it turns out mine starts with u.',
  "If you were a song, you'd be the best track on the album.",
  'On a scale of 1 to America, how free are you tonight?',
  'You know, I always thought that Disneyland was the happiest place on Earth, but that was before I got a chance to stand here next to you.',
  'Want to go outside and get some fresh air with me? You just took my breath away.',
  "If you were a taser, you'd be set to stun.",
  "If you were a Transformer, you'd be Optimus Fine.",
  "Is your name Google? Because you have everything I'm searching for.",
  'Do you ever get tired from running through my thoughts all night?',
  'Your hand looks heavy—can I hold it for you?',
  'Are you a time traveler? Because I absolutely see you in my future.',
  'Do you know what my shirt is made of? Boyfriend material.',
  "I must be in a museum because you're a piece of art.",
  "I can't tell if that was an earthquake, or if you just seriously rocked my world.",
  'I just had to tell you, your beauty made me truly appreciate being able to see.',
  "If you were a fruit, you'd be a fine-apple.",
  'The sparkle in your eyes is so bright, the sun must be jealous.',
  "If I had a nickel for every time I saw someone as beautiful as you, I'd still only have five cents.",
  "If beauty were time, you'd be eternity.",
  'I think the only way you could possibly be more beautiful is if I got to know you.',
  "I don't know which is prettier today—the weather, or your eyes.",
  'I swear someone stole the stars from the sky and put them in your eyes.',
  'In my opinion, there are three kinds of beautiful: Cute, pretty, and sexy. Somehow, you manage to be all three.',
  "I'm not usually religious, but when I saw you, I knew you were the answer to my prayers.",
  "(Hold out your hand) Hey, I'm going for a walk. Would you mind holding this for me?",
  'Do you believe in love at first sight, or should I try walking by again?',
  "I'm really glad I just bought life insurance, because when I saw you, my heart stopped.",
  "I'm not a photographer, but I can definitely picture us together.",
  "Would you mind giving me a pinch? You're so cute, I must be dreaming.",
  'Wow, when God made you, he was seriously showing off.',
  'Excuse me, do you have the time? I just want to remember the exact minute I got a crush on you.',
  "Kiss me if I'm wrong but, dinosaurs still exist, right?",
  "You know, I had a pickup line ready to go, but you're so hot it just left my mind.",
  'When I text you goodnight later, what phone number should I use?',
  "I saw you walking by and I had to come say hello. I love your style. My name's (your name).",
  "I'm not currently an organ donor, but I'd be happy to give you my heart.",
  'I was going to say something really sweet about you, but when I saw you, I became speechless.',
  "You know, I believe that honesty is the best policy, so to be perfectly honest, you're the sexiest man I've ever seen.",
  "I'd say, God bless you, but it looks like he already did.",
  'You must be a hell of a thief, because you managed to steal my heart from across the room.',
  "There must be something wrong with my eyes—I can't seem to take them off of you.",
  "If you let me borrow a kiss, I promise I'll give it right back.",
  "My friends bet me I couldn't talk to the prettiest girl in the bar. Want to use their money to buy some drinks?",
  "Trust me, I'm not drunk; I'm just intoxicated by you.",
  'I seem to have lost my number—can I have yours?',
  "I was just trying to buy a drink here, but you're very distracting.",
  "You see my friend over there? S/he wants to know if you think I'm cute.",
  "I was going to call you beautiful, but then I realized I don't have your number yet.",
  'You: Are you good at math? Them: No (or Yes) You: Me neither (or Me too). But the only number I care about is yours.',
  "Excuse me, I don't mean to intrude, but you owe me a drink (pause), because when I saw you, I dropped mine.",
  'Are you any good at boxing? Because you look like a knockout.',
  "I wish I'd paid more attention to science in high school, because you and I've got chemistry.",
  'Hi, my name is (your name), but you can call me tonight or tomorrow.',
  "Do I know you? (pause) Oh, sorry, it's just that you look just like my next girlfriend.",
  'If I were to ask you out on a date, would your answer be the same as the answer to this question?',
  'Hey, do you mind if we take a picture together? I just want to show my mom what my next girlfriend looks like.',
  'You look like you know how to have a good time. Been on any adventures lately?',
  "You know, I'm actually terrible at flirting. How about you try to pick me up instead?",
  "I'm not sure what it is yet, but something about you seems really interesting.",
  'Do you have a name, or can I just call you mine?',
  'I seem to have lost my phone number. Can I have yours?',
  "You're so fine, you made me forget my pickup line.",
  'Did we go to school together? I could swear we had chemistry.',
  'Want a raisin? No? How about a date?',
  "What's your favorite drink? I'm asking so I know what to buy you on our first date.",
  'Have we met? Because you look exactly like my next boyfriend/girlfriend/partner.',
  'Do you have a map? Because I just got lost in your eyes.',
  'You owe me a drink. Because when I saw you, I dropped mine.',
  'They say nothing lasts forever, so will you be my nothing?',
  'Want to go outside for some fresh air? You took my breath away.',
  "If you were a song, you'd be the best single on the album.",
  'Do you believe in love at first sight, or should I walk by again?',
  'I hope you know CPR, because you are taking my breath away.',
  "It's a good thing I have my library card, because I am totally checking you out.",
  'Are you a time traveler? Because I see you in my future.',
  'Your hand looks lonely. Can I hold it for you?',
  'I believe in following my dreams. Can I have your Instagram?',
  "Is your name Google? Because you're everything I've been searching for.",
  'Did the sun come out, or did you just smile at me?',
  "Hey, my name's Microsoft. Can I crash at your place tonight?",
  'Did your license get suspended for driving all those guys crazy?',
  "Are you a broom? Because you've swept me off my feet.",
  'Do you have a Band-Aid? I scraped my knee falling for you.',
  "I'm learning about important dates in history, wanna be one of them?",
  "Are you from Tennessee? Because you're the only 10 I see.",
  "Wanna touch my shirt? It's made of boyfriend/girlfriend/partner material.",
  "Are your parents bakers? Because you're a cutie pie.",
  "If you and I were socks, we'd make a great pair.",
  'Did it hurt when you fell from heaven?',
  "Aren't you tired? From running through my mind all day?",
  "If I could rearrange the alphabet, I'd put U and I together.",
  'Well, here I am! What are your other two wishes?',
  "Are you a parking ticket? You've got fine written all over you.",
  "If you were a chicken, you'd be im-peck-able",
  "Did you just come out of an oven? Because you're too hot to handle.",
  'They say dating is a numbers game, so can I get yours?',
  "Know what's on the menu today? Me 'n u.",
  "I was feeling a little off today, but you've turned me on again.",
  "Is your dad a boxer? Because you're a knockout.",
  "Are you a loan? Because you've got my interest.",
  'Are you French? Because Eiffel for you.',
  'Are you my appendix? Because this feeling in my stomach makes me want to take you out.',
  "If you were a triangle, you'd be acute one.",
  "I'm new in town, can I have directions to your house?",
  'Are you a magician? Because when I look at you, everyone else disappears.',
  "Wow, I've been blinded by your beauty. I'll need your name and number for insurance purposes.",
  "If I were a cat, I'd spend all nine of my lives with you.",
  "I thought this was a [restaurant/bar/etc.] but it must actually be a museum, because you're a work of art.",
  'What is it like to be the most gorgeous person in this room?',
  "I don't know your name, but I'm sure it's just as beautiful as you are.",
  "Did you do something to my eyes? I can't seem to take them off you.",
  "Are you an electrician? Because you're lighting up my day.",
  "(At a bar) I'm not drunk, I'm just intoxicated by you.",
  'Do you have a sunburn, or are you just always this hot?',
  "I'm not an organ donor, but I'm ready to give you my heart.",
  'Anyone who says Disneyland is the happiest place on earth has clearly never stood next to you.',
  "I'd say God bless you, but it looks like he already has.",
  "Are you a charger? Because I'm dying without you.",
  "I've been told I'm good with numbers, how about you give me yours so I can prove it?",
  "You're so sweet you're giving me a toothache.",
  "I'm sorry, were you talking to me? (They say no). Well, would you like to?",
  "I can see that you're gorgeous, but what else should I know about you?",
  'Can I have your picture so I can show Santa what I want for Christmas this year?',
  "On a scale of 1 to 10, you're a 9 and I'm the 1 you need.",
  "I'd never play hide and seek with you, because someone like you is impossible to find.",
  'Do you know what the Little Mermaid and I have in common? We both want to be part of your world.',
  'I think someone must have stolen the stars and put them in your eyes.',
  'I saw you walking by and I just had to come say hello.',
  "You know what you'd look beautiful in? My arms.",
  'The sparkle in your eye is so bright, the sun and stars must be jealous.',
  'You look like you know how to have a good time! Been on any fun adventures lately?',
  "(At a bar or other public place) You see my friend over there? He/she/they want to know if you think I'm cute.",
  'I think I saw you on Spotify, as the hottest single of the year.',
  'When God made you, he was really just showing off.',
  'Do you have the time? I want to remember the exact minute I fell for you.',
  "If you were words on a page, you'd be fine print.",
  "Not to be dramatic, but I think you're the answer to my prayers.",
  "I think there's something wrong with my phone. Your number's not in it.",
  "You're so beautiful you made me forget my pickup line.",
  'When I text you good morning tomorrow, what number should I text?',
]

module.exports.pickuplines = pickuplines
