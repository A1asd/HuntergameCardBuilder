class Attack {
	damage;
	type;

	constructor(damage, type) {
		this.damage = damage;
		this.type = type;
	}
}

class HunterAttack extends Attack {
	range;

	constructor(damage, type, range) {
		super(damage, type);
		this.range = range;
	}
}

class MonsterAttack extends Attack {
	position;

	constructor(damage, type, position) {
		super(damage, type);
		this.position = position;
	}
}
