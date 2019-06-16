var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var GAP = 50;
var FONT_GAP = 70;
var TEXT_HEIGHT = 20;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr){
    var maxElement = arr[0];

    for (var i = 1; i<arr.length;i++){
        if(arr[i]>maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)')
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff')

    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 135, 40);
    ctx.fillText('Список результатов:',135, 55);

    var maxTime = getMaxElement(times);


    for(var i = 0;i<players.length;i++){
        ctx.fillText(players[i],(CLOUD_X + GAP)+(GAP+COLUMN_WIDTH)*i, CLOUD_Y + FONT_GAP + COLUMN_HEIGHT + TEXT_HEIGHT);
        ctx.fillRect((CLOUD_X + GAP)+(GAP+COLUMN_WIDTH)*i,CLOUD_Y + FONT_GAP, COLUMN_WIDTH, (COLUMN_HEIGHT*times[i])/maxTime);
    }

    //ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   // ctx.fillText('Вы',CLOUD_X + GAP,FONT_GAP+COLUMN_HEIGHT + CLOUD_Y + GAP);
   // ctx.fillRect(CLOUD_X+GAP, CLOUD_Y + FONT_GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

   // ctx.fillText('Настя',CLOUD_X + GAP + GAP + COLUMN_WIDTH,FONT_GAP+COLUMN_HEIGHT + CLOUD_Y);
   // ctx.fillRect(CLOUD_X+GAP*2+COLUMN_WIDTH, CLOUD_Y + FONT_GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

   // ctx.fillText('Паша',340,250);
   // ctx.fillRect(340, CLOUD_Y + FONT_GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

   // ctx.fillText('Юля',430,250);
   // ctx.fillRect(430, CLOUD_Y + FONT_GAP, COLUMN_WIDTH, COLUMN_HEIGHT);
};
 