#ask user for name

name = input("What is your name?: ")

#ask user for age

age = input("What is your age?: ")

#ask user for city

city = input("Where do you live?: ")

#ask user for love

love = input("What do you love to do?: ")

#create output text

string = "Your name is {} and you are {} years old.You live in {} and you love to {}"
output = string.format(name, age, city, love)


#print output to screen 
print(output)
