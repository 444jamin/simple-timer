//NOT USING FOR THE WEBPAGE

#include <stdio.h>
#include <unistd.h>
#include <time.h>
#include <stdlib.h>

long int timer(int target_hour)
{
    time_t now;
    struct tm *target_time, *current_time;
    time(&now);
    current_time = localtime(&now);

    target_time = localtime(&now);
    target_time->tm_hour = target_hour;
    target_time->tm_min = 0;
    target_time->tm_sec = 0;

    if(mktime(target_time) < mktime(current_time))
    {
        target_time->tm_mday += 1;
    }

    return difftime(mktime(target_time), now);
}

int main(){
    int target_hour = 20;

    long int remaining_seconds = timer(target_hour);

    printf("Time remaining: %ld seconds\n", remaining_seconds);
    
    while(remaining_seconds > 0)
    {
        remaining_seconds = timer(target_hour);
        printf("Time remaining: %ld seconds\n", remaining_seconds);
        sleep(1);
    }

    printf("GOT Time!\n");

    return 0;
}