// calc num queries
total = 9999
page_size = 100
num_queries = Math.ceil(total/page_size)
console.log('num_queries: ' + num_queries)

// calc pages
pages = []
for (let i = 0; i < num_queries; i++) {
    pages.push(i*page_size)
}
console.log(pages)

// determine batch size
batch_size = 2
console.log('batch_size: ' + batch_size)

for (let n = 0; n < num_queries; n++) {
    slice = pages.slice(n * batch_size, (n + 1) * batch_size)
    if (slice.length > 0){
        console.log(n+'_slice: ' + slice)
    } else {
        break;
    }
}