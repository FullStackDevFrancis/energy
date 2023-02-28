export enum Type {
  string, choice, input
}
export interface Choice {
  title: string
}

export interface Question {
  index: number
  title: string,
  subtext: string,
  footer: string
  type: Type,
  choices: Choice[] | undefined
}

export const questions: Question[] = [
  {
    title: "Ken je jouw EPC?",
    subtext: "We willen graag jouw EPC weten om later te calculeren",
    footer: "",
    index: 0,
    type: Type.string,
    choices: [
      {title: 'Ik ken mijn EPC'},
      {title: 'Ik ken mijn EPC niet'}
    ]
  },
  {
    title: "2) Wat is je verbruik?",
    subtext: "Je verbruik :)",
    type: Type.string,
    footer: "footer text",
    index: 1,
    choices: [
      {title: 'Hoog'},
      {title: 'Zeer hoog'}
    ]
  },  {
    title: "2) Geef je epc verbruik in?",
    subtext: "Je verbruik :)",
    type: Type.input,
    footer: "footer text",
    index: 3,
    choices: undefined
  }
]
