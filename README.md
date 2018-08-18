# The most basic server ever

this server is a basic server for an IoT experiment. It will have no security so run it on a save secure wifi. Anyone can get and post data to this server so be carefull.

##Data 

TypeORM handles all the SQl. The setup does require something for now I'm running a docker with postgress use the command 

> docker run -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=secret -d postgres  

if you ever decide to use this yourself run the password in proces.envolope and please change it from the password secret. It is in the top 10 list of most used for a reason. 

Other then this use this for anything you want. It is ment to get data from an arduino and give it out to a web app.
