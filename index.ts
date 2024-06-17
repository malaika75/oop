#!/usr/bin/env node 

import inquirer from "inquirer"

console.log ("TEST YOUR PERSONALITY")
class Person {
    private personality:string

    constructor () {
        this.personality = "mystery"
        
    }
    public async askQuestion(): Promise<void>{
let answer = await inquirer.prompt([{
    type : "input",
    name : "enter",
    message : "Enter your name"
},
   
{
    name : "yourself",
    type : "list",
    message : "Where do you get your energy from?",
    choices : 
       ["A) I feel refreshed and energized after social gatherings." ,
        "B) I feel more refreshed after spending time alone in peace and quiet.",
        "C) It depends; sometimes I feel energized by social gatherings, and other times by being alone."]
},

{
    name : "yourself2",
    type : "list",
    message : "How do you prefer to spend your time?",
    choices :
    ["A) I mostly enjoy being with other people.",
    "B) I prefer spending time alone pursuing my hobbies and interests.",
    "C) I like a mix of both; sometimes being with people and sometimes being alone."]
},

{
    name : "yourself3",
    type : "list",
    message : "What does your ideal weekend look like?",
    choices : 
    [  "A) My perfect weekend is spent at a social event or party.",
       "B) I enjoy spending my weekend alone doing activities I love.",
       "C) My ideal weekend includes a balance of social events and alone time."]
}

])

if (answer.yourself.startsWith("B") && answer.yourself2.startsWith("B") && answer.yourself3.startsWith("B")){
    this.personality = "INTROVERT"
}else if(answer.yourself.startsWith("A") && answer.yourself2.startsWith("A") && answer.yourself3.startsWith("A")){
    this.personality = "EXTROVERT"
}else {
    this.personality = "AMBIVERT"
}
    }
public getpersonality():string {
    return this.personality
}

}

    async function main(){
    const person:Person = new Person();
   await person.askQuestion();
    console.log ("personality: based on your answers, your personality is", person.getpersonality());
}
main()
