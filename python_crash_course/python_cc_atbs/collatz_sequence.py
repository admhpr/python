def collatz(number): 
	
	
	if number % 2 == 0:
		print(number // 2) 
		return number // 2
		
	elif number % 2 == 1:
		result = 3 * number + 1
		print(result)
		return result
		
n = input("Got a number for me?: ")
print("I'm going to make your number equal 1 using the collatz sequence watch:")

while n != 1:
	n = collatz(int(n))
	
print("using some number magic your number is now one, pretty cool!")
