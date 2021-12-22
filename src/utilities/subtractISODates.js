// makes date able to be subtracted from
const isoDateToCompare = (isoDate) => {
	const parts = isoDate.match(/\d+/g);
	return new Date(
		parts[0],
		parts[1] - 1,
		parts[2],
		parts[3],
		parts[4],
		parts[5],
	);
};

function subtractISODates(nextAiredISO, todayISO) {
	return (
		(isoDateToCompare(nextAiredISO) - isoDateToCompare(todayISO)) /
		60000
	).toFixed(2);
}

export default subtractISODates;
