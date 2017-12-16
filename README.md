# project1
Connect 4 !

# Technical Requirements
Game is playable    
Game is 2-player (or AI)    
Game is winnable    
Winner is displayed 
Has directions - how to play    
Appropriate Use of GitHub   
Deployed on Github Pages    
Long files appropriately split up   
Appropriate use of functions    
DRY Code    
Draw detected (if applicable)   

# Technologies Used
jquery - animations
google fonts

# Approach Taken
begin making a connect 4 game board


# Issues
Learning jquery
win detection took almost 3 days
create "falldown" effect similar to actual gameplay (start at bottom row)

# Fun Stuff
Styling
adding animations

# Unsolved Problems
the algorithm that checks for connected castle pieces does not handle for two castles that are on a tile but are not connected. Because the algorithm returns on a broken castle, if one of the castles were not complete, the function would end before getting a chance to check the second castle.
Check for comleted castles is buggy, large castles seem to believe they are complete and assign points before they are actually complete.

# Next Steps
add minimax AI
keep track of how many wins players have
choose your own game pieces
themed boards
