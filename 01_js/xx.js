let ans = '';
for (let i=1; i<=5; i++) {
    ans += `${' '.repeat(5-i) + '*'.repeat(2*i-1)}\n`;
}
console.log(ans);