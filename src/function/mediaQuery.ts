function matchMediaQuery(breakPoints: any, setBreakPoint: any) {
	for (var key of Object.keys(breakPoints)) {
		if (window.matchMedia(`${breakPoints[key]}`).matches) {
			setBreakPoint(key);
		}
	}
}

export default function breakPointOberver(breakPoints: any, setBreakPoint: any) {
	matchMediaQuery(breakPoints, setBreakPoint);
	window.addEventListener('resize', () => {
		matchMediaQuery(breakPoints, setBreakPoint);
	});
}
