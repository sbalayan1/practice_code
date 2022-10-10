class
    -> is a blueprint that defines how to build an object
    -> A class both contains the instructions for creating new objects and has the ability to create those objects
    -> classes are the blueprints that defined the behavior and information ourobjects will contain and let us manufacture and instantiate new instances.
instance
    -> is a single occurrence of an obj
    -> instances refer to the individual objects produced from the class

note, unlike JS, whenever we use dot notaion in Ruby, were calling a method on an object.

Ruby Object Notation => #<Dog:0x007fc52c2cc588>
    -> is the default way that ruby communicates to you that you are dealing with an object or instance of a particular class
    -> the above tells you that the object is an instance of Dog and 0x007fc52c2cc588is its object identifier. This identifier is where the object lives inside the computer.

Instance Methods
    -> object_id: tells you the object's identifier in your computer's memory
    -> methods: returns an array of all the methods (messages) an object responds to

Instance Variables
    -> is a variable that is accessible in any instance method in a particular instance of a class
    -> instance variables lets us give our instances data. It lets us give our objects attributes/properties that let the object know their name, breed, etc.
    
    -> instance variables are bound to an instance of a class
        - this means that when we set the attribute on an instance, the value we set is associated with that particular instance.
    
    # example below has a setter and getter method that sets the dog_name to the LOCAL VARIABLE this_dogs_name, notice you run into an error because this_dogs_name is a local variable and cannot be accessed outside of #name=(dog_name)
    class Dog
        def name=(dog_name)
            this_dogs_name = dog_name
        end

        def name
            this_dogs_name
        end
    end

    #***** by changing this_dogs_name to an instance variable, we effectively change its scope and make the variable available to all instance methods defined within the class ******
    class Dog2
        def name=(dog_name)
            @this_dogs_name = dog_name
        end

        def name
            @this_dogs_name
        end
    end

Macros
    - metaprogramming is where we automate repetitive tasks to make our lives easier. 
    - a macro is an example of metaprogramming. Here we use the attr macros to abstract away the manual definitions of setter and getter methods.