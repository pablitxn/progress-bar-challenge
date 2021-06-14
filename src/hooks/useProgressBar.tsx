import { useEffect, useState, useCallback } from "react";
import { barProps, handleBarStatus } from "../utils/progress-bar";

export function useProgressBar() {
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [intervalState, setIntervalState] = useState<null | any>(null);
	const [barState, setBarState] = useState(barProps);

	const handleStart = () => {
		if (count === 0) {
			setBarState(barProps);
		}
		setIsActive(true);
	};

	const handleStop = () => setIsActive(false);

	const handleReset = () => {
		clearInterval(intervalState);
		setIntervalState(null);
		setBarState(barProps);
		setCount(0);
		setIsActive(true);
	};

	const startInterval = useCallback(() => {
		let internalCount = count;
		const interval = setInterval(() => {
			if (internalCount === 0) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(1);
			}

			if (internalCount === 1) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(2);
			}

			if (internalCount === 2) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(3);
			}

			if (internalCount === 3) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(4);
			}

			if (internalCount === 4) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(5);
			}

			if (internalCount === 5) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(6);
			}

			if (internalCount === 6) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(7);
			}

			if (internalCount === 7) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(8);
			}

			if (internalCount === 8) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				setCount(9);
			}

			if (internalCount === 9) {
				setBarState((prev) => {
					const newState = handleBarStatus(internalCount, prev);
					return newState;
				});
				clearInterval(intervalState);
				setIntervalState(null);
				setCount(0);
				setIsActive(false);
			}
			internalCount++;
		}, 1000);

		return interval;
	}, [isActive, count, setBarState, setCount]);

	useEffect(() => {
		if (isActive && intervalState === null) {
			const interval = startInterval();
			setIntervalState(interval);
		}

		if (!isActive) {
			clearInterval(intervalState);
			setIntervalState(null);
		}
	}, [isActive, count]);

	return {
		handleStart,
		handleStop,
		handleReset,
		barState
	};
}
