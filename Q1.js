//For the given JSON iterate over all for loops(for, for-of, for-in)
const obj = {
   "firstName": "Mohana priya",
   "lastName": "Manali Kuppuswamy",
   "gender": "female",
   "age": 38,
   "address": {
       "streetAddress": "101",
       "city": "San Diego",
       "state": "CA"
   },
   "phoneNumbers": [
       { "Residence": "91-4452525252", 
       "mobile": "9192939495" }
   ]
}

//iteration over for-of loop
for (let value of Object.values(obj) ){
    console.log(value);
}

//iteration over for-in loop
for (let key in obj){
    console.log(key);
}
