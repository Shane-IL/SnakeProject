/**
 * Created by Shane on 17/03/2014.
 */
var Global = {
    Constants: {
        InitialSnakeLength: 5,
        InitialSnakePosition: {top: 20, left: 20},
        GridHeight: 80,
        GridWidth: 80,
        GridCellWidth: 2,
        GridCellHeight: 2,
        SizeMultiplier: 10,
        VerticalBorder: undefined,
        HorizontalBorder: undefined
    },
    Levels: {
        Easy: 600,
        Medium: 400,
        Standard: 200,
        Hard: 100
    },
    SnakeDirections: {
        Left: 1,
        Up: 2,
        Right: 3,
        Down: 4
    },
    NodeClasses: {
        foodClass: 'food-class',
        holeClass: 'hole-class',
        snakeClass: 'snake-class',
        defaultClass: 'default-class',
        tailClass: 'tail-class'
    }
};