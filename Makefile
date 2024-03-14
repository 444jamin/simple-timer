OUTPUT = timer
#CFLAGS = -std=c11 -Wall -Werror
#LDLIBS = 

all: $(OUTPUT)

$(OUTPUT): timer.o
	gcc -std=c11 -Wall -Werror timer.o -lm -o $(OUTPUT)

timer.o: timer.c
	gcc -std=c11 -Wall -Werror -c timer.c -lm -o timer.o

clean: 
	rm -f $(OUTPUT) *.o 