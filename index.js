let firstAnswer = window.prompt('left or right')
    if(firstAnswer === 'right'){
        secondAnswer = window.prompt('you start walking through the woods and get lost. Do you yell for help?')
    }
    else if(firstAnswer === 'left'){
        window.alert('you trip and fall and now your leg is broken.')
    }
        if(secondAnswer === 'yes'){
            window.alert('you attract the attention of a wolf and it attacks you. you die')
        }
        else if(secondAnswer === 'no'){
            thirdAnswer = window.prompt('You keep walking and you see a cabin in the distance. Would you like to go in?')
        }
            if(thirdAnswer === 'yes'){
                fourthAnswer = window.prompt('You open the door and dust clouds your eyes. The cabin appears to be empty. Would you like to go to sleep?')
            }
            else if(thirdAnswer === 'no'){
                fourthAnswerb = window.prompt('you keep walking and find a group of rabbits. Would you like to hold one?')
                if(fourthAnswerb === 'yes'){
                    fifthAnswerb = window.prompt('you pick up a rabbit and you start petting it. eventually you put it down and it starts following you. you decide to take it home with you as a pet. Would you like to name it hops or fluf?')
                }
                else if(fourthAnswerb === 'no'){
                    fifthAnswerb = window.alert('the rabbits get mad that you are not giving them attention, and they attack you. you die.')
                }
                    if(fifthAnswerb === 'hops'){
                        bestEndinga = window.alert('you and hops explore the woods together. eventually morning comes and you find your way home together.')
                    }
                    else if(fifthAnswerb = 'fluf'){
                        bestEndingb = window.alert('you and fluf explore the woods together. eventually morning comes and you find your way home.')
                    }
            }
                if(fourthAnswer === 'yes'){
                    fifthAnswer = window.alert('you decide to go to sleep. the next morning you easily find your way home.')
                }
                else if(fourthAnswer === 'no'){
                    fifthAnswer = window.alert('you search the cabin for supplies and keep moving. you now start to feel like an idiot because you can see the road right next to the cabin. you leave the woods and follow the road home.')
                }