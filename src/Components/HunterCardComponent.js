const HunterCardComponent = {
	props:['card'],

	template: `
		<div class="card" :title="card.hidden">
			<div class="card-combo">{{card.combo}}</div>
			<div class="card-name">{{card.name}}</div>
			<div class="card-weapon">{{card.weapon}}</div>
			<div class="card-image"></div>
			<div class="card-attacks">{{card.attacks}}</div>
			<div class="card-effects">{{card.effects}}</div>
			<div class="card-information">{{card.information}}</div>
		</div>
	`
}
