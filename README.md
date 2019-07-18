# README

## Stars


*****************************************************************************

								README - STARS

*****************************************************************************

 
 
 
 
 
 Hi! This is the overview for my Stars Project - the README.
 
 
 Overall, I tried to structure my Stars project in a way that could be reuseable when possible.
 This included factoring out code for KDTrees, DimensionPoints - which was the interface for the
 Star class - the REPL, and the CSVParser. I kept everything particularly specific to Stars in
 the stars package, while the other ones had their own areas of operation. I used imports to
 access it, and doing so allowed the code to be more organized in their purposes.
 
 In terms of design, the interface DimensionPoint was the interface of Star. This interface was 
 used whenever there was a generalized "Dimensional Point" in a class. For instance, my KDTree 
 used DimensionPoint as its base, so that it wasn't limited to Stars. This made the code more
 reusable for different projects. Such factoring out also applied to the REPL and the CSVParser.
 My KDTree algorithms were also designed in a way that allowed us to eliminate large chunks of
 datapoints at a time, improving runtime. This followed the general algorithms suggested in the
 Stars handout.
 
 Another important design choice was the design of the REPL. While the REPL did refer specifically 
 to a lot of stars-specific things, it was generalized so other projects could also toss in their 
 REPL into the loop, so the REPL could evaluate the commands adapting to what was actually given.
 This can come into play as more projects use this system.
 
 You can build the program by running mvn package in the directory, and ./run or ./run --gui (optional
 --port=PORT). This launches the program. The GUI works in junction with the REPL to read and evaluate
 files/commands. the commands stars <file> and neighbors/radius n x y z and neighbors/radius n "name" 
 are interpretable by the program. 
 
 Just a comment on testing; I included some tests that might vary based on the algorithm. For instance,
 the order in which two equidistant points are listed can change, but I still felt it was important
 to test for this to ensure it didn't have a bug on equidistant values aas such. We can run tests by 
 running mvn package, which will automatically run JUnit tests. For System tests, run cs32-test <path>
 where path is ./tests/student/stars/* or ./tests/ta/stars/* depending on intention.
 
 My Gui might be a little incomplete, but I was told it wasn't a big deal since it was the first project.
 Just to note some things though, my selector between coordinates and name doesn't actually change 
 behavior. I would ideally add a variable that keeps track of this entry and only processes it if it 
 was correct. Also, when running run with gui, it sometimes doesn't quit on a Cntrl D input. I'm not too sure 
 how Cntrl D reacts with a gui, but I'd rather report it to be safe!
 
 
 Thanks!
 
 
 
 
 

DESIGN QUESTIONS:

Suppose that in addition to "neighbors" and "radius" you wanted to support 10+ more commands. 
How would you change your code - particularly your repl parsing - to do this? Don't worry about 
algorithmic details with the k-d tree, we're interested in the design.

I would change it by making the parsing and evaluating more streamlined. I could theoretically
just have a bunch of if statements in the REPl, checking for each one. It would be unelegant
to have 10+ if statements in the loop, so I could potentially create a class that takes in a 
command and interprets the behaviour asked. This could benefit the neatness and the understandability
of the program, since the REPL will not be crowded.



What are some problems you would run into if you wanted to use your k-d tree to find points that 
are close to each other on the earth's surface? You do not need to explain how to solve these problems.

On the earth's surface, things aren't as simple. This is largely in part due to the curvature of the 
planet, and the fact that 3D location isn't necessarily the only issue to compare. Another problem
could be the general k-d tree algorithm, where splitting is not as easy since, once again, it is not 
strictly 2D or 3D. This can lead to errors in this algorithm/inconsistencies. Another issue is taking
into account the surface level changes (mountains, etc.) of the earth, if this is of interest.



Your k-d tree supports most of the methods required by the Collection interface. What would you have to
 add/change to make code like Collection<Star> db = new KDTree<Star>() compile and work properly?
 
 This means we would be making KDTree use polymorphism to fit within the Collection<Star> "entity". We
 would have to change certain things though. For instance, Collection doesn't take into account the
 order of the items, whereas the KDTree relies a lot on order. Thus there are variables and information
 that we will need to keep track of within the KDTree if we modified it so. In addition, we would also have
 to change the fact that KDTree is unique to Stars, and not DimensionPoints. Overall, we might have to make
 a lot of things fit Collection to achieve this design. To make it work properly, we need to keep track of
 more information within the class itself, not just individual nodes interacting. It would have to implement
 all the functions as well, so in general, it could have more functionality
 
 
 
 
 
 
 **********************************************************************************************************
 

## Autocorrect


*****************************************************************************

							README - AUTOCORRECT

*****************************************************************************

Hi,

Here is an overview of my Autocorrect Project as a README!

Running program: in projects folder containing java files, call "mvn package"
then run ./run in the command line. For gui usage, use ./run --gui (optional,
having --port=<portnum>). Find site on localhost with port number and 
/autocorrect.

Running Tests: JUnit tests are run when calling "mvn package", or can be 
called with "mvn test". System tests I created can be run using:
cs32-test ./tests/student/autocorrect/* in project folder.

Design:
To begin, I had an AutocorrectREPL class that contained the repl logic for the
autocorrect methods. This contained knowledge on how to parse the commands
inputted and evaluate them accordingly. It handled the settings for the repl
as well, such as prefix state. These were passed into more detailed autocorrect
class methods when ac was called.

In general, I designed my autocorrect around the Trie and the TrieNode classes.
I have a Trie class that keeps track of the root of the trie, and contains
methods that require us to iterate through a part of the trie, whether to add
words or to access them. The TrieNode class was the specific container for 
the information in each node of the trie, and we used this to store/access
all the information. This was the Trie/TrieNode overview.

I also used parsing from the FileWordsReader class to process the text files.
I cleaned the words and stored them for use in the SuggestionGenerator class.
This was where I used the trie built and the line given to find suggestions.
I designed this so that SuggestionGenerator handled the overall searching,
including prefix, whitespace, and led searches depending on settings. Once it
compiled all the suggestions, it stored all relevant information for the 
suggestion inside an instance of a class called "Suggestion", then sorted 
them based on either normal comparison methods (class SuggestionComparator 
compares 2 "Suggestions" based on specifications)) or smart comparison, 
(class SmartComparator, more on this later) again depending on settings.

I also had a gui portion added, which created spark links in main and had
handlers that were 1. able to display the page (AcHandler) and 2. able to
process suggestions from a line that was queried from textbox (Suggestions
Handler). I also used javascript in autocorrect.js to give real time 
responses!



Smart Ranking:
With my smart ranking, I tried to make things less singly defined and 
single-comparison-based. To do so, I made it so that all factors from
specification were factored in, weighed in different values. This helps
make suggestions more reasonable because sometimes bigram is not the best
and only way we should do ranking. For instance, current bigram tracking
keeps track of bigrams ignoring punctuation, so for all we know it could be
from different lines/sentences. This says less about a word. Now there is 
some more balance.

In addition, I tried adding another factor to the ranker. Since a lot of the
time, autocorrect helps when you're typing and make a mistake with the last 
letter because you mistyped. To factor this in, I heavily considered whether
the last letter was mistyped compared to a suggestion, based on location of
a letter on the standard keyboard. It weighed suggestions with letters to the
left and right of the typed letter heavily.

This is more optimal because a) often, as people type they correct the 
spelling errors they make. This means usually the prior letters aren't as
likely of being wrong as the most recent letter. This smart ranking looks
at this. and b) because it takes into account the realism of a typo. If
someone is familiar with typing, they probably wouldn't make the mistake of
typing z instead of p. This simply takes the most realistic suggestion!



GUI:
My gui follows the base specifications provided. I also added a couple other 
things that might contribute to usability. Of course, there are still more 
things to add, such as selecting and replacing text with an option shown,
but for now I implemented the following!

My gui clears the text shown on a hit of "Enter", clearing the suggestions
and allowing the user to start typing on a new, refreshed line.
My gui also hides the suggestions on a hit of Esc. Hitting Esc. again makes 
the options reappear.

Thanks!



Design Questions:

1. For two inputs on the same page, it would require a large frontend
change. Having two inputs on the same page means there should be two
textboxes and lists of suggestions, which we would be adding. We also
need to make sure the program is designed to allow for 2 different post
requests, maybe creating handlers for each. For 2 inputs on 2 pages,
it is challenging because the current system keeps track of only one
repl and all, in turn only one corpora-created trie. We will have to
change the backend to allows handlers to access different corpora in 
order to make this work. Thus both require changes to the program.


2. The Trie is structured in a way where it just contains nodes, and it is
the nodes themselves that know whether they contain a word or not (at least
my Trie is so). This means we will have to expand the Trie by n nodes, n
being the number of words in the trie. This makes sense because for each word,
it can now have a negation with theta. The Trie is structured so that each 
letter is contained in a node, and the letter contains a word if it is the 
last letter of that word. Thus, since this theta is added, we will now also
need to branch off from each node that stores a word and have the negated
word in a separate node branched from the previous word's node.

************************************************************************************



## Bacon


*****************************************************************************

							  README - BACON

*****************************************************************************

Hi,

Here is an overview of my Bacon Project as a README!

Running program: in projects folder containing java files, call "mvn package"
then run ./run in the command line. For gui usage, use ./run --gui (optional,
having --port=<portnum>). Find site on localhost with port number and 
/bacon. You can submit queries, click links, and view results using this gui.
Without the gui, you can just type "mdb <filename>" to load a sqlite3 file,
and then "connect "name1" "name2"" to query.

Running Tests: JUnit tests are run when calling "mvn package", or can be 
called with "mvn test". System tests I created can be run using:
cs32-test ./tests/student/bacon/* in project folder. NOTE: before running
tests, please create a directory /ltmp/dpark20/ and transfer the bacon.sqlite3
file from /course/cs032/data/bacon/ into this folder.

Some of my Pure Dijkstra's Tests (I have a method for this) were done with
the results of external resources and java libraries, which I used to get
my results. I compared these library results with the ones I had. I used the
java JUNG implementation found online (on Hipster Heuristic Search for Java
website) to compare results for a directed positive weights graph. Note I 
did this mostly by hand after I wrote my method, for testing.

Design:
To begin, I have a BaconREPL class that contained the repl logic for the
bacon methods. This contains knowledge on how to parse the commands
inputed and evaluate them accordingly. It handles the settings for the repl
as well, such as gui state. It manages loading a database with mdb (and 
autocorrect on this database if gui was used), and also took care of loading
the actors info based on name. Both these tasks are accomplished using SQL
databases, opening connections in mdb and finding info to begin with in the
connect method. This identifying info is then passed into more detailed bacon
class methods when connect was called. 

For connecting, most edge cases (connect to him/herself, non-existant actor, 
etc.) are handled early on. Once validated, I begin using an instance of the
Dijkstras class, which implements the interface GraphAlgorithms for algos
to be potentially used. Dijkstras class has the ability to either do pure
dijkstras on GraphEdges and GraphVertices (both interfaces for this generic
algorithm), or to do it based on an updating query. I designed everything
using interfaces (both algorithm itself and the nodes/edges in it) since it
is better to have a more reusable implementation. It also allowed me to 
easily separate actor and movie logic from the algorithm itself.

Dijkstras operates on GraphEdges and GraphVertices, which are interfaces
implemented by my Movie and Actor classes, respectively. The Movie and
Actor instances are fairly independent, and don't directly know about the
database or the dijkstras themselves. Instead, they are used within the 
query to specify the situation for Bacon. Thus, Actors and Movies are 
generic instances, and querying searches does not make any difference 
because they don't know they are being used in a Dijkstra algorithm, versus
another algorithm, for example.

My BaconREPL also uses a generic Path class implementation to keep track of
items found in our queries. This was a design choice to make keeping track
of the actual Vertex/Edge instances quicker.

Cache:
I have a temporary cache that I use to be able to access vertices
and edges that I have visited before. For instance, in Dijkstras I have
currVertices1, which maps IDs to the GraphVertex instance, which in turn 
stores all the info I need. I also have a Set of String arrays that lets
me keep track of names based on ID for both movies and actors. These both
help me not have to repeat similar queries every time. I also ensured that
the cache did not grow infinitely by clearing the contents before a search.
This ensures that at any query, the cache's capacity is capped at the 
amount it needs to finish the current graph. It also just makes sure the 
caches don't get too large. I use these caches when I revisit actors or 
when I am accessing the results to display. 

I also compared the cache usage time to the without-usage time, and queries
are much much faster because I have to access SQL less!

GUI:
My gui autocorrects on actor names by creating a text file whenever mdb is
called with a gui boolean. The AC of the gui is using this separate corpus.
My gui follows the base specifications provided. I also added a couple other 
things that might contribute to usability. Of course, there are still more 
things to add, such as selecting and replacing text with an option shown,
but for now I implemented the following!

Note, my infinite pages isn't fully functional, but I can display the actor
and movie pages based on their IDs. Their links don't work but if you type
the id replacing / with $ then it'll show a page. For Ex.
http://localhost:4567/bacon/actor/$m$0f5xn

My gui clears the text shown on a hit of "Enter", clearing the suggestions
and allowing the user to start typing on a new, refreshed line.
My gui also hides the suggestions on a hit of Esc. Hitting Esc. again makes 
the options reappear.
For both the Enter and Esc buttons, I also made them specific to the text
box that they were within. So, you can display one and hide the other.

The GUI code is in the guihandlers folder as well as in Main.


Thanks!



Design Questions:

1. I could make things more generic. For instance, I could make these algorithms
based on the interface, like the one I made. If other developers want to change
constraints, we could also modify the project so it's more open-ended in terms 
of what queries are made. For instance, if we let the developer input the SQL
query we can let them choose what conditions (like matching initials) they'd
like. We could also add something like a source of data interface that converts
a database type into the GraphVertices and GraphEdges needed for the algorithms.

2. We can add a source of data interface that has a universal way of converting
any database type into the data we need for the project. For instance, we can
generically read in a data source and turn it into a specified file type that we
can read and use in our program. We can also expand the program to simply use
the csv reader coded in Stars as well. 

3. We would likely have to change the way we query and make connections. This is
because the new connections potentially possible depend on the previous connection.
We can also create a kind of cache to make this a more efficient process. We can
also, ideally, restructure the program so that we can build the graph also 
checking the previous' date. For instance, since our algorithms have "prev" vertex
pointers, we might be able to use this and add factors that check whether the edge
to that vertex is valid or not (update our isValid function), also checking for 
year of release. We can check to make sure it is chronological and add to path.



