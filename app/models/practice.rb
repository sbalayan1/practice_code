class Practice < ApplicationRecord


1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Solution: 
def solution(number)
    # put your solution here
     result = 0 
     array = (0..number-1).to_a
     array.select {|x| x % 3 == 0 || x % 5 == 0}.each {|num| result += num}
     
     number < 0 ? 0 : result
   
end


Other Solutions: 
def solution(number)
    (1...number).select {|i| i%3==0 || i%5==0}.inject(:+)
end


2. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.


Solution: 

def likes(names)
    if names.size < 1
      'no one likes this'
    elsif names.size == 1 
      "#{names[0]} likes this"
    elsif names.size == 2 
        "#{names[0]} and #{names[1]} like this"      
    elsif names.size == 3
        "#{names[0]}, #{names[1]} and #{names[2]} like this"
    else
      array_size = names.size 
      "#{names[0]}, #{names[1]} and #{array_size - 2} others like this" 
    end 
end



Other Solutions: 
def likes(names)
    case names.size
    when 0 
      "no one likes this"
    when 1 
      "#{names[0]} likes this"
    when 2
      "#{names[0]} and #{names[1]} like this"
    when 3
      "#{names[0]}, #{names[1]} and #{names[2]} like this"
    else
      "#{names[0]}, #{names[1]} and #{names.size - 2} others like this"
    end
  end


    # def digital_root(n)
    #     count = 0 
    #     while n.to_s.chars.size > 1
    #         puts "#{count+1}"
    #         count = count + 1
    #         n = n.to_s.chars.map {|x| x.to_i}
    #     end

    #     if n.to_s.chars.size === 1 
    #         n
    #     end 
    # end    


    #     # if n.to_s.chars.size > 1 
    #     #     puts "#{count + 1} loop"
    #     #     n = n.to_s.chars.map {|x| x.to_i}.sum
    #     # else 
    #     #     n
    #     # end 

3. Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

OPPOSITE = {
  "NORTH" => "SOUTH",
  "SOUTH" => "NORTH",
  "EAST"  => "WEST",
  "WEST"  => "EAST"
}

def dirReduc(arr)
  stack = []
  arr.each do |dir|
    OPPOSITE[dir] == stack.last ? stack.pop : stack.push(dir)
  end
  stack
end
