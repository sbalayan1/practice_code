# An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

# You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

# To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

# Return the modified image after performing the flood fill.

#Example 1:
    # Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
    # Output: [[2,2,2],[2,2,0],[2,0,1]]
    # Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
    # Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.


#recursive
def floodFill(image, sr, sc, color):
    initial = image[sr][sc]
    
    def recursive(row, column):
        if image[row][column] == initial:
            image[row][column] = color

            if row-1 >= 0: recursive(row-1, column)
            if row+1 < len(image): recursive(row+1, column)
            if column-1 >= 0: recursive(row, column-1)
            if column+1 < len(image[0]): recursive(row, column+1)

    recursive(sr, sc)
    return image
