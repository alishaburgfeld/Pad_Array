#REMEMBER TO PSEUDOCODE

# find length of Array, if length is less than minsize, push the filler word (while loop)
def pad(array, min_size, value = None):
    answer=array.copy()
    while len(answer) < min_size:
        answer.append(value)
    return answer

print(pad([1,2,3], 5))
print(pad([1,2,3], 5, 'apple'))
print(pad([1,2,3], 3, 'apple'))


