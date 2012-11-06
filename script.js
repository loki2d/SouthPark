var $Date =  '{'+
        '"client":{'+
            '"widthOld":"'+$(window).width()+'",'+
            '"heightOld":"'+$(window).height()+'",'+
            '"widthNew":"'+$(window).width()+'",'+
            '"heightNew":"'+$(window).height()+'",'+
            '"widthK":"1",'+
            '"heightK":"1"'+
        '},'+	
	'"elements":{'+
               '"cartman":{'+
                     '"name":"cartman",'+
                     '"pageName":"home",'+
                     '"className":"cartman",'+
                     '"width_":"180",'+
                     '"height_":"164",'+
                     '"fix":"1",'+
                     '"style":"bottom: 15%; left: 23%; z-index: 170;  position: absolute; background: url(./img/cartman.png) no-repeat; background-size: contain; "'+
		'},'+
		'"kyle": {'+
                    '"name":"kyle",'+
                    '"pageName":"home",'+
                    '"className":"kyle",'+
                    '"width_":"147",'+
                    '"height_":"180",'+
                    '"fix":"1",'+
                    '"style":"bottom: 15%; left: 43%; z-index: 100;  position: absolute; background: url(./img/kyle.png) no-repeat; background-size: contain; "'+
			
		'},'+
		'"stan": {'+
                    '"name":"stan",'+
                    '"pageName":"home",'+
                    '"className":"stan",'+
                    '"width_":"130",'+
                    '"height_":"190",'+
                    '"fix":"1",'+
                    '"style":"bottom: 15%; left: 60%; z-index: 180;  position: absolute; background: url(./img/Stan.png) no-repeat; background-size: contain ; "'+
			
		'},'+
		'"kenny": {'+
                      '"name":"kenny",'+
                      '"pageName":"home",'+
                      '"className":"kenny",'+
                      '"width_":"140",'+
		      '"height_":"186",'+
                      '"fix":"1",'+
                      '"style":"bottom: 15%; left: 75%; z-index: 100;  position: absolute; background: url(./img/kenny.png) no-repeat; background-size: contain; "'+
		'},'+
                '"cartmanChat":{'+
                     '"name":"cartman",'+
                     '"pageName":"chatCartman",'+ 
                     '"className":"cartmanChat",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -60px; left: 10%; position: absolute; background: url(./img/cartman.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"stanChat":{'+
                     '"name":"Stan",'+
                     '"pageName":"chatStan",'+ 
                     '"className":"chatStan",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -30px; left: 10%; position: absolute; background: url(./img/Stan.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"kyleChat":{'+
                     '"name":"Kyle",'+
                     '"pageName":"chatKyle",'+ 
                     '"className":"chatKyle",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -40px; left: 10%; position: absolute; background: url(./img/kyle.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"kennyChat":{'+
                     '"name":"Kenny",'+
                     '"pageName":"chatKenny",'+ 
                     '"className":"chatKenny",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -30px; left: 10%; position: absolute; background: url(./img/kenny.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"bable":{'+
                     '"name":"carmanBable",'+
                     '"pageName":"carmanBable",'+
                     '"className":"bable",'+
                     '"width_":"0",'+
                     '"height_":"0",'+
                     '"style":""'+                     
		'}'+

	'},'+
        
        '"parts":{'+
            '"CartmanMount":{'+        
                            '"name":"mount",'+
                            '"parent":"cartmanChat",'+                            
                            '"css":"height: 40px; width: 50px; top: 47%; left: 50%; margin-left: -6%; position: absolute;",'+
                            '"className":"cartmanMount",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/cartman-rot.png"'+
            '},'+
            '"CartmanRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"cartman",'+                            
                            '"css":"height: 18%; width: 18%; top: 50%; left: 46%; margin-left: -6%; position: absolute;",'+
                            '"className":"CartmanRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/cartman-rot.png"'+
            '},'+
            '"StanRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"stan",'+                            
                            '"css":"height: 17%; width: 20%; top: 57%; left: 48%; margin-left: -6%; position: absolute;",'+
                            '"className":"SanRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"StanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/stan-rot.png"'+
            '},'+
            '"KyleRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"kyle",'+                            
                            '"css":"height: 18%; width: 20%; top: 51%; left: 46%; margin-left: -6%; position: absolute;",'+
                            '"className":"KyleRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/kyle-rot.png"'+
            '},'+ 
            '"KannyHeadHome":{'+        
                            '"name":"KannyHead",'+
                            '"parent":"kenny",'+                            
                            '"css":"height: 70px; width: 53px; top: 35px; left: 42px; margin-left: 0; position: absolute;",'+ //морда кени
                            '"className":"KannyHead",'+
                            '"tagName":"canvas",'+
                            '"function":"KanyMad",'+
                            '"sprite":"./img/kenny-head.png",'+
                            '"pictDefault":"",'+
                            '"volume": "0"'+                            
            '},'+
            '"StanChatRotAnimation":{'+        
                            '"name":"StanChatAnimationRot",'+
                            '"parent":"chatStan",'+                            
                            '"css":"height: 30px; width: 40px; top: 60%; left: 30%; margin-left: 0; position: absolute;",'+
                            '"className":"StanRot",'+
                            '"tagName":"canvas",'+
                            '"function":"StanChatAnimationRot",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/stan-rot.png",'+
                            '"volume": "0"'+                            
            '},'+
            '"KyleChatRotAnimation":{'+        
                            '"name":"KyleChatAnimationRot",'+
                            '"parent":"chatKyle",'+                            
                            '"css":"height: 30px; width: 40px; top: 57%; left: 34%; margin-left: 0; position: absolute;",'+
                            '"className":"KyleRot",'+
                            '"tagName":"canvas",'+
                            '"function":"KyleChatAnimationRot",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/kyle-rot.png",'+
                            '"volume": "0"'+                            
            '}'+
            
        '}'+
