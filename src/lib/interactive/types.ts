/** New quiz contracts. Deliberately independent of the existing assessment/editorial engines. */
export type QuizKind = "knowledge" | "preference" | "hybrid" | "cooperative" | "logic";
export type Weights = readonly [number, number];
export interface Option { id: string; label: string; weights?: Weights }
export interface Source { id: string; label: string; kind: "reference" | "original"; url?: string }
export interface Section { id: string; title: string; description?: string }
export interface Dimension { id: string; low: string; high: string; description: string }
export interface BaseQuestion {
  id: string; sectionId: string; prompt: string; explanation: string;
  /** Original cases state all rules/data in context; factual questions identify supporting references. */
  context?: string; sourceIds: string[];
  /** Explicit discussion/creative choices, never represented as correct answers. */
  unscored?: boolean;
  showIf?: { questionId: string; optionId: string };
}
export interface ChoiceQuestion extends BaseQuestion { kind: "choice"; options: Option[]; correct?: string }
export interface RankQuestion extends BaseQuestion { kind: "rank"; items: Option[] }
export interface OrderQuestion extends BaseQuestion { kind: "order"; items: Option[]; correctOrder?: string[]; precedence?: [string,string][] }
export interface MatchQuestion extends BaseQuestion { kind: "match"; left: Option[]; right: Option[]; pairs?: Record<string,string>; /** Unkeyed preference assignments. */ weights?: Record<string,Weights> }
export interface GraphQuestion extends BaseQuestion { kind: "graph"; left: Option[]; right: Option[]; edges: [string,string][] }
export interface GridQuestion extends BaseQuestion { kind: "grid"; cells: {id:string;label:string;options:Option[];correct:string}[] }
export interface SliderQuestion extends BaseQuestion { kind: "slider"; lowLabel: string; highLabel: string; dimension: 0 | 1 }
export interface ReflectionQuestion extends BaseQuestion { kind: "reflection"; hint: string }
export interface Tone { frequency: number; duration: number; delay: number; waveform?: "sine" | "triangle" | "square"; gain?: number }
export interface AudioQuestion extends BaseQuestion { kind:"audio"; tones:Tone[]; transcript:string; options:Option[]; correct?:string }
export interface HotspotQuestion extends BaseQuestion {
  kind:"hotspot"; diagram:{title:string;description:string;zones:{id:string;label:string;x:number;y:number;width:number;height:number;color?:string}[]};
  options:Option[]; correct?:string;
}
export type Question = ChoiceQuestion | RankQuestion | OrderQuestion | MatchQuestion | GraphQuestion | GridQuestion | SliderQuestion | ReflectionQuestion | AudioQuestion | HotspotQuestion;
export type Answer = string | number | string[] | Record<string,string> | [string,string][];
export type Answers = Record<string,Answer>;
export interface Quiz {
  id:string;slug:string;categoryId:string;title:string;description:string;kind:QuizKind;version:1;
  minutes:number;sections:Section[];dimensions?:[Dimension,Dimension];questions:Question[];sources:Source[];
  /** Honest descriptions of adaptations such as original sounds or guided reflection. */
  note?:string;
  playMode?:"solo"|"pass-and-play";
}
export interface QuizSummary {id:string;slug:string;categoryId:string;title:string;description:string;kind:QuizKind;minutes:number;questionCount:number;formats:string[]}
export interface Category {id:string;code:string;name:string;description:string;accent:string}
