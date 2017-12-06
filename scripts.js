var king = document.getElementById('player');

var directions = [];
var fromLeft = 0;
var fromTop = 0;
var stepSize = 100 / 7;

king.moveUp = function(steps) {
	directions.push({ direction: 'up', steps: steps });
}

king.moveRight = function(steps) {
	directions.push({ direction: 'right', steps: steps });
}

king.moveDown = function(steps) {
	directions.push({ direction: 'down', steps: steps });
}

king.moveLeft = function(steps) {
	directions.push({ direction: 'left', steps: steps });
}

var i = 0;

function ExecuteAnimations() {
	setTimeout(function() {

		switch (directions[i].direction)
				{
			case 'up':
				fromTop -= stepSize * directions[i].steps;
				break;
			case 'right':
				fromLeft += stepSize * directions[i].steps;
				break;
			case 'down':
				fromTop += stepSize * directions[i].steps;
				break;
			case 'left':
				fromLeft -= stepSize * directions[i].steps;
				break;
		}

		king.style.left = fromLeft + '%';
		king.style.top = fromTop + '%';

		i++;

		if (i < directions.length) {
			ExecuteAnimations();
		}
	}, 1000);
}

function Play() {
	var js = editor.getValue();
	var s = document.createElement('script');
	s.textContent = js;
	document.body.appendChild(s);
	ExecuteAnimations();
}

function Reset() {
	king.style.top = '0';
	king.style.left = '0';
	directions = [];
	fromLeft = 0;
	fromTop = 0;
	i = 0;
}