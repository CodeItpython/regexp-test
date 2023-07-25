const str=`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com?/apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp=new RegExp('the','gi') //생성자 방식
const regexp=/\.$/gim  //리터럴방식
console.log(str.match(regexp))