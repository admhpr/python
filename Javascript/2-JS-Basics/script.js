// variables for John and Friend
var JohnHeight = 153;
var FriendHeight = 160;
var JohnAge = 20;
var FriendAge = 19;

var John = JohnHeight + (JohnAge * 5);

var Friend = FriendHeight + (FriendAge * 5);

/*
if (John > Friend) {
    console.log("John wins his score is: " + John);
} else if {
    console.log("John's friend wins their score is: " + Friend);
} else if (John === Friend) {
    console.log ("There is a draw");
}
*/

var MaryHeight = 158;
var MaryAge = 31;
var Mary = MaryHeight + (MaryAge * 5);

if (John > Friend && John > Mary) {
    console.log("John wins his score is: " + John);
}else if (Friend > John && Friend > Mary) {
    console.log("John's friend wins their score is: " + Friend);
}else if (Mary > John && Mary > Friend) {
    console.log("Mary is the winner!! her score is: " + Mary);
}else {
    console.log("it's a draw");
}
