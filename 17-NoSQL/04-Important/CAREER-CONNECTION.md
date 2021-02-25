# Career Connection

## Career Connection

![Career Services Logo](./assets/cs_logo.png#right)

Now you're learning a cutting edge technology that is being quickly adapted by enterprise companies across the globe&mdash;NoSQL databases! We learned MongoDB along with an ORM called Mongoose, but there are also others out there which we'll look at in this section.

But first, a little more about the professional use cases of a NoSQL database. Databases like MongoDB are being adopted by enterprise companies as a quick and easy way to spin up new applications. However, they are not without their criticisms. For example:

- **SQL databases are more mature**

  - It's not wrong. SQL databases have been around a long time and they are reliable and we know they work. So why change it? Arguably, a SQL database is not the right solution to every problem.

- **Building indexes is slow**

  - If you have a large number of documents in a NoSQL database, the first build of an index will be very slow.

- **Repetition of data**

  - In SQL, you can create a table of, let's say, `authors` and `books`, which you relate to a `bookOwner` table. In a NoSQL database, you essentially have to add the author and book to each owner that owns that book, meaning you can end up with a lot of duplicate entries.

- **ACID vs. BASE**
  - This one is tricky, so bear with us. ACID stands for Atomic, Consistent, Isolation, and Durable; and it covers the guarantee you get with most SQL databases. It ensures that data you write have to wait for the data to hit the storage disk before returning a successful completion response to the client. Great, right? This way, you know for sure that your data is stored and written&mdash;but if that data takes a while to write to the disk, it means the client may wait a while for the response. So in comes NoSQL databasing with BASE&mdash;Basically Available, Soft State, and Eventually Consistent&mdash;which apart from being quite a terrible acronym, doesn't mean a whole lot. But eventual consistency is faster because the application doesn't wait to see if the write persisted. If the data store captures the write but before it is persisted to disk, it returns succcess to the client and moves on to the next operation. The gain? Performance advantage and experience for the client, but at the cost of losing the data in an error condition.

There are scores of articles on SQL vs. NoSQL databases on the internet. But the fact remains&mdash;they do their job, they do it well, and people like them. 

NoSQL databases have many advantages, such as the following:

- They can handle large volumes of structures and semi-structured data.

- They're great for agile sprints, quick iteration, and frequent code modifications.

- They make it easy to implement object-oriented coding paradigms such as ES6 JavaScript class syntax.

- They're efficient and cost-effective.

All right&mdash;this should give you some meat to take with you into an interview. Just remember that if you're going into a technical interview, it helps to know the types of databases the employer uses and to have some opinions on what you think is good orbad, and _why_.

### Look to the Future

Take some time now to envision your future as a full-stack web developer. Complete the following task so you can be ready to get a job in just a few months:

It helps to know what the current discussion is around topics you'll interview on. This way, you know what the development community is agreeing on, disagreeing about, etc. This week, we encourage you to find and read 2-3 articles about SQL and NoSQL databases and the arguments surrounding the discussion. Here is one you can get started with: [SQL vs. NoSQL: How Are They Different and What Are the Best SQL and NoSQL Database Systems?](https://www.xplenty.com/blog/the-sql-vs-nosql-difference/)

Best of luck and see you next week! Don't forget the technical problems below.

### Technical Interview Preparation

Many companies use algorithm questions during the technical interview. We strongly recommend that you practice these. Doing so will prepare you to handle some of the most common questions in an interview or promotion discussion.

Please refer to the class repository to find these algorithms:

- Coding Algorithm #1: Valid Brackets

- Coding Algorithm #2: Min Increment for Unique

- Coding Algorithm #3: Peak Finder

For practice in a live, interview-style IDE, complete the following algorithm challenge. The solution will be discussed in this week’s Virtual Class (Recommended).

Once you start, you'll have seven days to complete it. After the seven days has elapsed, the challenge will close.

- CodeSignal Algorithm: [Word Tumble](https://app.codesignal.com/public-test/W38trZ3bQdqpabN2X/SvJ3vebQ5oLSJu)

![Career Services online events](./assets/online-events.png)

If you're interested in learning more about the technical interviewing process and practicing algorithms in a mock interview setting, attend one of our [upcoming workshops](https://careerservicesonlineevents.splashthat.com/)!
