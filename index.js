
// const companies=[
//     {
//         name:"Google",
//         category:"Product Based",
//         start:1910,
//         end:2004
//     },
//     {
//         name:"Facebook",
//         category:"Product Based",
//         start:1913,
//         end:2010
//     },
//     {
//         name:"PTM",
//         category:"Service Based",
//         start:2000,
//         end:2010
//     },
//     {
//         name:"Twitter",
//         category:"Service Based",
//         start:2000,
//         end:20010
//     },
// ]


// const age=[1,2,3,31,43,23,20,34,40]
// //filter example
// const ages=age.filter((items)=>
// {
//     if(items>=20)
//     {
//         console.log(items)
//     }
// })

//  const sb=companies.filter((items)=>
// {
//     if(items.category==="Service Based")
//     {
//       console.log(items)   
//     }
// })




// example of map
// companies.map((company,index)=>
// {
//     console.log(company,index)
// })

// const dummy =companies.map((company,index)=>
// {
//     return `${company.name} ${company.end}`
// })
// console.log(dummy)




// example of sort 
// const sorted=companies.sort((c1,c2)=>
// {
//     if(c1.start>c2.start)
//     {
//         return 1;
//     }
//     else
//     {
//         return -1
//     }
// })
// const array12=companies.map((items)=>items.name)
// {
//     console.log(array12)
// }
// console.log(sorted)
// const ages=age.sort()
// console.log(ages)



// example of reduce 
// const total1=age.reduce((items,total)=>
// {
//     return items=items+total
// })
// console.log(total1)



// example of some method 
// const vote=age.some((number)=>number>18)//return  true value
// {
//     console.log(vote)
// }

// const array=[3,4,5,6,7]
// const vote1=array.some((number)=>number>18)// return false value
// {
//     console.log(vote1)
// }




//  example of every method 
//  const array=[3,4,5,6,7,20]
//  const vote=array.every((number)=>number>18) // return false value
//  {
//      console.log(vote)
//  }

//  const array12=[3,4,5,6,7,3]
//  const vote2=array12.every((number)=>number<18)//return true value
//  {
//      console.log(vote2)
//  }




//  example of find method
// const array=[10,3,4,5,6,7,3]
// const  newArray =array.find((number)=>number>5) //return the frist element from array
// {
//     console.log(newArray)
// }



// find index of 
// const array=[1,10,3,4,5,6,7,3]
// const newArray=array.indexOf(1)
// {
//     console.log(newArray)
// }


// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('giraffe')); //if cannot find it return -1 value


//splice method
// const array=[1,10,3,4,5,6,7,3]
// const array2=array.splice(1,3)
// console.log(array2)


// trime method 
// const name="     name"
// let a= name.trim()// this method remove the space of string 
// console.log(a)

// remove the space from end
// const b="hello     "
// const c=b.trimEnd(b)
// console.log(c)




