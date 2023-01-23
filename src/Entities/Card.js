class Card {
	name;
	effects;
	information;
	hidden;

	constructor(name, effects, information, hidden) {
		this.name = name;
		this.effects = effects;
		this.information = information;
		this.hidden = hidden;
	}
}

class HunterCard extends Card {
	combo;
	attacks;
	weapon;

	constructor(name, weapon, combo, attacks, effects, information, hidden) {
		super(name, effects, information, hidden);
		this.weapon = weapon;
		this.combo = combo;
		this.attacks = attacks;
	}
}

class MonsterCard extends Card {
	position;
	attacks;
	monster;

	constructor(name, monster, position, attacks, effects, information, hidden) {
		super(name, effects, information, hidden);
		this.monster = monster;
		this.position = position;
		this.attacks = attacks;
	}
}
