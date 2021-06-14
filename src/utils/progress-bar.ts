import { BarProperties } from "../components/progress-bar/types";

/**
 * Helper function to change the properties of bar.
 * @param {number} count
 * @param {*} barState
 */
export function handleBarStatus(
	count: number,
	barState: BarProperties[]
): BarProperties[] {
	const newState = barState.map((step, index) => {
		if (step.percentage === 0 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 10 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 20 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 30 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 40 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 50 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 60 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 70 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 80 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		if (step.percentage === 90 && index === count) {
			return { percentage: step.percentage, isFilled: true };
		}
		return step;
	});

	return newState;
}

/**
 * Helper function to handle className
 * and styles when the step are completed
 * @param percentage
 * @param index
 * @param isFilled
 * @return {string} className
 */
export function handleBarStyles(
	percentage: number,
	index: number,
	isFilled: boolean
): string {
	if (percentage === 0 && index === 0 && isFilled) {
		return "filled-green";
	}
	if (percentage === 10 && index === 1 && isFilled) {
		return "filled-green";
	}
	if (percentage === 20 && index === 2 && isFilled) {
		return "filled-green";
	}
	if (percentage === 30 && index === 3 && isFilled) {
		return "filled-yellow";
	}
	if (percentage === 40 && index === 4 && isFilled) {
		return "filled-yellow";
	}
	if (percentage === 50 && index === 5 && isFilled) {
		return "filled-orange";
	}
	if (percentage === 60 && index === 6 && isFilled) {
		return "filled-orange";
	}
	if (percentage === 70 && index === 7 && isFilled) {
		return "filled-red";
	}
	if (percentage === 80 && index === 8 && isFilled) {
		return "filled-red";
	}
	if (percentage === 90 && index === 9 && isFilled) {
		return " filled-finish";
	}
	return "";
}

/**
 * Initial State for Progress-Bar
 */
export const barProps: BarProperties[] = [
	{
		percentage: 0,
		isFilled: false
	},
	{
		percentage: 10,
		isFilled: false
	},
	{
		percentage: 20,
		isFilled: false
	},
	{
		percentage: 30,
		isFilled: false
	},
	{
		percentage: 40,
		isFilled: false
	},
	{
		percentage: 50,
		isFilled: false
	},
	{
		percentage: 60,
		isFilled: false
	},
	{
		percentage: 70,
		isFilled: false
	},
	{
		percentage: 80,
		isFilled: false
	},
	{
		percentage: 90,
		isFilled: false
	}
];
