export type BarProperties = {
	percentage: number;
	isFilled: boolean;
};

export interface IProgressBar {
	barProperties: BarProperties[];
}
