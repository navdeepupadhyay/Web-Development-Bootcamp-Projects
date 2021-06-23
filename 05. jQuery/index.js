

$(document).ready(function () {
    $("h1").css("color", "red");
});

$("h1").css("color", "red"); 

$("h1").css("color", "red"); 
console.log($("h1").css("font-size")); 

$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title margin-50"); 

console.log($("h1").hasClass("big-title margin-50")); 

$("h1").text("Bye");
$("button").html("<em>Hey</em>"); 

console.log($("img").attr("src")); 
$("a").attr("href", "https://yahoo.com"); 

$("h1").click(function () {
    $("h1").css("color", "purple");
});

for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}


$("button").click(function () { 
    $("h1").css("color", "purple");
});

$("input").keydown(function (event) {
    console.log(event.key);
});

$(document).keydown(function (event) { .
    $("h1").text(event.key);
});


$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});


$("h1").before("<button>New Before Button</button>"); 
$("h1").after("<button>New After Button</button>");
$("h1").prepend("<button>New Prepend Button</button>"); 
$("h1").append("<button>New Append Button</button>");

