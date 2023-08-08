// images for current puzzle
var pieces = [
    '<img src="../../assets/images/monkey/images/img1.png" alt="" data-piece="0" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img2.png" alt="" data-piece="1" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img3.png" alt="" data-piece="2" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img4.png" alt="" data-piece="3" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img5.png" alt="" data-piece="4" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img6.png" alt="" data-piece="5" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img7.png" alt="" data-piece="6" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img8.png" alt="" data-piece="7" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img9.png" alt="" data-piece="8" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img10.png" alt="" data-piece="9" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img11.png" alt="" data-piece="10" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img12.png" alt="" data-piece="11" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img13.png" alt="" data-piece="12" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img14.png" alt="" data-piece="13" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img15.png" alt="" data-piece="14" class="puzzle-piece" />',
    '<img src="../../assets/images/monkey/images/img16.png" alt="" data-piece="15" class="puzzle-piece" />'
];

// Function to place piece in to Div
function placePiece(item, index) {
    document.getElementById("pieces-area").innerHTML += '<div class="col-3 puzzle-space">' + item + '</div>';
}

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

// Shuffle the pieces
shuffle(pieces);

// Puzzle status - trueif piece is in the correct place, otherwise false.
var puzzleStatus = Array(pieces.length).fill(false);

// Wait for website to load then run main jQuery functions
$(document).ready(() => {
    // Make pieces draggable
    $(".puzzle-piece").draggable({
        //snap to grid
        snap: ".puzzle-space-holder",
        snapMode: "inner",
        // When a piece starts to move , mark it as in the wrong place
        start: function (event, ui) {
            puzzleStatus[$(this).data("piece")] = false;
        }
    });

    // test the finished puzzle
    pieces.forEach(placePiece);

});


