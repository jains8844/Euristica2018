window.addEventListener("load",function(){for(var e=document.getElementsByTagName("img"),t=0;t<e.length;t++)e[t].getAttribute("data-src")&&e[t].setAttribute("src",e[t].getAttribute("data-src"))},!1);var app=new Vue({el:"#header",data:{title:"Euristica",subtitle:"The Programming Club, IIT Indore"}}),intro=new Vue({el:"#intro",data:{subtitle:"This generation has seen great programmers like Linus Torvalds and Jeff Dean.\nTalented and hardworking programmers are rising all around the globe. To foster this\n        amazing skill and culture, the Department of Computer Science and Engineering, IIT\n        Indore presents you with - Euristica’18, the annual coding festival of our college.\n        We will be conducting a variety of events ranging from Competitive Programming and\n        Application Development to Cyber Security and Machine Learning.\n        ",link:"https://goo.gl/forms/6XvZX1oed5u8lfxy1"}}),events=new Vue({el:"#events",data:{list:[{title:"Divide By Zero 6.0",src:"images/compressed/dbz.png",date:"To be announced",content:"For the Smart Ones !",about:" Our flagship event, a short duration competitive programming contest.",dt:"TBA",longContent:'\n      <i>\n      Our flagship event, a short duration competitive programming contest.</i><br>\n<b>Contest Duration </b>- 2.5 hours<br>\n<b>No. of Problems </b>- 7 to 8<br>\n<b>Date</b> - TBA<br>\n<b>Time </b>- TBA<br>\n\n<b>Previous Years links</b> - <a target="_blank"  href="http://codeforces.com/contest/768" > DBZ 5.0 </a>|\n<a target="_blank"  href="https://www.codechef.com/DIBZ2016" >DBZ 4.0</a> |\n<a target="_blank"  href="https://www.codechef.com/DBYZ15">DBZ 3.0</a> |\n<a target="_blank"  href="https://www.codechef.com/DBYZ2014" >DBZ 2.0</a> |\n<a target="_blank"  href="https://www.codechef.com/DBYZ2013" >DBZ 1.0</a>\n<br><b>Contact</b> - Vinit Shah ( <a href="tel:+91 75060 7823">+91 75060 7823</a> )\n<br><div> Prizes worth 50k for the winners. </div>\n      '},{title:"Hackathon",src:"images/compressed/hackathon.png",date:"23th - 24th March",content:"For the Creative Ones !",dt:"23rd March - 24th March",about:" A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.",longContent:'\n      <i>\n      A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.\n</i>\n      <br><b>Contest Duration</b> - 30 hrs\n<br><b>No. of problems</b> - TBA\n<br><b>Date</b> - 23rd to 24th march\n<br><b>Time</b> - <br>Begins at 9 PM IST 23rd March\n\n<br><b>Contact</b> - Mrigank Krishan ( <a href="tel:+91 724752160">+91 724752160</a> )\n<br><div> Prizes worth 100k for the winners. </div>\n      '},{title:"Capture The Flag",src:"images/compressed/ctf.png",date:"7th-8th April",content:"For the Clever Ones !",dt:"7th to 8th April",about:"A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.",longContent:'\n   <i>   \nA Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.\n</i>\n<br><b>Format</b> - Jeopardy\n<br><b>Contest Duration</b> - TBA\n<br><b>Date</b> - 7th to 8th April\n<br><b>Time</b> - TBA\n<br><b>Contest link</b> - <a target="_blank"  href="http://ctf.euristica.in" >http://ctf.euristica.in</a>\n<br><b>Contact</b> - <br> Kunal Gupta ( <a href="tel:+91 99719 18360">+91 99719 18360</a>, <a href="tel:+91 80767 81706">+91 80767 81706</a> ) <br> Bhor Verma ( <a href="tel:+91 81092 09652">+91 81092 09652</a> )\n<br><div> Prizes worth 50k for the winners. </div>\n      '},{title:"Machine Learning Codesprint",src:"images/compressed/ml.png",date:"25th March - 8th April",content:"For the Analytical Ones !",dt:"25th March 12:00 noon to 8th April 12:00 noon",about:"Participants will be given real world Machine Learning problems, and will have to train their computers to understand and model the data, and predict target outputs corresponding to unseen inputs.",longContent:'\n  <i> Participants will be given real world Machine Learning problems, and will have to train their computers to understand and model the data, and predict target outputs corresponding to unseen inputs.\n</i><br><b>Contest Duration</b> - 25th March to 8th April\n<br><b>No. of Problems</b> - 3\n<br><b>Date and Time</b> - <br>25th March 12:00 noon to 8th April 12:00 noon\n\n<br><b>Contact</b> - Ankit Gaur ( <a href="tel:+91 81716 8516">+91 81716 8516</a> )\n<br><div> Prizes worth 30k for the winners. </div>\n      '},{title:"Code Mélange 3.0",src:"images/compressed/code_melange.png",date:"30th March - 1st April, 21:00",content:"For the Relentless Ones !",dt:"30th March 9:00pm to 1st April 9:00am",about:"A long algorithmic competitive programming contest which will test your logical, analytical and algorithmic skills.",longContent:'\n  <i>    A long algorithmic competitive programming contest which will test your logical, analytical and algorithmic skills.</i>\n<br><b>Contest Duration</b> - 36 hours\n<br><b>No. of Problems</b> - 15-16\n<br><b>Date and Time</b> - <br> 30th March 9:00pm to 1st April 9:00am\n\n<br><b>Previous Year Links</b> - \n<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti/" >Code Mélange 2017</a> | \n<a target="_blank"  href="https://www.hackerrank.com/contests/code-melange-iiti" >Code Melange 2016</a>\n<br><b>Contact</b> - Kumar Abhinav ( <a href="tel:+91 88510 9687">+91 88510 9687</a> )\n<br><div> Prizes worth 30k for the winners. </div>\n      '},{title:"Code Golf 2017",src:"images/compressed/code_golf.png",date:"26th March, 21:00-23:59",content:"For the Succinct Ones !",dt:"26th March 9:00 PM - 12:00 PM 27th March",about:"A coding contest in which shorter is your code, better is your score.",longContent:'\n      <i>\n      A coding contest in which shorter is your code, better is your score.</i>\n<br><b>Contest Duration</b> - 3 hours \n<br><b>No. of Problems</b> - 7-8\n<br><b>Date and Time</b> - <br>26th March 9:00 PM - 12:00 PM 27th March\n\n<br><b>Previous Year Links</b> - \n<br><b>Code Golf 3.0</b> -  <a target="_blank"  href="https://www.hackerrank.com/fluxus-code-golf" >https://www.hackerrank.com/fluxus-code-golf</a>\n<br><b>Contact</b> - Divyansh Choudhary ( <a href="tel:+91 9818652018">+91 9818652018</a> )\n<br><div> Prizes worth 12k for the winners </div>\n      '},{title:"Surprise Language 4.0",src:"images/compressed/surprise_language.png",dt:"28th March 9:00 PM - 12:00 PM 29th March",content:"For the Spontaneous Ones !",about:"A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. We will be releasing a list of languages 3 days before the contest.",longContent:'\n      <i>\n      A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. We will be releasing a list of languages 3 days before the contest.\n</i>\n      <br><b>Contest Duration</b> - 3 Hours.\n<br><b>No. of Problems</b> - 7-8\n<br><b>Date and Time</b> - \n<br>28th March 9:00 PM - 12:00 PM 29th March\n\n<br><b>Previous Year Links</b> - \n<a target="_blank"  href="https://www.hackerrank.com/surprise-language-3-0" >SL 2017</a>\n | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-2-0" >SL 2016</a>\n | <a target="_blank"  href="https://www.hackerrank.com/surprise-language" >SL 2015</a>\n <br><b>Contact</b> - Dhruv Chadha ( <a href="tel:+91 991028650">+91 991028650</a> )\n<br><div> Prizes worth 12k for the winners </div>\n      '},{title:"Hack the Code",src:"images/compressed/hack_the_code.png",date:"3rd April, 21:00-23:59",content:"For the Meticulous Ones !",dt:"3 April 9:00 PM - 12:00 PM 4 April",about:"A programming contest which tests your debugging skills by correcting/debugging the given code for the failing test case(s).",longContent:'\n  <i>    A programming contest which tests your debugging skills by correcting/debugging the given code for the failing test case(s).\n</i><br><b>Contest Duration</b> - 3 hours\n<br><b>No. of Problems</b> - 15\n<br><b>Date and Time</b> -<br> 3 April 9:00 PM - 12:00 PM 4 April\n\n<br><b>Contact</b> - Daanish Mahajan ( <a href="tel:+91 8146365803">+91 8146365803</a> )\n<br><div> Prizes worth 8k for the winners </div>\n      '},{title:"Fool You!",src:"images/compressed/fool_you.png",date:"1st April, 15:00-18:00",content:"For the Deceptive Ones !",dt:"1 April 3:00 PM - 8:00 PM 1 April",about:"A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !",longContent:'\n  <i>    A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !\n</i><br><b>Contest Duration</b> - 5 hours\n<br><b>No. of Problems</b> - 10-12\n<br><b>Date and Time</b> - <br> 1 April 3:00 PM - 8:00 PM 1 April\n\n<br><b>Contact</b> - Vishnunarayan K I ( <a href="tel:+91 8921799625">+91 8921799625</a> )\n<br><div> Prizes worth 12k for the winners </div>\n      '},{title:"SOH CAH TOA",src:"images/compressed/soh_cah_toa.png",date:"6th April",content:"For the Geeky Ones !",dt:" 6th April 9:00pm - 12:00am 7th April",about:" A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics.",longContent:'\n  <i>  A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics.\n</i><br><b>Contest Duration</b> - 3 hours\n<br><b>No. of Problems</b> - 10-12\n<br><b>Date and Time</b> -<br> 6th April 9:00pm - 12:00am 7th April\n\n<br><b>Contact</b> - Priyanshu Varshney ( <a href="tel:+91 8770855796">+91 8770855796</a> )\n<br><div> Prizes worth 15k for the winners </div>\n      '}]},methods:{modal(e){$("#modal"+e).modal({fadeDuration:100})}}}),footer=new Vue({el:"#footer",data:{subtitle:"The Programming Club, IIT Indore",list:[{class:"icon fa-link",tag:"The Programming Club",link:"http://pclubiiti.github.io/"},{class:"icon fa-facebook",tag:" Facebook",link:"https://www.facebook.com/pclubiiti/"},{class:"icon fa-github",tag:"Github",link:"https://github.com/pclubiiti"},{class:"icon fa-envelope",tag:"euristica@iiti.ac.in",link:"mailto:euristica@iiti.ac.in"},{class:"icon fa-envelope",tag:"progclub@iiti.ac.in",link:"mailto:progclub@iiti.ac.in"}]}}),sponsors=new Vue({el:"#sponsors",data:{sponsors:[{link:"https://hackerearth.com",logo:"https://hackerearth.global.ssl.fastly.net/static/hackerearth/images/logo/HE_logo.svg"},{link:"https://codechef.com",logo:"https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.png"},{link:"http://codeforces.com",logo:"/images/cf.png"},{link:"https://hackerrank.com",logo:"https://hrcdn.net/hackerrank/assets/brand/hr_logo_new_word-52db4dcdc76b31be86456c77b55a7396.png"}]}});