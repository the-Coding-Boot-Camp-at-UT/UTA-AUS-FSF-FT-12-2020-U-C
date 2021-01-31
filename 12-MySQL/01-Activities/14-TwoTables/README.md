# **Instructions**

* When dealing with big databases, it is very likely that you will have to work with two or more datasets that are related, but which have some degree of separation between them. In this case we have a table of the top 5000 songs and a table of the top 3000 albums.

* It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist's song and album made it into the charts at the time of their release.

  * HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some thought before having to rely upon external info.

  * HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

* Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.

Expected input:
```
queen
```

Expected output:
```
18 matches found!
1.) Year: 1974 || Album Position: 1923 || Artist: Queen || Song: Killer Queen || Album: Sheer Heart Attack
2.) Year: 1976 || Album Position: 907 || Artist: Queen || Song: Bohemian Rhapsody || Album: A Day At The Races
3.) Year: 1976 || Album Position: 907 || Artist: Queen || Song: Somebody to Love || Album: A Day At The Races
4.) Year: 1977 || Album Position: 492 || Artist: Queen || Song: We Are the Champions || Album: News Of The World
5.) Year: 1978 || Album Position: 852 || Artist: Queen || Song: We Will Rock You || Album: Jazz
6.) Year: 1978 || Album Position: 852 || Artist: Queen || Song: Bicycle Race || Album: Jazz
7.) Year: 1980 || Album Position: 484 || Artist: Queen || Song: Another One Bites the Dust || Album: The Game
8.) Year: 1980 || Album Position: 484 || Artist: Queen || Song: Crazy Little Thing Called Love || Album: The Game
9.) Year: 1982 || Album Position: 1426 || Artist: Queen || Song: Body Language || Album: Hot Space
10.) Year: 1984 || Album Position: 1172 || Artist: Queen || Song: Radio Ga Ga || Album: The Works
11.) Year: 1984 || Album Position: 1172 || Artist: Queen || Song: I Want to Break Free || Album: The Works
12.) Year: 1989 || Album Position: 1024 || Artist: Queen || Song: I Want it All || Album: The Miracle
13.) Year: 1991 || Album Position: 473 || Artist: Queen || Song: The Show Must Go On || Album: Greatest Hits II
14.) Year: 1991 || Album Position: 473 || Artist: Queen || Song: Innuendo || Album: Greatest Hits II
15.) Year: 1991 || Album Position: 1057 || Artist: Queen || Song: The Show Must Go On || Album: Innuendo
16.) Year: 1991 || Album Position: 1057 || Artist: Queen || Song: Innuendo || Album: Innuendo
```
