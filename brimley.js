function brimley(){

	// Standard grid unit
	var u = function(multiplier){
		return 16 * multiplier + 'px'
	}

	var bf = $('#battlefield');

	bf.height(u(24));
	bf.width(u(36));

	tank = function(){
		xpos = 12,
		ypos = 12,
		t = 'left';


		var viz = $('<div>',{
					class: "tank",
					css: {
						top: u(ypos),
						left: u(xpos),
					}
				})

		this.add = function(){
			bf.append(viz)
		};

		this.move = function(direction){
			if(direction == 'up'){
				if(ypos > 0){
					ypos--
				}
				t = 'up'
			}else if(direction == 'down'){
				if(ypos < 23){
					ypos++
				}
				t = 'down'
			}else if(direction == 'left'){
				if(xpos > 0){
					xpos--
				}
				t = 'left'
			}else if(direction == 'right'){
				if(xpos < 35){
					xpos++
				}
				t = 'right'
			}
			viz[0].style.top = u(ypos);
			viz[0].style.left = u(xpos);
		};

		this.shoot = function(){
			console.log('shot')
			console.log(xpos, ypos)
			new bullet(xpos, ypos, t)
		}

	//end tank
	};

	bullet = function(x, y, t){

		var viz = $('<div>',{
					class: "bullet",
					css: {
						top: u(y),
						left: u(x),
					}
				})

		bf.append(viz)

		setInterval(function(){
			if(t == 'up'){
				y--
			}else if(t == 'down'){
				y++
			}
			else if(t == 'left'){
				x--
			}
			else if(t == 'right'){
				x++
			}

			viz[0].style.top = u(y);
			viz[0].style.left = u(x);
		},50)

	}

	player = new tank()
	player.add();


	// Controls
	onkeydown = function(e){
		var code = e.which;
		//Up
		if(code == 38){player.move('up')}
		//Left
		if(code == 37){player.move('left')}
		//Right
		if(code == 39){player.move('right')}
		//Down
		if(code == 40){player.move('down')}
		//Space
		if(code == 32){player.shoot()}
	}


}	


// Start it up!
$(document).ready(function(){
	brimley();
})