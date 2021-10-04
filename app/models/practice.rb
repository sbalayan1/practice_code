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

4. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Solution: 

def pangram? string
  alphabet = [*'a'..'z']
  split_string = string.scan /\w/
  split_string = split_string.map {|x| x.downcase}
  pangram_array = []
  
  alphabet.map do |letter|
    split_string.find {|x| x === letter} != nil ? pangram_array.push(true) : pangram_array.push(false)
  end 
  
  pangram_array.find{|x| x === false} != nil ? false : true
   
end

Best Solution: 
def panagram?(string)
  ('a'..'z').all? { |x| string.downcase.include? (x) } 
end

5. What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.


Solution: 
def anagrams(word, words)
  
  target_size = word.size 
  target_sorted = word.each_char.sort

  def anagram?(target_size, target_sorted, w)
    return false unless target_size === w.size 
    w.each_char.sort === target_sorted 
  end 

  words.select{|w| anagram?(target_size, target_sorted, w)}

end

Best Solution: 
  def anagrams(word, words)
    words.select { |w| w.chars.sort == word.chars.sort }
  end 

Clever Solution: 
  def anagrams(word, words)
    words.select{|w| w.sum == word.sum}
  end


5. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Solution: 

function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val))
}


6. Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

Solution: 

function disemvowel(str) {
  let vowels = ['a','e','i','o','u']
  return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
}

Best Solution: 
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


7. Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

Solution: 
function findNb(m) {

# //   create a for loop that increases n infinitely 
  for (let n = 0;;n++) {

# // Subtract the current value of the building (n+1^3) from the max if m>0. Note that n+1 is done to increment n. 
    if (m > 0) {
      m = m - Math.pow(n+1, 3)
      
# // Otherwise return -1 or n depending on the value of m.
    } else if (m === 0 ) {
      return n
      
    } else {      
      return -1
    }
  }
}

Best Solution/Clever: 
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

# 8. There is a bus moving in the city, and it takes and drop some people in each bus stop.

# You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

# Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

# Take a look on the test cases.

# Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

# The second value in the first integer array is 0, since the bus is empty in the first bus stop.

Solution: 
  var number = function(busStops){  
    let totalRidersOn = busStops.map(x => x[0]).reduce((a,b) => a+b, 0)
    let totalRidersOff = busStops.map(x => x[1]).reduce((a,b) => a+b, 0)
    return totalRidersOn - totalRidersOff
  }


Best Solution: 
  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]
  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
  
  Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Solution: 
  let maxSequence = (arr) => {
    let allCombinations = []
    
    for (let i = 0; i<=arr.length; i++) {
        for (let j = i+1; j<=arr.length; j++) {
          let comboArr = arr.slice(i,j)      
          allCombinations.push(comboArr.reduce((a,b) => a+b,0))
        }
      }

  return allCombinations.length === 0 || allCombinations.find(val => val>0) === undefined ? 0 : Math.max(...allCombinations)
    
  }

  Best Solution: 

  var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
  }

9. Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND


Solution: 
function songDecoder(song){
  return song.replace(/(WUB)+/g,' ').trim()
}

Clever Solution: 

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

# 10. The Fibonacci numbers are the numbers in the following integer sequence (Fn):

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

# such as

# F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

# Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

# F(n) * F(n+1) = prod.

# Your function productFib takes an integer (prod) and returns an array:

# [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
# depending on the language if F(n) * F(n+1) = prod.

# If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

# [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
# F(n) being the smallest one such as F(n) * F(n+1) > prod.

# Some Examples of Return:
# (depend on the language)

# productFib(714) # should return (21, 34, true), 
#                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

# productFib(800) # should return (34, 55, false), 
#                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
# -----
# productFib(714) # should return [21, 34, true], 
# productFib(800) # should return [34, 55, false], 
# -----
# productFib(714) # should return {21, 34, 1}, 
# productFib(800) # should return {34, 55, 0},        
# -----
# productFib(714) # should return {21, 34, true}, 
# productFib(800) # should return {34, 55, false}, 

Solution: 

let productFib = (prod) => {  
  let n = 0
  let nPlus = 1
  
  while (n*nPlus < prod) {    
    nPlus = n + nPlus
    n = nPlus - n
  }
  
  return [n, nPlus, n*nPlus === prod]
}

11. Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

Solution: 
function towerBuilder(nFloors) {
  let tower = []
  let addedStars = 1
  
  while (nFloors > 0) {
    tower.push('*'.repeat(addedStars))
    addedStars += 2
    nFloors--
  }

  for (let i = 0; i< tower.length; i++) {
    let addSpace = ' '.repeat((tower[tower.length-1].length - tower[i].length)/2)
    i !== tower.length - 1 ? tower[i] = addSpace + tower[i] + addSpace : null
  }

  return tower
}

Best Solution: 
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}


12. Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Working Solution: 
var threeSum = function(nums) {
    let triplets = []
    for (let i = 0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=i+2; k<nums.length; k++) {
                if (0 === nums[i] + nums[j] + nums[k]) {
                    triplets.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    
    return triplets
};