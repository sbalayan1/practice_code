#classes and methods

#cases
    #board is full
    #win/loss?
    #column is full

class Connect4:
    #initialize 7x6 board with nil vals
    def __init__(self):
        self.height = 6
        self.width = 7
        self.board = [[None for i in range(self.width)] for j in range(self.height)]
    
    #state of the game
    def get_board(self):
        for row in self.board:
            print(row)
        #returns a board with each element as either "X", "O", or nil

    #move
    def move(self, player, column):
        #check if the move is valid => if invalid return "failed"
            #move is invalid if the column is full
            current_col = [self.board[row][column] for row in range(self.height)]

            if column >= self.width or self.isFull(current_col) : return "Failed"

        #if board full, return draw
            if len(list(filter(None, self.board))) == 0: return "Draw"
            

        #make move
            occupied = self.count_occupied(current_col)
            row = self.height - occupied - 1
            self.board[row][column] = player

                
        #if player won, return won      
            # left = [-3, 0]
            # right = [3, 0]

            # top = [0, -3]
            # bottom = [0, 3]

            # diag_down = [[0,0], [1,1], [2,2], [3,3]]
            # diag_up = [[0,0], [-1,-1], [-2,-2], [-3,-3]]

            # anti_diag_down = [[0,0], [-1,1], [-2,2], [-3,3]]
            # anti_diag_up = [[0,0], [1,-1], [2,-2],[3,-3]]

            VECTORS = [[1,0], [0,1], [1,1], [-1,1]]
            locations = []
            for vector in VECTORS:
                for num in range(-3, 4):
                    locations.append([vector[0]*num+row, vector[1]*num+column])

            positions = []
            for location in locations:
                if location[0] >= 0 and location[0] < self.height: 
                    if location[1] >= 0 and location[1] < self.width:
                        positions.append(location)
            
            win = []
            for position in positions:
                row = position[0]
                column = position[1]

                if self.board[row][column] == player: 
                    win.append(player)
                    if len(win) == 4: return "Win"
                else:
                    win = []

        #otherwise return successful
            return "Successful"

    def isFull(self, column):
        for pos in column:
            if pos == None: return False
        
        return True

    def count_occupied(self, column):
        def filter_occupied(position):
            if position is not None: return True

        return len(list(filter(filter_occupied, column)))

    # def isWin(self, r, c, player):
        
        # h = []
        # v = []
        # #check horizontal
        
        # for col in range(c-3, c+3):
        #     if col < 0: col = 0
        #     if col >= self.width: col = self.width-1
            
        #     print(self.board[r][col])
        #     if self.board[r][col] == player: h.append(player)
        #     else: h = []

        # for row in range(r-3, c+3):
        #     if row < 0: row = 0
        #     if row >= self.height: row = self.height-1

        #     if self.board[row][c] == player: v.append(player)
        #     else: v = []

        # # print("horizontal:", h, "vertical:", v)
        # if len(h) == 4: return f"{player} won!"
        # if len(v) == 4: return f"{player} won!"



        


game = Connect4()
print(game.move("x", 0))
print(game.move("o", 2))
print(game.move("x", 0))
print(game.move("o", 0))
print(game.move("x", 1))
print(game.move("o", 2))
print(game.move("x", 2))
print(game.move("o", 3))
print(game.move("x", 0))
print(game.move("o", 3))
print(game.move("x", 1))
print(game.move("o", 5))
print(game.move("x", 0))
print(game.move("o", 4))
game.get_board()