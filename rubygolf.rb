# RUBY GOLF!
# Rules
# Solve the following problems in ruby using the fewest amount of characters possible.
# Each problem should be solved using a single method per hole Method Names do not count as characters but params do.
# def my_awesome_method(num, letter) = 10 chars num,letter
# Spaces, new lines, and puts statements do NOT count The method has to work per the specifications.
# ** NOTE: DO NOT use any built in Ruby methods that would give you the direct answer.

# HOLE 1: Sum an array
# Create a method that takes in an array sums the array then returns the array and the sum.
def sum(a)
  a.reduce(&:+)
end
puts(sum([1,2,3,4,5]))

# HOLE 2: Rock paper scissors
# Takes a user input the computer randomly chooses and the winner is output to the screen.
def menu
    puts "Select An Option \n1) Rock \n2) paper \n3) Scissors"
    u = gets.strip.to_i
    c = rand(1..3)

    if u == c
        puts "tie"
    elsif u == 1 && c == 3 || u == 2 && c == 1 || u == 3 && c == 2
        puts "You win!"
    else
        puts "You lose!"
    end
end
menu
#
#
#
# # HOLE 3: FIZZBUZZ
# # For numbers 1-100 print “FIZZ” if the number is divisible by 3, “BUZZ” if the number is divisible by 5, “FIZZBUZZ” if the number is divisible by both 3 and 5 otherwise print the number.
1.upto(100) do |i|
      if i % 5 == 0 && i % 3 == 0
        puts "FizzBuzz"
      elsif i % 5 == 0
        puts "Buzz"
      elsif i % 3 == 0
        puts "Fizz"
      else
        puts i
      end
    end


# HOLE 4: Multiples up to a given value
# The method takes in a number and a max value then finds all multiples of the number up to the max value.
def mm(num, newnum, max, i)
  if newnum < max
    i+=1
    newnum=num*i
    puts"#{newnum}"
    mm(num,newnum,max,i)
  else
    exit
  end
end

# HOLE 5: Caesar Cipher
# Take in a string and an offset, encrypt the string by moving letters over by the offset and return the encrypted string (e.g “ab”, 3 would return “de”). When you hit Z loop back to A.
def cs
  puts "Enter a string"
  s = gets.strip
  puts "Enter an offset"
  o = gets.strip.to_i
  r=''
  0.upto(s.length-1) do |i|
    j = s[i].ord
    case j
      when 65..90
        if j + o > 90
          r += (j + o - 26).chr
        else
          r += (j + o).chr
        end
      when 97..122
        if j + o > 122
          r += (j + o - 26).chr
        else
          r += (j + o).chr
        end
    end
  end
  puts r
end

cs

# HOLE 6: String Counter
# Given a string and a sub string count the number of times the substring occurs in the string and print the number to the console.
def r(u)
  c = rand(1..3)
  if u == c
    puts "Tie"
  elsif u == 2 && c == 1 || u == 3 && c == 2 || u = 1 && c == 3
    puts "User Wins"
  else
    puts "Computer Wins"
  end
end

puts "1) Rock \n2) Paper \n3) Scissors\n"
u = rps(gets.strip.to_i)

r(u)

# HOLE 7: Mixed pairs
# The method takes in an array of arrays. Each inner array contains a pair, the method then mixes up the pairs and returns a new array with the pairs mixed up.
def mp(a)
  n = []
  b = a.flatten.shuffle
  a.length.times do
    n << [b.pop, b.pop]
  end
  puts "#{n}"
end

mp([[1,2],[3,4],[5,6],[7,8]])


# HOLE 8: Love Test
# Create a method that takes in 2 strings and counts the total number of characters in common. Divide the total number of chars by the number in common. Spaces do not count. Capitols are not the same as lowercase Example: "I love this code", "This code loves me" Total Chars: 27 Chars In Common: 7 Solution: 27 / 7 = 3
def thing
    puts "Enter String 1"
    s1 = gets.strip.downcase
    puts "Enter String 2"
    s2 = gets.strip.downcase
    distance = 0
    length = s1.length
    for i in 1..length
        if s1[i] == s2[i] then
        distance += 1
        end
    end
    puts distance
end
thing

# HOLE 9: Shopping List
# Takes in a list of strings. Program sorts the list non case sensitive, removes duplicates and returns as hash using position in the list as priority.
def list a
  i = 1
  l = {}
  a.map{|t| t.downcase}.uniq.sort.each { |s|
    l[i] = s
    i += 1
  }
  l
end

puts list ['hello', 'Hello', 'apple', 'bungalow', 'Kite', 'Natalie']