'}';


var Dialog = "";

var dialog = '{ "cartman": {'+			
			'"KylesMom" : {'+
				'"name" : "KylesMom",'+
				'"pattern" : {'+
                                        '"0" : "Kyle\'s Mom"'+
                                '},'+
				'"answer" : "Kyle\'s Mom... She\'s a big, fat, fuckin\' BIIIIIIIIITCH! Who\'s a fuckin\' bitch? Kyle\'s Mooooooooom! Yeah!",'+
				'"audio": "0",'+
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"jew" : {'+
				'"name" : "jew",'+
				'"pattern" : {'+
                                        '"0" : "jew"'+
                                '},'+
				'"answer" : "Speak about it with Kyle. He\'s jew!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"dad" : {'+
				'"name" : "dad",'+
				'"pattern" : {'+
                                        '"0" : "dad"'+
                                '},'+
				'"answer" : "I don\'t have a dad. It\'s doesn\'t work.",'+
				'"audio": {'+
                                    '"0":{'+
                                        '"id":"chatcartman_cartman_dad",'+
                                        '"url":"путь к файлу ./audio/cartman/dad.mp3",'+
                                        '"time":"20"'+
                                        '}},'+                                        
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			  '"father" : {'+
				'"name" : "father",'+
				'"pattern" : {'+
                                        '"0" : "father"'+
                                '},'+
				'"answer" : "I don\'t have a dad. It\'s doesn\'t work.",'+
				'"audio": {'+
                                    '"0":{'+
                                        '"id":"chatcartman_cartman_dad",'+
                                        '"url":"путь к файлу ./audio/cartman/dad.mp3",'+
                                        '"time":"20"'+
                                        '}},'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 			 
			 '"thinkaboutkyle" : {'+
				'"name" : "thinkaboutkyle",'+
				'"pattern" : {'+                                        
					'"0":"what do you think about Kyle",'+
					'"1":"think Kyle"'+
                                 '},'+                                 
				'"answer" : "He is fucking Jew",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
                         
			  '"thinkaboutkenny" : {'+
				'"name" : "thinkaboutkenny",'+
				'"pattern" : {'+
						'"0":"what do you think about Kenny",'+
						'"1":"what do you think about Kenni",'+
						'"2":"think Kenny",'+
                                                '"3":"kenny",'+
						'"4":"Kenny\'s family"'+
					'},'+
				'"answer" : "Kenny\'s family is so poor, they had to put their cardboard box up for a second mortgage",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
                        '"money" : {'+
				'"name" : "money",'+
				'"pattern" : {'+
                                        '"0" : "for money",'+
                                        '"1": "money"'+
                                '},'+
				'"answer" : "I have never in my life done anything just for the money! If I\'m lying may the Lord strike me down right now!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"likemoney" : {'+
				'"name" : "likemoney",'+
				'"pattern" : {'+
						'"0":"like money",'+
						'"1":"love money"'+
					'},'+
				'"answer" : "Yes, i love money so much!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"allright" : {'+
				'"name" : "allright",'+
				'"pattern" : {'+
						'"0":"are you ok",'+
						'"1":"all right"'+
					'},'+
				'"answer" : "You know that feeling when the huge dump you just took shoots back up inside your ass? No, I\'m not all right!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"haven" : {'+
				'"name" : "haven",'+
				'"pattern" : {'+
                                        '"0" : "haven"'+
                                '},'+
				'"answer" : "Heaven could be like the pixie fairies of bubblegum forrest. you only see them if you really believe it them",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"drugs" : {'+
				'"name" : "drugs",'+
				'"pattern" : {'+
                                        '"0" : "drugs"'+
                                '},'+
				'"answer" : "Drugs are bad because if you do drugs you\'re a hippie and hippies suck",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
		 
			 '"like" : {'+
				'"name" : "like",'+
				'"pattern" : {'+
                                        '"0" : "do you like"'+
                                '},'+
				'"answer" : "Yes. May be..",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"suckmyballs" : {'+
				'"name" : "suckmyballs",'+
				'"pattern" : {'+
                                        '"0" : "suck my balls"'+
                                '},'+
				'"answer" : "Yes. May be..",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"myass" : {'+
				'"name" : "myass",'+
				'"pattern" : {'+
                                        '"0" : "my ass"'+
                                '},'+
				'"answer" : "OK, that\'s enough fat-ass jokes for this week",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"fatass" : {'+
				'"name" : "fatass",'+
				'"pattern" : {'+
                                        '"0" : "fat ass"'+
                                '},'+
				'"answer" : "OK, that\'s enough fat-ass jokes for this week",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+			 
			 
			 '"yourass" : {'+
				'"name" : "yourass",'+
				'"pattern" : {'+
						'"0":"in your ass",'+
						'"1":"your ass",'+
						'"2":"from your ass",'+
						'"3":"out of your ass"'+
					'},'+
				'"answer" : "Ok, that does it! Now listen! Why is it that everything today has involved things either going in or coming out of my ass? It\'s completely immature!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 		
			 '"ass" : {'+
				'"name" : "ass",'+
				'"pattern" : {'+
                                        '"0" : "ass"'+
                                '},'+
				'"answer" : "Oh, yeah? Oh, yeah? Say that to my face, pussy!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+			 
					

			 '"hippies" : {'+
				'"name" : "hippies",'+
				'"pattern" : {'+
                                        '"0" : "hippies"'+
                                '},'+
				'"answer" : "I hate hippies! I mean, the way they always talk about protectin the earth and then drive around in cars that get poor gas mileage and wear those stupid bracelets I hate em! I wanna kick em in the nuts!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
					 
			 '"think2" : {'+
				'"name" : "think2",'+
				'"pattern" : {'+
                                        '"0" : "what you think"'+
                                '},'+
				'"answer" : "I don\'t know",'+
				'"audio": {'+
                                    '"0":{'+
                                        '"id":"chatcartman_cartman_think",'+
                                        '"url":"./audio/cartman/dontknow.mp3",'+
                                        '"time":"15"'+
                                        '}'+
                                '},'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 			 
			 '"think" : {'+
				'"name" : "think",'+
				'"pattern" : {'+
                                        '"0" : "what do you think about"'+
                                '},'+
				'"answer" : "I don\'t know",'+
				'"audio": {'+
                                    '"0":{'+
                                        '"id":"chatcartman_cartman_think",'+
                                        '"url":"./audio/cartman/dontknow.mp3",'+
                                        '"time":"15"'+
                                        '}},'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"iwant" : {'+
				'"name" : "iwant",'+
				'"pattern" : {'+
                                        '"0" : "i want"'+
                                '},'+
				'"answer" : "Dude, that is not cool!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+

 			 '"hi" : {'+
				'"name" : "hi",'+
				'"pattern" : {'+
						'"0":"hi",'+
						'"1":"hello"'+
					'},'+
				'"answer" : "hi",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+		

			 '"fuck" : {'+
				'"name" : "fuck",'+
				'"pattern" : {'+
                                        '"0" : "fuck"'+
                                '},'+
				'"answer" : "What\'s the big deal? It doesn\'t hurt anybody. Fuck-fuckety-fuck-fuck-fuck. ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+		

			 '"Killkenny" : {'+
				'"name" : "Killkenny",'+
				'"pattern": {'+
                                        '"0":"killed kenny",'+
                                        '"1":"kill keny"'+
				'},'+
				'"answer" : "Bastards!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"youbitch" : {'+
				'"name" : "youbitch",'+
				'"pattern" : {'+
						'"0":"you are bitch",'+
						'"1":"bitch",'+
						'"2":"you bitch"'+
                                '},'+
				'"answer" : "Bitch! Dont call me bitch, bitch!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+			 
			 
			 '"areyou" : {'+
				'"name" : "areyou",'+
				'"pattern" : {'+
                                        '"0":"are you going",'+
                                        '"1":"are you being"'+
                                '},'+
				'"answer" : "no",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"maybe" : {'+
				'"name" : "maybe",'+
				'"pattern" : {'+
                                        '"0":"maybe",'+
                                        '"1":"may be",'+
                                        '"2":"may you",'+
                                        '"3":"can you"'+
                                '},'+
				'"answer" : "May be yes or may be not, dude. I don\'t want to talk about this.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"doyou" : {'+
				'"name" : "doyou",'+
				'"pattern" : {'+
                                        '"0":"do you",'+
                                        '"1":"did it",'+
                                        '"2":"can you"'+
					'},'+
				'"answer" : "Yeah, but you know what?  You can\'t do that. ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"doyouknow" : {'+
				'"name" : "doyouknow",'+
				'"pattern" : {'+
                                        '"0":"do you know",'+
                                        '"1":"know"'+
					'},'+
				'"answer" : "I know, but you don\'t! Na-na-na-na-na-na!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"where" : {'+
				'"name" : "where",'+
				'"pattern"  : {'+
                                        '"0" : "where"'+
                                '},'+
				'"answer" : "I don\'t remember",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+

 			 '"why" : {'+
				'"name" : "why",'+
				'"pattern"  : {'+
                                        '"0" : "why"'+
                                '},'+
				'"answer" : "It doesn\'t metter",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
 			 '"what" : {'+
				'"name" : "what",'+
				'"pattern"  : {'+
                                        '"0" : "what"'+
                                '},'+
				'"answer" : "What, dude?",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 
			 '"youare" : {'+
				'"name" : "youare",'+
				'"pattern"  : {'+
                                        '"0" : "you are"'+
                                '},'+
				'"answer" : "You\'re damn right",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
  			 '"default" : {'+
				'"name" : "default",'+
				'"pattern" : {'+
                                        '"0" : "0"'+
                                '},'+
				'"answer" : "Alright. Look. I didnt want to have to say this, but I think maybe were not seeing heaven because one of us doesnt believe in it enough!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "CartmanMount"'+
				'}'+
			 '},'+
			 
			 '"homeDefault" : {'+
                                '"name" : "homeDefault",'+
                                '"pattern" : "0",'+
                                '"answer" : "What did you say?!",'+
                                '"audio": {'+
                                    '"0":{'+
                                            '"id":"main-cartman_1",'+
                                            '"url":"./audio/cartman/main1.mp3",'+
                                            '"time":"50"'+
                                    '},'+                          
                                     '"1":{'+
                                            '"id":"main-cartman_2",'+
                                            '"url":"./audio/cartman/main2.mp3",'+
                                            '"time":"90"'+
                                          '},'+
                                     '"2":{'+
                                            '"id":"main-cartman_3",'+
                                            '"url":"./audio/cartman/main3.mp3",'+
                                            '"time":"140"'+
                                          '},'+
                                     '"3":{'+
                                            '"id":"main-cartman_4",'+
                                            '"url":"./audio/cartman/main4.mp3",'+
                                            '"time":"120"'+
                                          '},'+
                                    '"4":{'+
                                            '"id":"main-cartman_5",'+
                                            '"url":"./audio/cartman/main5.mp3",'+
                                            '"time":"90"'+
                                    '},'+
                                    '"5":{'+
                                            '"id":"main-cartman_6",'+
                                            '"url":"./audio/cartman/main6.mp3",'+
                                            '"time":"20"'+
                                    '},'+
                                    '"6":{'+
                                            '"id":"main-cartman_7",'+
                                            '"url":"./audio/cartman/main7.mp3",'+
                                            '"time":"50"'+
                                    '},'+
                                    '"7":{'+
                                            '"id":"main-cartman_8",'+
                                            '"url":"./audio/cartman/main8.mp3",'+
                                            '"time":"150"'+
                                    '},'+
                                    '"8":{'+
                                            '"id":"main-cartman_9",'+
                                            '"url":"./audio/cartman/main9.mp3",'+
                                            '"time":"110"'+
                                    '}'+
                                '},'+ 
                            '"animationParts": {'+
                                    '"0" : "CartmanMount"'+
                            '}'+
					'}'+
			 
			 
			 
'},'+
'"stan" : {'+
                          '"thinkaboutkyle" : {'+
				'"name" : "thinkaboutkyle",'+
				'"pattern" : {'+
						'"0":"what do you think about Kyle",'+
						'"1":"think Kyle"'+
					'},'+
				'"answer" : "He is my best friend fucking Jew",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
                         '},'+
			 
 			 '"jew" : {'+
				'"name" : "jew",'+
				'"pattern" : "jew",'+
				'"answer" : "Speak about it with Kyle",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"thinkaboutkartman" : {'+
				'"name" : "thinkaboutkartman",'+
				'"pattern" : {'+
						'"0":"what do you think about kartman",'+
						'"1":"think kartman"'+
					'},'+
				'"answer" : "He is fat ass!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"areyou" : {'+
				'"name" : "areyou",'+
				'"pattern" : {'+
						'"0":"are you going",'+
						'"1":"are you being"'+
					'},'+
				'"answer" : "no",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+			 
			 '"maybe" : {'+
				'"name" : "maybe",'+
				'"pattern" : {'+
						'"0":"maybe",'+
						'"1":"may be",'+
						'"2":"may you",'+
						'"3":"can you"'+
					'},'+
				'"answer" : "May be yes or may be not, dude. I don\'t want to talk about this.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 
			 '"likemoney" : {'+
				'"name" : "likemoney",'+
				'"pattern" : {'+
						'"0":"like money",'+
						'"1":"love money"'+
					'},'+
				'"answer" : "It\'s not important for me",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 			 
			 '"haven" : {'+
				'"name" : "haven",'+
				'"pattern" : "haven",'+
				'"answer" : "Talk about this with Kenny. He knows more.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 			 '"drugs" : {'+
				'"name" : "drugs",'+
				'"pattern" : "drugs",'+
				'"answer" : "Drugs are not so fun",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
		 
			 '"like" : {'+
				'"name" : "like",'+
				'"pattern" : "do you like",'+
				'"answer" : "Yeah.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"suckmyballs" : {'+
				'"name" : "suckmyballs",'+
				'"pattern" : "suck my balls",'+
				'"answer" : "Yes. May be..",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 			 '"myass" : {'+
				'"name" : "myass",'+
				'"pattern" : "my ass",'+
				'"answer" : "It\'s stupid,dude",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 			 '"fatass" : {'+
				'"name" : "fatass",'+
				'"pattern" : "fat  ass",'+
				'"answer" : "I\'m not a fat-ass! Talk about it with Cartman",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+			 
			 
			 '"yourass" : {'+
				'"name" : "yourass",'+
				'"pattern" : {'+
                                        '"0":"in your ass",'+
                                        '"1":"your ass",'+
                                        '"2":"from your ass",'+
                                        '"3":"out of your ass"'+
				'},'+
				'"answer" : "Ok, that does it! Now listen! that\'s really enough ass jokes for this week",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 		
			 '"ass" : {'+
				'"name" : "ass",'+
				'"pattern" : "ass",'+
				'"answer" : "Ass! Ass, ass, big ass, fat ass, what else?",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+			 
					

			 '"hippies" : {'+
				'"name" : "hippies",'+
				'"pattern" : "hippies",'+
				'"answer" : "Cartman hates hippies",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
					 
			 '"think2" : {'+
				'"name" : "think2",'+
				'"pattern" : "what you think",'+
				'"answer" : "I don\'t know",'+
				'"audio": "0",'+   
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 			 
			 '"think" : {'+
				'"name" : "think",'+
				'"pattern" : "what do you think about",'+
				'"answer" : "I don\'t know",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 			 '"iwant" : {'+
				'"name" : "iwant",'+
				'"pattern" : "i want",'+
				'"answer" : " That\'s impossible!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+

 			 '"hi" : {'+
				'"name" : "hi",'+
				'"pattern" : {'+
                                        '"0":"hi",'+
                                        '"1":"hello"'+
				'},'+
				'"answer" : "Hi,dude!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+		


			 '"fuck" : {'+
				'"name" : "fuck",'+
				'"pattern" : "fuck",'+
				'"answer" : "Wow, you\'re so smart",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+			 
			 
			 '"areyou" : {'+
				'"name" : "areyou",'+
				'"pattern" : {'+
                                        '"0":"are you going",'+
                                        '"1":"are you being"'+
				'},'+
				'"answer" : "no",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"maybe" : {'+
				'"name" : "maybe",'+
				'"pattern" : {'+
                                        '"0":"maybe",'+
                                        '"1":"may be",'+
                                        '"2":"may you",'+
                                        '"3":"can you"'+
				'},'+
				'"answer" : "May be yes or may be not, dude. I don\'t want to talk about this.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"doyou" : {'+
				'"name" : "doyou",'+
				'"pattern" : {'+
                                        '"0":"do you",'+
                                        '"1":"did it",'+
                                        '"2":"can you"'+
                                '},'+
				'"answer" : "Yeah, but you know what?  You can\'t do that. ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"doyouknow" : {'+
				'"name" : "doyouknow",'+
				'"pattern" : {'+
                                        '"0":"do you know",'+
                                        '"1":"know"'+
                                '},'+
				'"answer" : "Yeah, i know it, dude! ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"where" : {'+
				'"name" : "where",'+
				'"pattern"  : "where",'+
				'"answer" : "I don\'t remember",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+

 			 '"why" : {'+
				'"name" : "why",'+
				'"pattern"  : "why",'+
				'"answer" : "It doesn\'t metter",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+

			 '"what" : {'+
				'"name" : "what",'+
				'"pattern"  : "what",'+
				'"answer" : "What, dude?",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"Killkenny" : {'+
				'"name" : "Killkenny",'+
				'"pattern": {'+
                                        '"0":"killed kenny",'+
                                        '"1":"kill kenny"'+
                                '},'+
				'"answer" : "Bastards!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
 			 '"youbitch" : {'+
				'"name" : "youbitch",'+
				'"pattern" : {'+
                                        '"0":"you are bitch",'+
                                        '"1":"you bitch"'+
                                '},'+
				'"answer" : "Don\'t call me bitch!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"youare" : {'+
				'"name" : "youare",'+
				'"pattern"  : {'+
                                         '"0":"you are?"'+
                                '},'+
				'"answer" : "Whatabutt?",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			  '"default" : {'+
				'"name" : "default",'+
				'"pattern" : "0",'+
				'"answer" : "What did you say?!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "StanMount"'+
				'}'+
			 '},'+
			 
			 '"homeDefault" : {'+
                          '"name" : "homeDefault",'+
                          '"pattern" : "0",'+
                          '"answer" : "What did you say?!",'+
                          '"audio": {'+
                                    '"0":{'+
                                            '"id":"chatstan_stan_main1",'+
                                            '"url":"./audio/stan/main1.mp3",'+
                                            '"time":"50"'+
                                    '},'+                  
                                    '"1":{'+
                                            '"id":"chatstan_stan_main2",'+
                                            '"url":"./audio/stan/main2.mp3",'+
                                            '"time":"70"'+
                                    '},'+                  
                                    '"2":{'+
                                            '"id":"chatstan_stan_main3",'+
                                            '"url":"./audio/stan/main3.mp3",'+
                                            '"time":"50"'+
                                    '},'+                  
                                    '"3":{'+
                                            '"id":"chatstan_stan_main4",'+
                                            '"url":"./audio/stan/main4.mp3",'+
                                            '"time":"30"'+
                                    '},'+
                                    '"4":{'+
                                            '"id":"chatstan_stan_main5",'+
                                            '"url":"./audio/stan/main5.mp3",'+
                                            '"time":"20"'+
                                    '},'+  
                                    '"5":{'+
                                                  '"id":"chatstan_stan_main6",'+
                                                  '"url":"./audio/stan/main6.mp3",'+
                                                  '"time":"20"'+
                                          '}'+
                                  '},'+ 
                                    '"animationParts": {'+
                                            '"0" : "StanMount"'+
                                    '}'+
					'}'+
			 

	'},'+	
'"kyle" : {'+
                        '"thinkaboutkyle" : {'+
				'"name" : "thinkaboutkyle",'+
				'"pattern" : {'+
                                        '"0":"what do you think about Kyle",'+
                                        '"1":"think Kyle"'+
                                '},'+
				'"answer" : "He is my best friend fucking Jew",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"thinkaboutkartman" : {'+
				'"name" : "thinkaboutkartman",'+
				'"pattern" : {'+
                                        '"0":"what do you think about kartman",'+
                                        '"1":"think kartman"'+
                                '},'+
				'"answer" : "He is fat ass!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"areyoujew" : {'+
				'"name" : "areyoujew",'+
				'"pattern" : {'+
                                        '"0":"are you jew",'+
                                        '"1":"you jew"'+
                                '},'+
				'"answer" : "Don\'t call me Jew!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"areyou" : {'+
				'"name" : "areyou",'+
                                '"pattern" : {'+
                                        '"0":"are you going",'+
                                        '"1":"are you being"'+
                                '},'+
				'"answer" : "no",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"maybe" : {'+
				'"name" : "maybe",'+
				'"pattern" : {'+
                                        '"0":"maybe",'+
                                        '"1":"may be",'+
                                        '"2":"may you",'+
                                        '"3":"can you"'+
                                '},'+
				'"answer" : "May be yes or may be not, dude. I don\'t want to talk about this.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 
			 '"likemoney" : {'+
				'"name" : "likemoney",'+
				'"pattern" : {'+
                                        '"0":"like money",'+
                                        '"1":"love money"'+
                                '},'+
				'"answer" : "It\'s not important for me",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 			 
			 '"haven" : {'+
				'"name" : "haven",'+
				'"pattern" : "haven",'+
				'"answer" : "Heaven where Kenny wait us",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 			 '"drugs" : {'+
				'"name" : "drugs",'+
				'"pattern" : "drugs",'+
				'"answer" : "Drugs are not so fun",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
		 
			 '"like" : {'+
				'"name" : "like",'+
				'"pattern" : "do you like",'+
				'"answer" : "Yeah.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"suckmyballs" : {'+
				'"name" : "suckmyballs",'+
				'"pattern" : "suck my balls",'+
				'"answer" : " I\'ll kick your ass!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 			 '"myass" : {'+
				'"name" : "myass",'+
				'"pattern" : "my ass",'+
				'"answer" : "It\'s stupid,dude",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 			 '"fatass" : {'+
				'"name" : "fatass",'+
				'"pattern" : "fat  ass",'+
				'"answer" : "I\'m not a fat-ass! Talk about it with Cartman",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+			 
			 
			 '"yourass" : {'+
				'"name" : "yourass",'+
				'"pattern" : {'+
                                        '"0":"in your ass",'+
                                        '"1":"your ass",'+
                                        '"2":"from your ass",'+
                                        '"3":"out of your ass"'+
                                '},'+
				'"answer" : "Ok, that does it! Now listen! that\'s really enough ass jokes for this week",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 		
			 '"ass" : {'+
				'"name" : "ass",'+
				'"pattern" : "ass",'+
				'"answer" : "Ass, ass, ass, everething is gis ass",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+			 
					

			 '"hippies" : {'+
				'"name" : "hippies",'+
				'"pattern" : "hippies",'+
				'"answer" : "Cartman hates hippies",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
					 
			 '"think2" : {'+
				'"name" : "think2",'+
				'"pattern" : "what you think",'+
				'"answer" : "I don\'t know",'+
				'"audio": "0",'+   
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 			 
			 '"think" : {'+
				'"name" : "think",'+
				'"pattern" : "what do you think about",'+
				'"answer" : "I don\'t know",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 			 '"iwant" : {'+
				'"name" : "iwant",'+
				'"pattern" : "i want",'+
				'"answer" : " That\'s impossible!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+

 			 '"hi" : {'+
				'"name" : "hi",'+
				'"pattern" : {'+
                                        '"0":"hi",'+
                                        '"1":"hello"'+
                                '},'+
				'"answer" : "Hi,dude!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+		


			 '"fuck" : {'+
				'"name" : "fuck",'+
				'"pattern" : "fuck",'+
				'"answer" : "Wow, you\'re so smart",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+			 
			 
			 '"areyou" : {'+
				'"name" : "areyou",'+
				'"pattern" : {'+
                                        '"0":"are you going",'+
                                        '"1":"are you being"'+
                                '},'+
				'"answer" : "no",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"maybe" : {'+
				'"name" : "maybe",'+
				'"pattern" : {'+
                                        '"0":"maybe",'+
                                        '"1":"may be",'+
                                        '"2":"may you",'+
                                        '"3":"can you"'+
                                '},'+
				'"answer" : "May be yes or may be not, dude. I don\'t want to talk about this.",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"doyou" : {'+
				'"name" : "doyou",'+
				'"pattern" : {'+
                                        '"0":"do you",'+
                                        '"1":"did it",'+
                                        '"2":"can you"'+
                                '},'+
				'"answer" : "Yeah, but you know what?  You can\'t do that. ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"doyouknow" : {'+
				'"name" : "doyouknow",'+
				'"pattern" : {'+
                                        '"0":"do you know",'+
                                        '"1":"know"'+
                                '},'+
				'"answer" : "Yeah, i know it, dude! ",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"where" : {'+
				'"name" : "where",'+
				'"pattern"  : "where",'+
				'"answer" : "I don\'t remember",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+

 			 '"why" : {'+
				'"name" : "why",'+
				'"pattern"  : "why",'+
				'"answer" : "It doesn\'t metter",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+

			 '"what" : {'+
				'"name" : "what",'+
				'"pattern"  : "what",'+
				'"answer" : "What, dude?",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"Killkenny" : {'+
				'"name" : "Killkenny",'+
				'"pattern": {'+
                                        '"0":"killed kenny",'+
                                        '"1":"kill keny"'+
                                '},'+
				'"answer" : "Bastards!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
 			 '"youbitch" : {'+
				'"name" : "youbitch",'+
				'"pattern" : {'+
						'"0":"you are bitch",'+
						'"1":"you bitch"'+
					'},'+
				'"answer" : "Don\'t call me bitch!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 '"youare" : {'+
				'"name" : "youare",'+
				'"pattern"  : "you are",'+
				'"answer" : "Shut up!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			  '"default" : {'+
				'"name" : "default",'+
				'"pattern" : "0",'+
				'"answer" : "What did you say?!",'+
				'"audio": "0",'+  
				'"animationParts": {'+
					'"0" : "KyleMount"'+
				'}'+
			 '},'+
			 
			 
			 '"homeDefault" : {'+
                          '"name" : "homeDefault",'+
                          '"pattern" : "0",'+
                          '"answer" : "What did you say?!",'+
                          '"audio": {'+
                                    '"0":{'+
                                            '"id":"chatkyle_kyle_main1",'+
                                            '"url":"./audio/kyle/main1.mp3",'+
                                            '"time":"20"'+
                                    '},'+                          
                                     '"1":{'+
                                                  '"id":"chatkyle_kyle_main2",'+
                                                  '"url":"./audio/kyle/main2.mp3",'+
                                                  '"time":"10"'+
                                          '},'+
                                     '"1":{'+
                                                  '"id":"chatkyle_kyle_main3",'+
                                                  '"url":"./audio/kyle/main3.mp3",'+
                                                  '"time":"60"'+
                                          '}'+
                            '},'+ 
                            '"animationParts": {'+
                                    '"0" : "KyleMount"'+
                            '}'+
					'}'+
			

	'},'+
'"kenny": {'+
                    '"default" : {'+
                          '"name" : "default",'+
                          '"pattern" : "0",'+
                          '"answer" : "What did you say?!",'+
                          '"audio": {'+
                                    '"0":{'+
                                    '"id":"chatkenny_kenny_def1",'+
                                    '"url":"./audio/kenny/gef1.mp3",'+
                                    '"time":"10"'+
                            '}'+
                                '},'+ 
                            '"animationParts": {'+
                                    '"0" : "KyleMount"'+
                            '}'+
				'},'+			 

                    '"homeDefault" : {'+
                                    '"name" : "homeDefault",'+
                                    '"pattern" : "0",'+
                                    '"answer" : "What did you say?!",'+
                                    '"audio": {'+
                                        '"0":{'+
                                            '"id":"chatkenny_kenny_main1",'+
                                            '"url":"./audio/kenny/main1.mp3",'+
                                            '"time":"20"'+
                                        '},'+                          
                                         '"1":{'+
                                                '"id":"chatkenny_kenny_main2",'+
                                                '"url":"./audio/kenny/main2.mp3",'+
                                                '"time":"20"'+
                                        '},'+
                                        '"2":{'+
                                                '"id":"chatkenny_kenny_main3",'+
                                                '"url":"./audio/kenny/main3.mp3",'+
                                                '"time":"20"'+
                                         '},'+ 
                                        '"3":{'+
                                                '"id":"chatkenny_kenny_main4",'+
                                                '"url":"./audio/kenny/main4.mp3",'+
                                                '"time":"20"'+                            
                                         '},'+ 
                                        '"4":{'+
                                                '"id":"chatkenny_kenny_main5",'+
                                                '"url":"./audio/kenny/main5.mp3",'+
                                                '"time":"20"'+
                                        '}'+
                                     '},'+ 
                                     '"animationParts": {'+
                                            '"0" : "KyleMount"'+
                                    '}'+
			'}'+
			 
			 
	'}'+
'}';


$(function(){
    
 $(".page").css({"width" : $(window).width()+"px", "height" : $(window).height()+"px"});
//document.write(dialog)
 var Dialog = $.parseJSON(dialog);
//приобразуем в объект
var myDate  = $.parseJSON($Date); 

// получаем отношения, и размеры персонажей.    
sizeUpdate(1, myDate, 1, 1);     
	
// компелируем стили.    
   compile(myDate);    
    
    
// проприсовка активных элементов персонажей 
 
 ResizePage();
 
 
 
 parts(myDate);
// если ресайзится делаем ресайз )
$(window).resize(function(){  
    Resize(myDate);
    ResizePage();
 });
 
// MENU    
    $(".b_menu li").click(function(){ 
        var $link = $(this);
        var linkName = $(this).attr("goto");
        var $menu = $(".b_menu");       
            $menu.removeClass("home chatStan chatCartman chatKenny chatKyle movie");
            $menu.addClass(linkName);           
            $menu.children("li").removeClass("e_menu-active");
             
        var page = $("#"+linkName);

            var positionEl = page.offset();           
            if( positionEl.left != 0)
            {
                var margin = $(".i_wBlock").css("margin-left");
                var slide = ( -((margin.substring(0, (margin.length)-2))*1) + positionEl.left);        
                $(".i_wBlock").animate({"margin-left": "-"+slide +"px"}, 1000);
            }

          
            $link.addClass("e_menu-active");

    });
 
    $(".say").bind("click touch", function(){     
      say($(this), Dialog, myDate);     
   });
    $(".chat-input").keydown(function(e) {     
         
        if (e.keyCode === 13){
            say($(this), Dialog, myDate);     
        }
       });

$(".chat-input").keypress(function(event){
    var text = $(this).val(); 
    var charName = $(this).attr("name");
    helpSay(charName, text, Dialog);
 });


//Анимация на галвной странице

$(".cartman, .kyle, .stan, .cartmanChat, .chatStan, .chatKanny, .chatKyle").bind("click touch", function(){
    
        var target = this.className;
        var targetObj;
        $.each( myDate["elements"], function(index){
            if (this.className == target){
               targetObj = this;
            };         
        });
        console.log(Dialog[targetObj.name]);
        var animationObj; 
        var dialogObj = Dialog[targetObj.name].homeDefault;       
       
        
        $.each(myDate.parts, function(index){              
           if (this.parent === target ){            
               animationObj = this;
           }       
        });//endeach
       
        var play = Math.round((Math.random() * (Object.size(dialogObj.audio)-1)));       
       
        var sound = document.getElementById(dialogObj.audio[play].id);
           sound.play();  
        console.log(dialogObj["audio"]);
        animation(dialogObj.audio[play].time, animationObj);
       
    });   

// Кенни на главной

$(".kenny").click(function(){
     var target = this.className;
      var sound = document.getElementById('main-kenny_1');
          sound.play();  
     var head = $('.KannyHead')[0].getContext('2d');
      var img = new Image();
          img.src = "./img/kenny-2.png";     
      function screem(i){
          if (i === 0){
               head.clearRect(0, 0, 500, 500); 
               head.drawImage(img, 0, 0, 300, 150); 
               i++;
                setTimeout(
                    function(){                    
                        screem(i);
                    }, 1000
                );
          }else{
              head.clearRect(0, 0, 500, 500);
          } 
      }
      screem(0);
});


}); // document load 


//-----------------------===================-----------------------------
// ======================================================================
// ----------------------------------------------------------------------

// LIBRARY


//анимация разговора;
 var animation = function(time, animationPartObj){     
      var className = animationPartObj.className;
      var i = 0;
      var b = time;
      var img = new Image();
          img.src = animationPartObj.sprite;
      var imgDef = new Image();
          imgDef.src = animationPartObj.pictDefault;
      var mount = $("."+className)[0].getContext('2d');     
      var coords = new Array( -1, -270, -570, -850);
                                 
 function speak(i, mount){
          mount.clearRect(0, 0, 500, 300);           
          mount.drawImage(img, coords[Math.round(Math.random() * coords.length)], 0, 1150, 100); 
         
          if(i<b){             
                i=i+1;
          setTimeout(
                function(){                    
                    speak(i, mount);
                }, 100
            );           
           }else{  
               mount.clearRect(0, 0, 500, 500); 
               mount.drawImage(imgDef, 0, 0, 340, 105);                     
           }           
        } //  function speak
        speak(0, mount);
  
}; //animation


// проприсовка статических объектов на сранице и добавление некоторых стилей

 var compile = function (myDate){
   $.each(myDate.elements, function(i, val){
       $("#"+this.pageName).append("<div class='"+this.className+"' style='width:"+this.width_+"px; height: "+this.height_+"px; "+this.style+"'></div>");
       
    });   
 };

// прорисовка активных элементов персонажей
var parts = function(data){
$.each(data.parts, function(){
       $("."+this.parent).append("<"+this.tagName+" class="+this.className+" style='"+this.css+"'></"+this.tagName+">");
       if (this.tagName == "canvas"){
           
           var img = new Image(); 
            img.src = this.pictDefault;            
           var canv = $("."+this.className)[0].getContext('2d');
            img.onload = function() {                 
                 canv.clearRect(0, 0, 500, 500);                  
                 canv.drawImage(img, 0, 0, 340, 105);                  
        
           }
       }
   });
}; // прорисовка элементов

// преобразование размеров.
var sizeUpdate = function(firstTime, date, wK, hK){     
    if (firstTime){
       $.each(date.elements, function(index, el){
           if (this.fix != 1){
                if ( this.width_ != 0 && this.height_ != 0){
                    this.q =  this.height_ / this.width_ ;   // получаем коэфициент 
                    this.width_ = (this.width_ * date.client.widthOld)/100; // переводим в пиксили
                    this.height_ = (this.height_ * date.client.heightOld)/100; // переводим в пиксили
                    this.q =  this.height_ / this.width_ ;   // получаем коэфициент 
                 }else {
                     this.q = this.height_ / this.width_;
                 }                               
           }
        });

}else {
	$.each(date.elements, function(index, el){
		
            if  ( wK != 1 && hK != 1 ){                             
                    this.width_ = this.width_  *  wK; // домножаем на изменение сторон
                    this.height_ = this.width_ * this.q; // ресайзим блок
           }
           else if(wK != 1){
                    this.width_ = this.width_  *  wK; // домножаем на изменение сторон
                    this.height_ = this.width_ * this.q; // ресайзим блок
           }
           else if(hK  != 1){
                    this.height_ = this.height_ *  hK; // домножаем на изменение сторон
                    this.width_ = this.height_  / this.q; // ресайзим блок
           } 
       $("."+this.name).css({"width": this.width_, "height": this.height_});

        });
    }  
};


 // функция реагирующая на изменения экрана.
 
 function Resize(myDate){ 
    var OldW = myDate.client.widthOld;
    var OldH = myDate.client.heightOld;
    
    var width = $(window).width(); // получаем размер окошка 
    var height =  $(window).height(); // получаем размер окошка 
    var widthK =  width / OldW;
    var heightK = height / OldH;    
        myDate.client.widthK = widthK;
        myDate.client.heightK = heightK;
        myDate.client.widthOld = $(window).width();
        myDate.client.heightOld = $(window).height();
   sizeUpdate(0, myDate, widthK, heightK);      
   
}

function ResizePage(){ 
   var width = $(window).width();
   var height =  $(window).height();
   $(".i_wropper").css({
       "width": width,
       "height": height
    });
   $(".page").each( function(kay){
       $(this).css({
            "width": width,
            "height": height,

            "background-size": width+"px "+height+"px"

       });
   });   
}



var carman_sperk = function(){         
      var snd = document.getElementsByTagName("audio")[0];       
      snd.play();   
       
};
//------------------------------
//----------------------CHAT----
//------------------------------
    var say = function(obj, dialogObj, dateObj){
      $(".bable").show('fast');
      var input = obj.parent("div").children(".chat-input");       
      var name = input.attr("name");
      var page = input.parent("div").parent("div").parent("div");
      var value = input.val();
      
      var res = chat(name, value, dialogObj);
     
          res = dialogObj[name][res];
          
      var audioNum = random(res["audio"]);
      var time = res["audio"][audioNum]["time"];
      var animationPart = dateObj["parts"][res.animationParts[0]];      
      $("."+name+"_chat-bable").html(res["answer"]);      
       var snd = document.getElementById(res["audio"][audioNum]["id"]);       
           snd.play();
      
      animation(time, animationPart);
    }


    var chat = function(who, text, dialogs){
        text = text.toLowerCase();
        var re="default";         
        $.each(dialogs[who], function(key, value){
            var thisObj = this;            
            $.each(this.pattern, function(key, pattern){                
                
                if (text.indexOf(pattern) >= 0){
                    re = thisObj["name"];               
                }
            });
            
        });
        console.log(re);
        return re; 
        
    };

// --- работа с подсказками     
var helpSay = function(obj, text, dialogs){
    var q = new  RegExp("(^whie)*(how)* ", "gi");
    var variants = new Array();
        if(!(text.search(q)) && text){
            
            $.each(dialogs[obj], function(kay, value){               
             var p = this.pattern;
             var input = new RegExp("("+text+"){1}", "gi");
             console.log(input);
                if (p.search(input) > 0){ 
                    variants.push(this);  
                }
            });
            
         }
 // добавляем элементы подсказок.
    if (variants.length){
            $(".help").append("<ul class=\"variantList\"></ul>");
            $.each(variants, function(){
                $(".help ul").append("<li>"+this.pattern+"</li>");
            }); 
     }
          
};


// функция для вычиления длинны объекта
Object.size = function(obj){
    var size = 0, key;
    for (key in obj){
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var random = function(obj){
  return Math.round((Math.random() * (Object.size(obj)-1)));  
};

// коец скрипта. 
