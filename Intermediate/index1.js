Martin = 76

Thomas = 85

Klaus = 65

Maria = 93

David = 81


if (Martin < 60) {
   document.write("Martin: F ")
} else if (Martin > 60 && Martin < 70) {
   document.write("Martin: D ")
} else if (Martin > 70 && Martin < 80) {
   document.write("Martin: C ")
} else if (Martin > 80 && Martin < 90) {
   document.write("Martin: B ")
} else if (Martin > 90 && Martin <= 100) {
   document.write("Martin: A ")
}

if (Thomas < 60) {
   document.write("Thomas: F ")
} else if (Thomas > 60 && Thomas < 70) {
   document.write("Thomas: D ")
} else if (Thomas > 70 && Thomas < 80) {
   document.write("Thomas: C ")
} else if (Thomas > 80 && Thomas < 90) {
   document.write("Thomas: B ")
} else if (Thomas > 90 && Thomas <= 100) {
   document.write("Thomas: A ")
}

if (Klaus < 60) {
   document.write("Klaus: F ")
} else if (Klaus > 60 && Klaus < 70) {
   document.write("Klaus: D ")
} else if (Klaus > 70 && Klaus < 80) {
   document.write("Klaus: C ")
} else if (Klaus > 80 && Klaus < 90) {
   document.write("Klaus: B ")
} else if (Klaus > 90 && Klaus <= 100) {
   document.write("Klaus: A ")
}

if (Maria < 60) {
   document.write("Maria: F ")
} else if (Maria > 60 && Maria < 70) {
   document.write("Maria: D ")
} else if (Maria > 70 && Maria < 80) {
   document.write("Maria: C ")
} else if (Maria > 80 && Maria < 90) {
   document.write("Maria: B ")
} else if (Maria > 90 && Maria <= 100) {
   document.write("Maria: A ")
}

if (David < 60) {
   document.write("David: F ")
} else if (David > 60 && David < 70) {
   document.write("David: D ")
} else if (David > 70 && David < 80) {
   document.write("David: C ")
} else if (David > 80 && David < 90) {
   document.write("David: B ")
} else if (David > 90 && David <= 100) {
   document.write("David: A ")
}

grades = [Martin, Thomas, Klaus, Maria, David]

var sum = 0;

for(var i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
}


var average = sum / grades.length;

if (average < 60) {
   document.write("Average: F " + average)
} else if (David > 60 && David < 70) {
   document.write("Average: D " + average)
} else if (David > 70 && David < 80) {
   document.write("Average: C " + average)
} else if (David > 80 && David < 90) {
   document.write("Average: B " + average)
} else if (David > 90 && David <= 100) {
   document.write("Average: A " + average)
}

