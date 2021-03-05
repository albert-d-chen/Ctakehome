# README
# Cellares Coding Challenge

### `Framework:`

* Ruby 2.5.1
* Rails
* React.js
* Redux.js
* PostgresSQL
* Webpack

### `Setup:`
*To run locally on computer*:
On GitHub, copy the code url and run `git clone` followed by the url in the terminal.

In terminal: 
 1. `bundle install`
 2. `npm install`
 
In computer: 

 3. Start PostgreSQL to start database
 
In terminal: 

 4. `rails db:setup` to setup database 
 5. `rails s` to start Rails Server in one terminal
 6. `npm start` to start Webpack module bundler in another terminal

In browser: 

 7. `http://localhost:3000`

 Step by step:
 1. Press Connect button to connect to hardware simulator
 2. Select a time (s) 
 3. Press Start to begin data extraction
 4. Randomized number produced each second
 5. Press View Logs to see logs created in database whenever a state changes (timeSet, timeRemaining, data, start/stop)

Side-notes:
Basic features should be functional. I was unsure about the database integration and when a new log should be created (which state change should create a new log), so I made it so it makes a new log everytime a state aspect changes. There is one issue with this, as a new log is not created only for the state for if it connects or disconnects. This could potentially be fixed through refactoring to hooks. In addition, I did seed 1 sample data in it just to have something in the log table.Another feature I need to implement is determining if the power is on of the actual hardware. This could be done through adding a value to the state for the power status and checking it before the software can connect.