var info = [{name: "Bruce Lee", address: "500 Dragon Rd"},{name: "Michael Jordan", address: "23 Legend Ave"},{name: "Warren Buffet",address: "1 Omaha Dr"},{name: "DJ Khaled", address: "1 Another Rd"},{name: "Barack Obama", address: "1 Washington Dr."},{name: "Drake",address: "33 Toronto Dr"},{name: "Bruce Wayne",address: "3 Gotham Pl"},{name: "Mariah Carey", address: "1 Fantasy Ln"},{name: "Piko Taro", address: "888 Shibuya Dr."},{name: "Steve Jobs",address: "1 Infinite Loop"},{name: "Guy Kawasaki", address: "2800 Woodlawn Dr"},{name: "Stephen Hawkins",address: "1 Blackhole Pl"},{name: "Jackie Chan", address: "168 Shanghai Rd"},{name: "Charlie Brown",address: "8 Peanuts Rd"},{name: "Cookie Monster", address: "2 Seasame St"}, {name: "Elon Musk", address: "1 Rocket Rd"}, {name: "Mark Zuckerberg", address: "1 Hacker Ln"}, {name: "David Ige", address: "320 S Beretania St"}, {name: "Keanu Reeves", address: "Zion"}];

//function nameAddy(info){
for (i=0; i<info.length; i++){
/*document.body.innerHTML = ("name: " + info[i].name);
document.body.innerHTML = ("address: " + info[i].address);
document.body.appendChild(nameBox);
document.body.appendChild(addressBox);
}
//}
//nameAddy(info);
//console.log(info);
*/

var nameBox = document.createElement("div")
nameBox.className = "name";
nameBox.innerHTML = info[i].name;
document.body.appendChild(nameBox);


var addressBox = document.createElement("div")
addressBox.className = "address";
addressBox.innerHTML = info[i].address;
document.body.appendChild(addressBox);
}