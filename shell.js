const createGaps = a => {
	var gaps = [];
	for (var i = 0, j = a.length, t; 1 <= (t = Math.floor(j / Math.pow(2, i + 1))); i += 1) {
		gaps[i] = t;
		if (t === 1) {
			break;
		}
	}
	if (gaps[i] !== 1) {
		gaps.push(1);
	}
	return gaps;
}

const shellSort = a => {
	var gaps = createGaps(a),
		temp;

	for (var i = 0, j = gaps.length, gap; i < j; i += 1) {
		gap = gaps[i];
		for (var x = gap, y = a.length; x < y; x += 1) {
			temp = a[x];
			for (var z = x; z >= gap && a[z - gap] > temp; z -= gap) {
				a[z] = a[z - gap];
			}
			a[z] = temp;
		}
    }
    return a
}


module.exports = a => shellSort(a)
