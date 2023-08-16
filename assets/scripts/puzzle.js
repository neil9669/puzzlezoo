// images for current puzzle
var pieces = [
    '<img src="../../assets/images/tiger/img1.png" alt="" data-piece="0" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img2.png" alt="" data-piece="1" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img3.png" alt="" data-piece="2" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img4.png" alt="" data-piece="3" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img5.png" alt="" data-piece="4" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img6.png" alt="" data-piece="5" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img7.png" alt="" data-piece="6" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img8.png" alt="" data-piece="7" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img9.png" alt="" data-piece="8" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img10.png" alt="" data-piece="9" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img11.png" alt="" data-piece="10" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img12.png" alt="" data-piece="11" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img13.png" alt="" data-piece="12" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img14.png" alt="" data-piece="13" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img15.png" alt="" data-piece="14" class="puzzle-piece" />',
    '<img src="../../assets/images/tiger/img16.png" alt="" data-piece="15" class="puzzle-piece" />'
];



// Function to shuffle array (of pieces)
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Function to place piece in to Div
function placePiece(item, index) {
    //    let test = document.getElementById("pieces-area").innerHTML += '<div class="col-3 puzzle-space">' + item + '</div>';


    document.getElementById("pieces-area").innerHTML += '<div class="col-3 puzzle-space">' + item + '</div>';
    //console.log(test);
    //  console.log(item, index);
}

// Shuffle the pieces
shuffle(pieces);

// Place the pieces
pieces.forEach(placePiece);
// Puzzle status - trueif piece is in the correct place, otherwise false.
var puzzleStatus = Array(pieces.length).fill(false);

//function puzzleLoad();

// Wait for website to load then run main jQuery functions
// When document is ready...

//$(document).ready(function() {
function puzzleReady(jQuery) {
    // Make pieces draggable
    $(".puzzle-piece").draggable({
        //snap to grid
        snap: ".puzzle-space-holder",
        snapMode: "inner",
        // When a piece starts to move , mark it as in the wrong place
        start: function (event, ui) {
            puzzleStatus[$(this).data("piece")] = false;
        }
    }); // puzzle-piece end

    // Make board droppable
    $(".puzzle-drop-place").droppable({
        // When piece is in a grid square
        drop: function (event, ui) {
            // Check this square is ok to drop in
            if ($(this).data("piece") == ui.draggable.data("piece")) {
                puzzleStatus[$(this).data("piece")] = true;
            } else {
                puzzleStatus[$(this).data("piece")] = false;
            }

            // If all pieces correct then puzzle is complete
            if (puzzleStatus.every(function (value) { return value; })) {
                puzzleComplete();
            }
        }
    }); //puzzle-drop-place end


    //}); // ready function end
}

$(document).ready(puzzleReady);

// click event function to display instructions
$('#instructions').click(function () {
    $('.bg').css('background-size', '0%');
    $('#instructions-area').show();
    $('#board').css('display', 'flex');
    $('#pieces-area').css('display', 'none');
});  // instructions end

// click event function to start the puzzle
$('#start').click(function () {
    $('.bg').css('background-size', '0%');
    $('#instructions-area').hide();
    $('#pieces-area').css('display', 'flex');
    $('#board').css('display', 'flex');
}); //Start end

// click event function for puzzle choice
$('#puzzle-choice').click(function () {
    $("#Puzzle-choices").show();
});

// click event function for elephant puzzle choice
$('#elephant').click(function () {
    $("#Puzzle-choices").hide();
    $("#pieces-area div").remove();
    currPuzzle("elephant");
});

// click event function for monkey puzzle choice
$('#monkey').click(function () {
    $("#Puzzle-choices").hide();
    $("#pieces-area div").remove();
    currPuzzle("monkey");
    $(onPageLoad);
});

// click event function for panda puzzle choice
$('#panda').click(function () {
    $("#Puzzle-choices").hide();
    $("#pieces-area div").remove();
    currPuzzle("panda");
    $(onPageLoad);
});

// click event function for tiger puzzle choice
$('#tiger').click(function () {
    $("#Puzzle-choices").hide();
    $("#pieces-area div").remove();
    currPuzzle("tiger");
    $(onPageLoad);
});

// click event function for turtle puzzle choice
$('#turtle').click(function () {
    $("#Puzzle-choices").hide();
    $("#pieces-area div").remove();
    currPuzzle("turtle");
    $(onPageLoad);
});

// click event function for debug choice
$('#debug').click(function () {
    console.log($("#board div"));
    console.log($("#pieces-area div"));
});

// change puzzle based on choice
function currPuzzle(puzzle) {
    // Get name of old puzzle;
    let temp = pieces[0].split('/', 5);
    let oldPuzzle = temp[temp.length - 1];
    // Replace the old puzzle divs with new puzzle
    let puzzleDiv = $("#board div");
    let puzzleVar = pieces[0];
    let oldsrc = puzzleDiv[0].innerHTML;
    let newsrc = oldsrc;

    // change puzzle pieces location in pieces variable
    for (let i = 0; i < pieces.length; ++i) {
        puzzleVar = `<img src="../../assets/images/${puzzle}/img${i + 1}.png" alt="" data-piece="${i}" class="puzzle-piece" />`;
        pieces[i] = puzzleVar;
    }

    // change puzzle pieces location in Divs in index.html 
    for (let i = 0; i < puzzleDiv.length; ++i) {
        newsrc = puzzleDiv[i].innerHTML.replace(oldPuzzle, puzzle);
        puzzleDiv[i].innerHTML = newsrc;
    }
    $(puzzleReady);
    // Shuffle the pieces
    $(shuffle(pieces));
    // Place the pieces
    pieces.forEach(placePiece);
} // currPuzzle end


// Call this function when puzzle correctly completed
function puzzleComplete() {
    $("#pieces-area").hide();
    $("#board").slideUp();
    $("#puzzle-complete").show().delay(1500).fadeOut();
    $('#instructions-area').hide();
    $('#puzzle-complete-message').show();
    $("#family-pic").delay(1800).fadeIn(2000);
}
