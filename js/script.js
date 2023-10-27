function specialFunction()
{

}

let lastImage = 0;

function reloadFunction() {
    let actualImage = document.getElementById("catImage");
    let randomImgNumber;

    do
    {
        randomImgNumber = randomImgFunction(10);
    } while (lastImage === randomImgNumber);

    lastImage = randomImgNumber;

    let nextImage = "images/" + randomImgNumber + ".jpeg";

    function randomImgFunction(numberOfImages)
    {
        return Math.floor(Math.random() * numberOfImages) + 1;
    }

    actualImage.setAttribute("src", nextImage);
}


document.addEventListener("DOMContentLoaded", function ()
{
    var image = document.getElementById("catImage");
    var isDragging = false;
    var initialX, initialY;
    var originalX, originalY;
    
    image.addEventListener("mousedown", function (e) {
        e.preventDefault();
        isDragging = true;
        image.style.cursor = "grabbing";
        initialX = e.clientX;
        initialY = e.clientY;

        originalX = parseInt(image.style.left || 0, 10);
        originalY = parseInt(image.style.top || 0, 10);
    });
    
    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            let newX = e.clientX - initialX;
            let newY = e.clientY - initialY;
            image.style.left = newX + "px";
            image.style.top = newY + "px";
        }
    });
    
    document.addEventListener("mouseup", function () {
        isDragging = false;
        image.style.cursor = "grab";

        image.style.left = originalX + "px";
        image.style.top = originalY + "px";
    });    
});
