# Thread & Batch

Python3 mechanism for splitting a count in threads or batches.

## Batch

This script will output `n` number of rows with a fixed number of batches.

```python
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
batch_size = 2
print('batch_size: ' + str(batch_size))

for n in range(num_queries):
    slice = pages[n * int(batch_size): (n + 1) * int(batch_size)]
    if len(slice) > 0:
        print(str(n)+'_slice: ' + str(slice))
    else:
        break
```

## Thread

This script will output a fixed number of rows with `n` number of batches.

```python
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

# determine bucket
max_thread_count = 5
bucket_size = int(math.ceil(float(num_queries) / float(max_thread_count)))
print('bucket_size: ' + str(bucket_size))

for n in range(max_thread_count):
    slice = pages[n * int(bucket_size): (n + 1) * int(bucket_size)]
    if len(slice) > 0:
        print(str(n)+'_slice: ' + str(slice))
    else:
        break
```
