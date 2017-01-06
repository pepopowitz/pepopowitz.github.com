---
title: SSIS Is Annoying
date: December 1, 2016
sortableDate: 2016/12/01
layout: article.jade
snippet: The project I'm currently working on requires a spreadsheet to be imported into the database. SSIS seemed like the logical solution to this. Then the honeymoon ended, and I found out SSIS was stealing my money and slowly poisoning me. Here are some other things SSIS does wrong!
url: blog/2016/12/ssis-is-annoying
draft: false
---

The project I'm currently working on requires a spreadsheet to be imported into the database. SSIS seemed like the logical solution to this.

But one month after dealing with SSIS, I am done with it. SSIS is like 85% awesome - but 15% "OMG I hate you". [I wrote a song about it, like to hear it here it goes](https://www.youtube.com/watch?v=QfzDUpB88x4&t=0m24s).

### SSIS doesn't work consistently across machines

The gist of the package we are building is that it takes an Excel spreadsheet, sanitizes the data, and upserts it into a database.

Some of the data was a little bit long. We built some columns to handle 512 characters in the database. Everything seemed like it was working fine.

But then one of the team members said it was failing for him, complaining about having to truncate data. We were all using the same spreadsheet, so this didn't make sense.

After some investigation, it turns out all of the columns coming from the spreadsheet were capped at 255 characters. That is strange in itself, but we'll get to that. But why was it not failing for me?

I still don't know the answer. Because everything in the package said that any value over 255 characters long should have been failing with an error. And that's what it was doing for my coworker - but not for me!

My bigger concern was this 255 character limit.

### SSIS and Excel are just the worst

SSIS thinks it is soooo smart. It can predict the widths of your columns for you, so you don't have to define them! Hooray!

Except it only predicts the widths based on the first 8 rows of data. And if there is nothing very long in a column, it will set its max length to 255.

This wouldn't be the worst thing, if you could change the columns it got wrong. But you can't! You can try...but it will just blow away your changes when it re-samples the spreadsheet.

#### But you can change the default sample size from 8 rows to something else!

Um...[in your registry](http://stackoverflow.com/a/8629065/1585069). That's a super fun way to make things fail differently for you than the rest of your team! And not a solution I plan on ever using.

#### Hey, didn't you read the rest of that answer? You can put a dummy row with long values in it, to trick SSIS!

Yup, you can. Then you have to alter your package to ignore it...and hope that no one accidentally deletes that row one day. This is the least bad option...but still bad.

One side-effect of adding the dummy row is that now every column that is more than 255 characters long goes from a `DT_WSTR(255)` type to a `DT_NTEXT` type. That makes sense.

### But SSIS is bad at determining the length of text

For all of those columns that were fine as a `DT_WSTR(255)` type, the `LEN(x)` function is gravy.

But for all of those columns that became `DT_NTEXT`, SSIS will suddenly start doubling the column lengths. After the crazy pills wear off, you might find [this](https://technet.microsoft.com/en-us/library/ms141797(v=sql.130).aspx) -

> If the argument passed to the LEN function has a Binary Large Object Block (BLOB) data type, such as DT_TEXT, DT_NTEXT, or DT_IMAGE, the function returns a byte count.

Ugh. I could see the argument for that with `DT_IMAGE`. But `DT_TEXT` and `DT_NTEXT`? They have "text" in the name! Why wouldn't I want the length of the text?

Turns out you have to do the conversion yourself. `LEN( (DT_WSTR, 600) X)` Thanks, SSIS!

### SSIS sucks for other reasons, too

Deployment is bad. Our timebox ended before we could figure out if we could run this all off of a server.

It crashes often - at least with Visual Studio 2015. Especially when you pull latest on the repo and it has to reload the project.

When it crashes, it leaves a process running (SSIS Debug Host) that you have to kill before you can run it again.

You can only have one Data Flow task open at one time. This is incredibly frustrating when you want to "copy" functionality across tasks.

### Conclusion

SSIS, consider me unimpressed.

My advice for someone who needs to import data from a spreadsheet:
* Build a command-line project.
* Have that command-line project use SqlBulkCopy to move all excel rows into a working table in your database.
* Have that command-line project then execute a bunch of T-SQL that does all your ETL things.
* Hug yourself for avoiding SSIS.
