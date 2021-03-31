import math

# calc num queries
total = 9999
page_size = 100
num_queries = int(math.ceil(float(total) / float(page_size)))

print(num_queries)
print('num_queries: ' + str(num_queries))

# calc pages
pages = []
for i in range(num_queries):
    pages.append(i*page_size)
print(pages)

# determine batch size
batch_size = 40
print('batch_size: ' + str(batch_size))

for n in range(num_queries):
    slice = pages[n * int(batch_size): (n + 1) * int(batch_size)]
    if len(slice) > 0:
        print(str(n)+'_slice: ' + str(slice))
    else:
        break
