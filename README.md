#livinginthefuture

The page is intended as a rough window into how I see the role of the current and next generation of information techonology changing the relationship between the different actors in society (eg humans / state; employers / workers; creators / consumers; AI & technocracy / irrational humanity). Much of how I see this is inspired by [Paul Mason] (https://en.wikipedia.org/wiki/PostCapitalism:_A_Guide_to_our_Future). While he has an optimism as to the inevitability of the utopian future, which I don't share, I think it has a good chance if we work towards it. This stuff intrigues me - debate it with me sometime!

The original hypertext was incredibly well suited for its purpose (given the state of tech back then) - it was conceived for the communication of academic research (and thought), for which the concept of ```<a>``` links is almost perfect. Related to the links, but for smaller information, is the idea of information which appears floating on mouseover, ie tooltips, so I've reappropriated the link's ```title``` for this purpose, since in modern browsers it generates a tooltip. They should also be picked up by screenreaders..

#Features for the future:

I would have liked to use [Wikipedia] (https://en.wikipedia.org/wiki/Wikipedia) style tooltips (the ones used to point to cite notes, which include links within the floating text), but to code that from scratch requires some trickery I do not yet possess, and any implementation I've found which can handle links within the floating text seems to require a lot of library (whereas I was hoping to keep it simple).

I hoped to include a lazy loader for the youtube embed. There is obviously a considerable load-time saving when not waiting for the embed to load. But I've not yet found an implementation which worked for me..

The messy psuedo-script (```if screen.width <screen.height blah```) is a placeholder to toggle to a rendering schema optimised for portrait-mode screens. It will require the widths, etc hardcoded inline within the HTML to be replaced at ```onload```/ ```onresize```

The page relies heavily on ```vw```/```vh``` which are apparently not yet well supported (in Firefox and Android Chrome, they require 2017 versions)

The shadow on the pink text which is over the pink background goes a long way to increasing visibility. However, this won't be enough for those partially-sighted users who have difficulty focusing. I realised only after designing this colour scheme, though (and falling for it;) that this colour scheme and visual accessibility are in direct conflict. I've tried to consider visual accessibility by including a white-text option. and I'm banking on the assumption that, if a user is interested in the text, then they will scroll down so that the first three paragraphs (and therefore the white-text button) are on-screen.
A future version, however, should marry the requirements of style and accessibility more happily..

