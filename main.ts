import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *10 +1)

const answer = await inquirer.prompt([
    {
      name:"userGuessesnumber",
      type: "number",
      message:"please guess a number between 1-10",
}
]);
if(answer.userGuessesnumber === randomNumber){
    console.log("congtratulation! you guessed right number");
}
else{
    console.log("you guessed wrong number");
}