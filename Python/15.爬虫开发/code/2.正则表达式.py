import re

s = '\\n123'
pattern = '\\n\d{3}'
print(re.match(pattern, s))