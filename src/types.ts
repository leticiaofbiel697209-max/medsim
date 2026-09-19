export type Severity='stable'|'warning'|'critical';export type Mode='study'|'surprise'|'directed';
export interface VitalSigns{hr:number;bp:string;rr:number;spo2:number;temp:number}
export interface ExamResult{name:string;value:string;availableAt:number;orderedAt?:number}
export interface Treatment{id:string;label:string;effect:number}
export interface CaseTemplate{id:string;diagnosis:string;specialty:string;difficulty:string;presentation:string;patient:{name:string;age:number;sex:string;history:string};vitals:VitalSigns;symptoms:string[];negatives:string[];physical:string[];questions:{q:string;a:string}[];exams:ExamResult[];treatments:Treatment[];clues:string[];references:string[]}
export interface TimelineEvent{time:number;text:string;severity:Severity}
export interface Session{caseId:string;mode:Mode;time:number;vitals:VitalSigns;ordered:string[];applied:string[];hypotheses:string[];asked:string[];timeline:TimelineEvent[];finished:boolean;outcome?:string}
export interface HistoryItem{caseId:string;diagnosis:string;date:string;outcome:string;score:number}
