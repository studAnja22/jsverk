README
============================
`npm audit` i backend-mappen visade totalt 11 säkerhetsrisker, varav 3 moderate och 8 high.  
Åtgärdades med `npm audit fix`.  
  
Installerade `sudo npm install nodemon` och körde igång `nodemon app.js`.  
Programmet krashade. Saknade API nyckel.  
Installerade `npm install -g dotenv` och la en `.env` fil i backend-mappen.  
Skapade ett konto på trafikverkets hemsida och skapade en API nyckel som lades in i `.env` filen som `TRAFIKVERKET_API_KEY = API_KEY`.  
Nästa problem som uppkom var från Sqlite. Error: no such table. Testade att köra `bash reset_db.bash` från db-mappen och fick error. Eftersom vi exekverar filen från db-mappen behövs inte db/filnamn, så db/ togs bort.  
Nu går det att exekvera reset och error no such table har åtgärdats.  
  
>"Any reasonable developer in today's world would learn React  
>because it's the status quo and that's where the jobs are...  
>**But** life is a lot more fun when you become unreasonable  
>and go against the status quo to push web development forward for future generations"  
>
>Beyond Fireship (2023, 1 juli) *React VS Svelte...10 Examples*  
>[video]. Youtube. https://www.youtube.com/watch?v=MnpuK0MK4yo
  
Vi valde att arbeta med Svelte som jsramverk.

Att starta svelte servern kör `npm run dev` lägger till `-- --open` i kommandot för att automatiskt öppna localhost i standard browsern under svelte directory (`./svelte`)
