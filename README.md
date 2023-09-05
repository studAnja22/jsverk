README
============================
`npm audit` i backend-mappen visade totalt 11 säkerhetsrisker, varav 3 moderate och 8 high. Åtgärdades med `npm audit fix`.  
  
Installerade `sudo npm install nodemon` och körde igång `nodemon app.js`.  
Programmet krashade. Saknade API nyckel.  
Installerade `npm install -g dotenv` och la en `.env` fil i backend-mappen.  
Skapade ett konto på trafikverkets hemsida och skapade en API nyckel som lades in i `.env` filen som `TRAFIKVERKET_API_KEY = API_KEY`.  
Nästa problem som uppkom var från Sqlite. Error: no such table. Testade att köra `bash reset_db.bash` från db-mappen och fick error. Eftersom vi exekverar filen från db-mappen behövs inte db/filnamn, så db/ togs bort. Nu går det att exekvera reset och error no such table åtgärdades.  
  

