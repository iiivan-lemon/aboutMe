export interface projectData {
  title: string,
  subTitle: string,
  year: string,
  description: string,
  addition: string,
  content: string[],
  video: string[]
  links?: {figma?: string, github?: string},
  hardSkills: string[]
}