const text = document.querySelector('.text ')

text.innerHTML = text.textContent.replace(/./g, '<span>$&</span>');
		console.log(text);
		const animation = anime.timeline({
			targets : '.text span',
			easing : 'easeInOutExpo',
			loop : true,
		})
		animation
		.add ({
			rotate:function(){
				return anime.random(-360,360)
			},
			translateX:function(){
				return anime.random(-500 , 500)
			},
			translateY:function(){
				return anime.random(-500 , 500)
			},
			duration:300,
			delay : anime.stagger(15),
		})
		.add ({
			rotate:0,
			translateX:0,
			translateY:0,
			duration:5000,
			delay : anime.stagger(25),	
		})
		.add ({
			duration : 13000,
		})