export default function () {
    let now = new Date();
	return {
		generated: new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(now),
        generated_year: now.getFullYear()
	};
}