
def rec(k, n):
    if (k==n):
        return "YES"
    if(k>n):
        return "NO"

    return rec(k+5, n) and rec(k+3, n)

n = int(input())
print(rec(1, n))
'''

s = input()
maxi = -10000000

def rec(i: int, maxi: int, s: str):
    if(i > len(s)-1):
        return maxi

    if(int(s[i]) > maxi):
        maxi = int(s[i])

    return rec(i+1, maxi, s)

print(rec(0, maxi, s))
'''