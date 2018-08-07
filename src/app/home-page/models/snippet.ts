import { languages } from './temp-languages.enum';



export class Snippet {
    private _title: string;
    private _desc: string;
    private _code: string;
    private _lang: languages;

    get title(): string {
     return this.title;
    }
    get desc(): string {
        return this.desc;
       }
    get code(): string {
        return this.code;
       }
    get lang(): languages {
        return this.lang;
       }

       constructor(title: string, desc: string, code: string, lang: languages) {
           this._title = title;
           this._desc = desc;
           this._code = code;
           this._lang = lang ;



       }

}
