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