function Bg(data) {
	this.x = data.x;
	this.y = data.y;
	this.res = data.res;

	this.width = this.res.width;
	this.height = this.res.height;

	this.draw = function(ctx) {
		ctx.drawImage(this.res, this.x, this.y, window.WIDTH, window.HEIGHT);
	}
}

function UI() {
	this.x = 0;
	this.y = window.HEIGHT - 62;
	this.res = window.resource.ui["main_bar"][0];

	this.tip = {color: "white", tip: "[참고]모험의 세계에 오신 것을 환영합니다！"};

	this.createTip = function(type, tip) {
		var color;
		switch(type) {
			case 0:
				color = "yellow";
				break;
			case 1:
				color = "white";
				break;
		}
		return {color: color, tip: tip};
	}

	this.update = function() {
		var num = parseInt(Math.random() * 5000);
		switch(num) {
			case 0:
				this.tip = this.createTip(0, "[도움말]방향키로 맵을 이동할 수 있습니다.");
				break;
			case 1:
				this.tip = this.createTip(0, "[도움말]배낭이 가득 차면 소지품을 버려야 합니다.");
				break;
			case 2:
				this.tip = this.createTip(0, "[도움말]점프+방향키로 밧줄과 사다리를 오를 수 있습니다.");
				break;
			case 3:
				this.tip = this.createTip(1, "[참고]본 게임은 테스트 전용입니다.");
				break;
			case 4:
				this.tip = this.createTip(1, "[참고]본 게임은 테스트 전용입니다.");
				break;
			case 5:
				this.tip = this.createTip(0, "[도움말]몬스터를 죽이면 확률적으로 장비를 얻을 수 있습니다.")
				break;
			case 6:
				this.tip = this.createTip(0, "[도움말]레벨업을 하면 5개의 능력 포인트를 획득할 수 있습니다.");
				break;
			case 7:
				this.tip = this.createTip(0, "[도움말]힘은 공격력과 방어력에 영향을 줍니다.");
				break;
			case 8:
				this.tip = this.createTip(0, "[도움말]민첩성은 공격력, 방어력, 마법 방어력에 영향을 줍니다.");
				break;
			case 9:
				this.tip = this.createTip(0, "[도움말]지능은 마법 방어력에 영향을 줍니다.");
				break;
			case 10:
				this.tip = this.createTip(0, "[도움말]행운은 공격력에 영향을 줍니다.");
				break;
		}
	}

	this.draw = function(ctx) {
		ctx.save();
		ctx.drawImage(this.res, this.x, this.y);
		ctx.fillStyle = this.tip.color;
		ctx.font = "12px liwen";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText(this.tip.tip, 10, window.HEIGHT - 54);

		var lineGradient = ctx.createLinearGradient (255, window.HEIGHT - 32,255, window.HEIGHT - 12);  
		lineGradient.addColorStop(0, 'rgba(255,0,0, 0.8)');    
		lineGradient.addColorStop(1, 'rgba(255,99,71, 0.8)');    
		ctx.fillStyle = lineGradient;    
		ctx.roundRect(254, window.HEIGHT - 32, 137 * window.player_attr.curr_hp / window.player_attr.max_hp, 12, 3, true, false);

		var lineGradient = ctx.createLinearGradient (423, window.HEIGHT - 32,423, window.HEIGHT - 12);  
		lineGradient.addColorStop(0, 'rgba(65,105,225, 0.8)');    
		lineGradient.addColorStop(1, 'rgba(100,149,237, 0.8)');    
		ctx.fillStyle = lineGradient;   
		ctx.roundRect(423, window.HEIGHT - 32, 137 * window.player_attr.curr_mp / window.player_attr.max_mp, 12, 3, true, false);

		
		var lineGradient = ctx.createLinearGradient (423, window.HEIGHT - 32,423, window.HEIGHT - 12);  
		lineGradient.addColorStop(0, 'rgba(124,252,0, 0.8)');    
		lineGradient.addColorStop(1, 'rgba(255,215,0, 0.8)');    
		ctx.fillStyle = lineGradient;   

		ctx.roundRect(254, window.HEIGHT - 15, 305 * window.player_attr.curr_exp / window.player_attr.max_exp, 12, 3, true, false);

		ctx.fillStyle = "yellow";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.font = "24px liwen";
		ctx.fillText(window.player_attr.level, 35, window.HEIGHT - 31);

		ctx.fillStyle = "white";
		ctx.font = "14px liwen";
		ctx.textAlign = "right";
		ctx.fillText("[" + window.player_attr.curr_hp + "/" + window.player_attr.max_hp + "]", 390, window.HEIGHT - 33);
		ctx.fillText("[" + window.player_attr.curr_mp + "/" + window.player_attr.max_mp + "]", 560, window.HEIGHT - 33);
		ctx.fillText(window.player_attr.curr_exp + "[" + (window.player_attr.curr_exp / window.player_attr.max_exp * 100).toFixed(2) + "%]", 560, window.HEIGHT - 16);

		ctx.restore();
	}
}