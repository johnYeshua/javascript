let colors = new Set(['Green','Red','Orange','Yellow','Red']);

colors.add('Violet');
colors.add('Indigo');
colors.add('Blue');

console.log(colors);
console.log(colors.size);
console.log('After Clear method');
colors.clear();
colors.delete('Violet');
console.log('after delete',colors);
var itr = colors.entries();
for(i=0;i<colors.size;i++)
{
    console.log(itr.next().value);
}

console.log(colors.has('Blue'));