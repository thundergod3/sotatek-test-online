type ProrityListI = Array<ProrityItemI>;

interface ProrityItemI {
	name: string;
	code: string;
}

const prorityList: ProrityListI = [
	{
		name: "low",
		code: "0",
	},
	{
		name: "normal",
		code: "1",
	},
	{
		name: "high",
		code: "2",
	},
];

export const prorityListName = prorityList.map((item: ProrityItemI): string => item.name);
export const prorityListCode = prorityList.map((item: ProrityItemI): string => item.code);
export type { ProrityListI, ProrityItemI };
