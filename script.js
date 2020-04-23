var inputReady = true;

var input = $(".404-input");

input.focus();

$(".container").on("click", function(e) {
    input.focus();
});

input.on("keyup", function(e) {
    $(".new-output").text(input.val());
});

$(".four-oh-four-form").on("submit", function(e) {
    e.preventDefault();
    var val = $(this).children($(".404-input")).val().toLowerCase();
    var href;
    switch (val) {
      case "kittens":
        showKittens();
        break;

      case "test":
        showKittens();
        break;

      case "hallo":
        showHallo();
        break;

      case "connect 211.174.162.210":
        connect();
        break;

      case "login":
        login();
        break;

      case "help":
        getHelp();
        break;

      case "y":
        answered();
        break;

      case "admin":
        madeit();
        break;

      case "get time":
        getTime();
        break;

      case "much":
        much();
        break;

      case "get addresses":
        getAddresses();
        break;
            
      case "list servers":
        listServers();
        break;

      default:
        beep.play();
        resetForm();
    }
});

function resetForm(withKittens) {
    var message = "command not found";
    var input = $(".404-input");
    if (withKittens) {
        $(".kittens").removeClass("kittens");
        message = "Huzzzzzah Kittehs!";
    }
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function showHallo() {
    var message = "connecting...";
    var message2 = "Hallihallo. Gut, dass das klappt.";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message);
    $(".terminal").append('<p class="prompt">' + message2 + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function connect() {
    var message = "connecting...";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message);
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
    setTimeout(establishing, 2e3);
}

function establishing() {
    var message = "establishing admin access...";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message);
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
    setTimeout(login, 3e3);
}

function getHelp() {
    var commands = [ "get time - get server time", 
                    "connect database - connect to svenskabanken database", 
                    "file system - access file system",
                     "list servers - list available servers"];
    var message = "available commands:";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + "<br><br></p>");
    setTimeout(function() {
    $(".terminal").append('<p class="promptList">' + commands.join("<br><br>") + '</p><p class="prompt output new-output"></p><br>');
    },1000)
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function login() {
    var message2 = "are you the admin? type Y/N";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message2 + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function answered() {
    var message = "type password and press enter";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function madeit() {
    var message = "you made it!";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function listServers() {
    var th1 = "server location";
    var th2 = "IP address";
    var th3 = "department";
    var tr1_1 = "stockholm";
    var tr1_2 = "36.98.12.16";
    var tr1_3 = "shareholders";
    var tr2_1 = "södertalje";
    var tr2_2 = "112.82.169.101";
    var tr2_3 = "products";
    var tr3_1 = "uppsala";
    var tr3_2 = "236.217.66.178";
    var tr3_3 = "localizations";
    var tr4_1 = "skelefteå";
    var tr4_2 = "211.174.162.210";
    var tr4_3 = "customers";
    var tr5_1 = "malmö";
    var tr5_2 = "26.116.18.183";
    var tr5_3 = "contractors";
    var message2 = "type connect [address] to connect to desired server";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt"></p><table class="greenTable"><tr><th>' + th1 + "</th><th>" + th2 + "</th><th>" + th3 + "</th></tr><tr><td>" + tr1_1 + "</td><td>" + tr1_2 + "</td><td>" + tr1_3 + "</td></tr><tr><td>" + tr2_1 + "</td><td>" + tr2_2 + "</td><td>" + tr2_3 + "</td></tr><tr><td>" + tr3_1 + "</td><td>" + tr3_2 + "</td><td>" + tr3_3 + "</td></tr><tr><td>" + tr4_1 + "</td><td>" + tr4_2 + "</td><td>" + tr4_3 + "</td></tr><tr><td>" + tr5_1 + "</td><td>" + tr5_2 + "</td><td>" + tr5_3 + '</td></tr></table><br>');
    $(".terminal").append('<p class="prompt">' + message2 + '</p><p class="prompt output new-output"></p>');
   
    
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function getTime() {
    var message = "current server time:";
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + hours + ":" + minutes + ":" + seconds + '</p><p class="prompt output new-output"></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function much() {
    var message1 = "traceroute 185.199.111.153";
    var message2 = "de-fra01b-ri2-ae-29-0.aorta.net (84.116.134.162)  18.513 ms  19.006 ms  28.3 {";
    var message3 = "de-fra01b-ri2-ae-29-0.aorta.net (84.116.134.162)  18.513 ms  19.006 ms  28.351 ms;";
    var message4 = "};";
    var message5 = "while (--i >= 0) {";
    var message6 = "free_page((unsigned long)group_info->blocks[i]);";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message1 + "<br><br></p>");
    setTimeout(function() {
        $(".terminal").append('<p class="prompt">' + message2 + "<br><br></p>");
    }, 1e3);
    setTimeout(function() {
        $(".terminal").append('<p class="prompt">' + message3 + "<br><br></p>");
    }, 2e3);
    setTimeout(function() {
        $(".terminal").append('<p class="prompt">' + message4 + "<br><br></p>");
    }, 3e3);
    setTimeout(function() {
        $(".terminal").append('<p class="prompt">' + message5 + "<br><br></p>");
    }, 4e3);
    setTimeout(function() {
        $(".terminal").append('<p class="prompt">' + message6 + "<br><br></p>");
    }, 5e3);
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function getAddresses() {
    var commands = [ "185.199.111.153 - data backup", "84.116.134.162 - shareholder database", "11.98.167.162 - product database", "11.98.167.162 - customers database" ];
    var message = "network servers:";
    var message2 = "type connect [address] to connect to desired server";
    var input = $(".404-input");
    $(".new-output").removeClass("new-output");
    input.val("");
    $(".terminal").append('<p class="prompt">' + message + "<br><br></p>");
    $(".terminal").append('<p class="promptList">' + commands.join("<br><br>") + "<br><br></p");
    $(".terminal").append('<p class="prompt">' + message2 + '</p><p class="prompt output new-output"><br></p>');
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
}

function showKittens() {
    $(".terminal").append("<div class='kittens'>" + "<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" + "<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" + "<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" + "<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" + "<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" + "<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" + "<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" + "<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" + "<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" + "<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" + "<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" + "<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" + "<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" + "<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" + "<p class='prompt'>                                                              </p></div>");
    var lines = $(".kittens p");
    $.each(lines, function(index, line) {
        setTimeout(function() {
            $(line).css({
                opacity: 1
            });
            textEffect($(line));
        }, index * 100);
    });
    $(".new-output").velocity("scroll"), {
        duration: 100
    };
    setTimeout(function() {
        var gif;
        $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens", function(result) {
            gif = result.data.image_url;
            $(".terminal").append('<img class="kitten-gif" src="' + gif + '"">');
            resetForm(true);
        });
    }, lines.length * 100 + 1e3);
}

function textEffect(line) {
    var alpha = [ ";", ".", ",", ":", ";", "~", "`" ];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);
    var emptyString = copyString.map(function(el) {
        return [ alpha[Math.floor(Math.random() * alpha.length)], index++ ];
    });
    emptyString = shuffle(emptyString);
    $.each(copyString, function(i, el) {
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);
        setTimeout(function() {
            fromUnderscore(copyString, splitString, newChar, line);
        }, i * animationSpeed);
    });
}

function toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(""));
}

function fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], 
    o[j] = x) ;
    return o;
}

var beep = new Audio('beep.wav'); 