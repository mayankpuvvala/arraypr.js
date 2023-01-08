const naming= [
    {
        name: 'himesh',
        happy: 'most',
        rating: 8.5,
    },
    {
        name: 'karmesh',
        happy: 'good', 
        rating: 8.3
    },
    {
        name: 'lakshya',
        happy: 'least',
        rating: 7.8
    }
]
console.log('emotional is ')
console.log(naming[2])

const talk= naming.map((elements)=>{
    return elements.name
})
console.log('all names are '+ talk)

const personality= naming.map((hap)=>{
    return {
        name: hap.name,
        happy: hap.happy
    }
})

console.log(personality)

const total= naming.reduce((prev, after)=>{
    return prev+ after.rating
},0)
console.log(total)
//adding all values

const filt= naming.filter(rating=> rating>7)
console.log(filt)