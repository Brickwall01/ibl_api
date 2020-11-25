
PRE-REQUISITES
-Windows 10 (for Docker)
-Admin Privelleges
-Node LTS (V.12+) https://nodejs.org/en/download/
-Docker Desktop Installed https://www.docker.com/get-started
  (please follow prompts and instructions from the official websites.)

INSTRUCTIONS
-Once Docker is installed right click the windows icon and select Windows Powershell(admin)
-Once it loads you should see an address similar to C:\Users\<username>\Desktop
-It is reccomended you have this file unzipped on the desktop for ease of navigation
-From here type the command "cd ibl_api-0.0.01" (if it is not located on the desktop you will need to type "cd" then "cd" + the full file path)
-Your command line should now look similar to "C:\Users\<username>\Desktop\ibl_api-0.0.01>"
-Now we use the command "npm start" to build the local files and start the local server
NOTE: the server will continue to run until it is stopped, additionally the ports can be swapped by changing "3000:3000" to the desired port e.g 4000:4000
-After this the server is running and can be accessed
-Open your web browser and got to "localhost:3000/health" (or if you changed the port use that instead e.g. the above example would be localhost:4000/health)
-Afterwards don't forget to stop the server by returning to power shell and pressing Ctl+C then Y to confirm
