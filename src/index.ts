console.log("hello Typescript");

const num: number = 20;
const str: string = "hello";

const isBool: boolean = true;

// typescript gedeg n turul buguud JS ruu durmiin daguu turluudiig n zaaj ugnu. Tegeed typescriptee javascript ruu hurvuulne. Ingesneer aldaag uridchilan typescripteer turul butiin durmiin daguu aldaagui bichne.

// typescript => javascript ruu hurvuulne
// --oOo--
// typescript-g compider ashiglaj js ruu hurvuulne
// node js bwr zuvhun js-g ajilluuldag

console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);

// javascrip-g jaahan urgutguud typescript (MS gargaj irsen)-g gargaj irj aldaagui bichih bolomjiig olgoson.
function add(a: number, b: number): number {
  return a + b;
}
const y: number = add(100, 100);
console.log("ADD", y);

// zaaval toon utga butsaana gedriig bichne.
const add2 = (a: number, b: number): number => {
  return a + b;
};
const myPrint = (text: string): void => {
  console.log("Hello", text);
};

// print n ugsun toog console.log ruu heveldeg function. herev VOID geed bichvel utga butsaagui functs.

const s = add2(200, 500);
myPrint("Welcome");

// type imperence n anhnii utgaar n oilgono

// bichij duusaad npx tsc index.ts-g JS ruu hurvuulne. Hurvuulsnii daraa node index.js-r ajilluulne

// type huis: boolean HuisType er | en;

interface IPerson {
  name: string;
  age: number;
  //   huis: HuisType;
}

interface ITeacher extends IPerson {
  lesson: string;
}
